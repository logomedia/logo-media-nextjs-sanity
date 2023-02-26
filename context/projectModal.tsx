import React, { useState } from 'react'

export const ProjectModal = React.createContext()
export const ProjectModalProvider = ({ children }) => {
  const [projectModal, setProjectModal] = useState(false)

  return (
    <ProjectModal.Provider value={{ projectModal, setProjectModal }}>
      {children}
    </ProjectModal.Provider>
  )
}
