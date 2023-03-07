import emailjs from '@emailjs/browser'
import { useContext, useState } from 'react'

import CloseIcon from '../components/icons/Close'
import { ModalContext } from './layout/Layout'
import styles from './projectModal.module.css'

const ProjectModal = (props) => {
  const modalContext = useContext(ModalContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState(
    'About Us:' +
      '\r\n' +
      '\r\n' +
      'Project Description:' +
      '\r\n' +
      '\r\n' +
      'Project Goal:'
  )
  const [successMessage, setSuccessMessage] = useState('')
  const toSend = {
    from_name: firstName + ' ' + lastName,
    to_name: 'Logo Media',
    message: website + ' ' + message + ' ' + phone,
    reply_to: email,
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      data: {
        name: firstName + ' ' + lastName,
        phone: phone,
        website: website,
        email: email,
        project_details: message,
      },
    }
    emailjs
      .send('service_1tbbiwc', 'template_nta5lyb', toSend, 'XtmHxL5zdet_8tKjY')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
    fetch('https://admin.logo.media/api/contacts', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        setSuccessMessage('Success! Your message has been sent')
        setFirstName('')
        setLastName('')
        setPhone('')
        setWebsite('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        setSuccessMessage('Error:', error)
      })
  }
  return (
    <div className={styles.modal}>
      <div className={styles.innerModal}>
        <CloseIcon
          className={styles.close}
          onClick={() => modalContext.setIsOpen(false)}
        />
        <form
          id="projectForm"
          className={styles.projectForm}
          onSubmit={handleSubmit}
        >
          <div className={styles.formHeading}>Start a Project</div>
          <p>
            Complete the form below and our team will reach out to get started
            working on your project.
          </p>
          <div className={styles.formFields}>
            <div className={styles.halfBlock}>
              <label>First Name:</label>
              <input
                name="firstName"
                type="name"
                placeholder="Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className={styles.halfBlock}>
              <label>Last Name:</label>
              <input
                name="lastName"
                type="name"
                placeholder="Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className={styles.halfBlock}>
              <label>Email:</label>
              <input
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.halfBlock}>
              <label>Phone:</label>
              <input
                name="phone"
                type="phone"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className={styles.fullBlock}>
              <label>Your Website:</label>
              <input
                name="website"
                type="url"
                placeholder="Enter Your Website URL"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
            <div className={styles.fullBlock}>
              <label>Project Details:</label>
              <textarea
                name="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.successMessage}>{successMessage}</div>
          <button className="button">Submit Project</button>
        </form>
      </div>
    </div>
  )
}
export default ProjectModal
