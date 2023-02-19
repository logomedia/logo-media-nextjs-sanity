
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import MotionLazyContainer from '../../components/animate/MotionLazyContainer';
import Header from '../../components/layout/header/Header'
import ProgressBar from '../../components/ProgressBar';
import RtlLayout from '../../components/RtlLayout';
import Settings from '../../components/settings';
// contexts
import { SettingsProvider } from '../../contexts/SettingsContext';
// theme
import ThemeProvider from '../../theme';

export default function Layout({ children }) {
    return (
      <>

       
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SettingsProvider>
        <ThemeProvider>
            <MotionLazyContainer>
              <RtlLayout>
                <Settings />
                  <ProgressBar />
                   <div className="App">
                    <Header/>
                      <main>{children}</main>
                    </div>
              </RtlLayout>
            </MotionLazyContainer>
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
      </>
    )
  }