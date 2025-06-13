import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // calming blue
    },
    secondary: {
      main: '#00b894', // green accent
    },
  },
  typography: {
    h1: { fontSize: '2.2rem', fontWeight: 600 },
    h2: { fontSize: '1.6rem', fontWeight: 600 },
  },
});

export default theme; 