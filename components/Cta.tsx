import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'
import Calendly from './Calendly'

function cta(props) {
  const { title, route, link, cta_types, calendy } = props
  let btnStyles=''
  if (cta_types.button_type === "primary")
    {
      btnStyles = styles.button
    }
  else if (cta_types.button_type === "secondary")
    {
      btnStyles = styles.secondaryButton
  }
  else if (cta_types.button_type === undefined){
    btnStyles = styles.button
  }
  if (calendy) {
      return (
        
              <Calendly styles={btnStyles} text={title} />
             
    )
    
  }
  if (route && route.slug && route.slug.current) {
      return (
          
              <Link
        className={btnStyles}
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        {title}
      </Link>
     
      
    )
  }

  if (link) {
    return (
      <Link className={btnStyles} href={link}>
        {title}
      </Link>
    )
  }
  

  return <a className={btnStyles}>{title}</a>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
  cta_types: PropTypes.object,
  calendly: PropTypes.bool,
}

export default cta