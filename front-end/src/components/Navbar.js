import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Navbar.css';

function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MindWave
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 