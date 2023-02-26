import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ProjectModal from 'components/projectModal'
import { createContext, useState } from 'react'

import MotionLazyContainer from '../../components/animate/MotionLazyContainer'
import Header from '../../components/layout/header/Header'
import ProgressBar from '../../components/ProgressBar'
import RtlLayout from '../../components/RtlLayout'
import Settings from '../../components/settings'
// contexts
import { SettingsProvider } from '../../contexts/SettingsContext'
// theme
import ThemeProvider from '../../theme'

export const ModalContext = createContext()

export default function Layout({ children, settings }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            <ThemeProvider>
              <MotionLazyContainer>
                <ProgressBar />
                <div className="App">
                  <Header settings={settings} />
                  <main>{children}</main>
                  {isOpen ? <ProjectModal /> : ''}
                </div>
              </MotionLazyContainer>
            </ThemeProvider>
          </ModalContext.Provider>
        </SettingsProvider>
      </LocalizationProvider>
    </>
  )
}
