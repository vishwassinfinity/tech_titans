import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme/index';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
} 