import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideNav from './SideNav';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../logo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { motion, AnimatePresence } from 'framer-motion';

const drawerWidth = 240;

function Layout({ children }) {
  const themeM = useTheme();
  const isDesktop = useMediaQuery(themeM.breakpoints.up('md'));
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleDrawerToggle = () => setOpenDrawer(!openDrawer);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          background: 'rgba(15, 23, 42, 0.8)',
          ml: { md: openDrawer ? `${drawerWidth}px` : 0 },
          transition: 'margin 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              color: 'white',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <motion.div
              animate={{ rotate: openDrawer ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openDrawer ? <CloseIcon /> : <MenuIcon />}
            </motion.div>
          </IconButton>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            <img 
              src={logo} 
              alt="MindWave logo" 
              style={{ 
                height: 32,
                filter: 'brightness(0) invert(1)',
                transition: 'transform 0.3s ease',
              }}
            />
          </motion.div>

          <IconButton 
            onClick={handleMenuOpen}
            sx={{
              ml: 'auto',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              padding: '4px',
              '&:hover': {
                border: '2px solid rgba(255, 255, 255, 0.4)',
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Avatar 
              sx={{ 
                width: 32, 
                height: 32,
                background: 'linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)',
              }} 
            />
          </IconButton>

          <Menu 
            anchorEl={anchorEl} 
            open={openMenu} 
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                mt: 1.5,
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                '& .MuiMenuItem-root': {
                  px: 2,
                  py: 1,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              },
            }}
          >
            <MenuItem disabled sx={{ opacity: 1 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ color: 'white' }}>Username</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  user@example.com
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem 
              component={RouterLink} 
              to="/profile" 
              onClick={handleMenuClose}
              sx={{
                color: 'white',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Profile
            </MenuItem>
            <MenuItem 
              onClick={handleMenuClose}
              sx={{
                color: 'white',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <AnimatePresence>
        {openDrawer && (
          <SideNav
            variant="temporary"
            open={openDrawer}
            onClose={handleDrawerToggle}
            width={drawerWidth}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin 0.3s ease-in-out',
          ml: { md: openDrawer ? `${drawerWidth}px` : 0 },
        }}
      >
        <Toolbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default Layout; 