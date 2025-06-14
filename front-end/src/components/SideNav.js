import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import CheckIcon from '@mui/icons-material/AssignmentOutlined';
import DashboardIcon from '@mui/icons-material/InsightsOutlined';
import BookIcon from '@mui/icons-material/MenuBookOutlined';
import PersonIcon from '@mui/icons-material/PersonOutline';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const navItems = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Check-In', to: '/checkin', icon: <CheckIcon /> },
  { label: 'Dashboard', to: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Resources', to: '/resources', icon: <BookIcon /> },
  { label: 'Profile', to: '/profile', icon: <PersonIcon /> },
];

const MotionListItem = motion(ListItem);

function SideNav({ open, onClose, variant = 'permanent', width = 240 }) {
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white',
        },
      }}
    >
      <Box sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {variant === 'temporary' && (
          <Toolbar sx={{ justifyContent: 'space-between', mb: 2 }}>
            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              sx={{
                background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              MindWave
            </Typography>
            <IconButton 
              onClick={onClose}
              sx={{ 
                color: 'white',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        )}

        <List sx={{ flex: 1, pt: 2 }}>
          {navItems.map((item, index) => (
            <MotionListItem
              button
              key={item.to}
              component={NavLink}
              to={item.to}
              onClick={onClose}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
              }}
              sx={{
                margin: '8px 16px',
                borderRadius: '12px',
                '&.active': {
                  background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
                  borderLeft: '3px solid #4F46E5',
                  '& .MuiListItemIcon-root': { 
                    color: '#4F46E5',
                  },
                  '& .MuiListItemText-primary': {
                    color: '#fff',
                    fontWeight: 600,
                  },
                },
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.05)',
                },
                '& .MuiListItemIcon-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  minWidth: '40px',
                },
                '& .MuiListItemText-primary': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </MotionListItem>
          ))}
        </List>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          sx={{
            p: 3,
            mt: 'auto',
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
            borderRadius: '16px',
            m: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 1,
            }}
          >
            Need help?
          </Typography>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              color: 'white',
              cursor: 'pointer',
              width: '100%',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            Contact Support
          </motion.button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideNav; 