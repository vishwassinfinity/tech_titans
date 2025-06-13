import React from 'react';
import './Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to MindWave
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Your real-time mental health copilot
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Check in with your feelings, get instant insights, and discover coping
        tools tailored for you.
      </Typography>
      <Button variant="contained" color="secondary" size="large" component={Link} to="/checkin">
        Start Check-In
      </Button>
    </Container>
  );
}

export default Home; 