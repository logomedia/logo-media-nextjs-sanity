import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ProjectModal from 'components/projectModal'
import { createContext, useState } from 'react'

// contexts
import { SettingsProvider } from '../../contexts/SettingsContext'
// theme
import ThemeProvider from '../../theme'
import MotionLazyContainer from '../animate/MotionLazyContainer'
import ProgressBar from '../ProgressBar'
import Footer from './footer/Footer'
import Header from './header/Header'

export const ModalContext = createContext()

export default function Layout({ children, siteSettings }) {
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
                  <Header settings={siteSettings} />
                  <main>{children}</main>
                  <Footer settings={siteSettings} />
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
