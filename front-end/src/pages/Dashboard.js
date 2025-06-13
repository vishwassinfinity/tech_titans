import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Dashboard() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography color="text.secondary">
        Coming soon: mood history, trends, and personalized insights.
      </Typography>
    </Container>
  );
}

export default Dashboard; 