import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const data = [
  { name: 'Mon', mood: 3 },
  { name: 'Tue', mood: 2 },
  { name: 'Wed', mood: 4 },
  { name: 'Thu', mood: 3 },
  { name: 'Fri', mood: 5 },
  { name: 'Sat', mood: 4 },
  { name: 'Sun', mood: 2 },
];

function Dashboard() {
  const streak = 5;

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography color="text.secondary" paragraph>
        Here's an example of how your weekly mood trend could look.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={8}>
          <Card elevation={2} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Mood Trend (Mock Data)</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <Line type="monotone" dataKey="mood" stroke="#1976d2" strokeWidth={2} />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} tickCount={6} />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={2} sx={{ borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Mood Positivity</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={75} size={120} thickness={4} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="h6" component="div" color="text.secondary">75%</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={2} sx={{ borderRadius: 3, textAlign: 'center', p:2 }}>
            <CardContent>
              <EmojiEventsIcon color="secondary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" gutterBottom sx={{ mt:1 }}>Check-In Streak</Typography>
              <Typography variant="h4" color="primary">{streak} days</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 