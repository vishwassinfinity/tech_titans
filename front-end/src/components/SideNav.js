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
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Check-In', to: '/checkin', icon: <CheckIcon /> },
  { label: 'Dashboard', to: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Resources', to: '/resources', icon: <BookIcon /> },
];

function SideNav({ open, onClose, variant = 'permanent', width = 240 }) {
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': { width, boxSizing: 'border-box' },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.to}
            component={NavLink}
            to={item.to}
            onClick={onClose}
            sx={{
              '&.active': {
                bgcolor: 'action.selected',
                '& .MuiListItemIcon-root': { color: 'primary.main' },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideNav; 