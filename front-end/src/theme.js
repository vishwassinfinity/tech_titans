import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#5EAAA8', // pastel teal
    },
    secondary: {
      main: '#FF9B85', // pastel coral
    },
    background: {
      default: mode === 'light' ? '#F9FBFF' : '#121212',
      paper: mode === 'light' ? '#FFFFFF' : '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Inter, Poppins, sans-serif',
    h1: { fontSize: '2.2rem', fontWeight: 600 },
    h2: { fontSize: '1.6rem', fontWeight: 600 },
  },
});

export const createAppTheme = (mode = 'light') => createTheme(getDesignTokens(mode)); 