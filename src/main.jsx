import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/mulish';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
});


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider >
)
