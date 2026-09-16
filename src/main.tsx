import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Landing from './pages/Landing.tsx';
import { defaultLightTheme } from './theme.ts';

const theme = defaultLightTheme;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
      <Analytics />
    </ThemeProvider>
  </StrictMode>,
)
