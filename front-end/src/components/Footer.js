import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, pt: 6, bgcolor: 'background.paper' }}>
      <svg viewBox="0 0 1440 100" style={{ display: 'block', color: '#5EAAA8' }} xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.15" d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,80C672,75,768,85,864,101.3C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body2" color="text.secondary">
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            About
          </Link>
          |
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Privacy
          </Link>
          |
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Contact
          </Link>
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} MindWave. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 