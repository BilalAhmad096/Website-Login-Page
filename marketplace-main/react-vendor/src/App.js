import './App.css';
import { SettingsConsumer, SettingsProvider } from './context/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Toaster from './components/Toaster';
import Router from './routes'

function App() {
  const auth = useSelector((auth) => auth)
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {(settings) => {
          // Prevent theme flicker when restoring custom settings from browser storage
          if (!settings.isInitialized) {
            // return null;
          }
          console.log(settings)
          const theme = createTheme({
            colorPreset: settings.colorPreset,
            contrast: settings.contrast,
            direction: settings.direction,
            paletteMode: settings.paletteMode,
            responsiveFontSizes: settings.responsiveFontSizes
          });

          // Prevent guards from redirecting
          const showSlashScreen = !auth.isInitialized;

          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {/* {showSlashScreen
                ? <SplashScreen />
                : (
                  <>
                    {getLayout(<Component {...pageProps} />)}
                  </>
                )} */}
                <Router />
              <Toaster />
            </ThemeProvider>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
}

export default App;
