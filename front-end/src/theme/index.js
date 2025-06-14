import { createTheme } from '@mui/material/styles';
import { palette, typography } from './tokens';

export const getTheme = (mode = 'light') =>
  createTheme({
    palette: {
      mode,
      ...palette,
      background: {
        default: mode === 'light' ? palette.neutral[100] : palette.neutral[900],
        paper: mode === 'light' ? '#ffffff' : palette.neutral[800],
      },
    },
    typography,
    shape: { borderRadius: 12 },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  }); 