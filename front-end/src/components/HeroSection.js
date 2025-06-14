import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import Box from '@mui/material/Box';

const illustration = 'https://undraw.co/api/illustrations/online_world.svg'; // placeholder

function HeroSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        background: 'linear-gradient(135deg, #E8F7F6 0%, #F9FBFF 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: 6 }}>
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Typography variant="h3" component="h1" fontWeight={600}>
            Your Mental Health Copilot
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <ReactTyped
              strings={[
                'Reflect.',
                'Understand.',
                'Grow.',
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/checkin" sx={{ alignSelf: 'flex-start' }}>
            Start Check-In
          </Button>
        </Stack>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src={illustration} alt="Mental health" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection; 