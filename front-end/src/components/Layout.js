import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SideNav from './SideNav';

const drawerWidth = 240;

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'divider', ml: { md: `${drawerWidth}px` } }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MindWave
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        {/* Mobile */}
        <SideNav
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          width={drawerWidth}
        />
        {/* Desktop */}
        <SideNav variant="permanent" open width={drawerWidth} />
      </Box>

      {/* Main */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout; 