import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '../ThemeContext';
import './Navbar.css';

function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MindWave
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button color="inherit" component={NavLink} to="/" end>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/checkin">
            Check-In
          </Button>
          <Button color="inherit" component={NavLink} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={NavLink} to="/resources">
            Resources
          </Button>
          <IconButton color="inherit" onClick={colorMode.toggleColorMode} sx={{ transition: 'transform 0.5s', '&:active': { transform: 'rotate(360deg)' } }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 