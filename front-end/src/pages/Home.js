import React from 'react';
import './Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const features = [
  {
    title: 'Real-Time Check-Ins',
    desc: 'Quickly log how you feel and get instant feedback.',
    icon: <SentimentSatisfiedAltIcon color="secondary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Personalized Coping Tools',
    desc: 'Receive evidence-based exercises tailored to your mood.',
    icon: <AutoAwesomeIcon color="secondary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Insightful Dashboard',
    desc: 'Track your emotional trends and progress over time.',
    icon: <InsightsIcon color="secondary" sx={{ fontSize: 40 }} />,
  },
];

const moreFeatures = [
  { title: 'Confidential & Secure', desc: 'Your data stays private and encrypted.', icon: <LockOutlinedIcon color="secondary" sx={{ fontSize: 40 }} /> },
  { title: 'Science-backed Methods', desc: 'Built on CBT & mindfulness research.', icon: <ScienceOutlinedIcon color="secondary" sx={{ fontSize: 40 }} /> },
  { title: 'Cross-platform Sync', desc: 'Access MindWave on web & mobile.', icon: <DevicesOutlinedIcon color="secondary" sx={{ fontSize: 40 }} /> },
  { title: 'Dark-mode Friendly', desc: 'Comfort for your eyes, day or night.', icon: <DarkModeOutlinedIcon color="secondary" sx={{ fontSize: 40 }} /> },
];

function Home() {
  return (
    <>
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {features.map((f) => (
            <Grid item xs={12} md={4} key={f.title}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                {f.icon}
                <Typography variant="h6" sx={{ mt: 1 }}>{f.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{f.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {moreFeatures.map((f) => (
            <Grid item xs={12} sm={6} md={3} key={f.title}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center', borderRadius: 3, height:'100%' }}>
                {f.icon}
                <Typography variant="subtitle1" sx={{ mt: 1 }}>{f.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{f.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home; 