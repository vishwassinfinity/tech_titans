import React, { useState } from 'react';
import MoodCheckIn from '../components/MoodCheckIn';
import SentimentInput from '../components/SentimentInput';
import SentimentResult from '../components/SentimentResult';
import CopingTools from '../components/CopingTools';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

function CheckIn() {
  const [mood, setMood] = useState(null);
  const [sentiment, setSentiment] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Mood', 'Journal', 'Results'];

  const next = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const handleSentiment = (res) => {
    setSentiment(res);
    setOpenSnack(true);
    next();
  };

  const handleCloseSnack = (_, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  const { width, height } = useWindowSize();

  return (
    <Container maxWidth="md" sx={{ mt: 8, display:'flex', justifyContent:'center' }}>
      <Card elevation={2} sx={{ borderRadius: 3, maxWidth: 700, width:'100%' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Mood Check-In
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pb: 1 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <LinearProgress variant="determinate" value={(activeStep / (steps.length - 1)) * 100} sx={{ mb: 2 }} />
          {activeStep === 0 && <MoodCheckIn mood={mood} setMood={(m)=>{setMood(m);next();}} />}
          {activeStep === 1 && <SentimentInput onSentimentCalculated={handleSentiment} />}
          {activeStep === 2 && (
            <>
              <SentimentResult sentiment={sentiment} />
              <CopingTools mood={mood} sentiment={sentiment} />
            </>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button disabled={activeStep===0} onClick={back}>Back</Button>
            {activeStep < 2 && <Button variant="contained" onClick={next} disabled={activeStep===0 && !mood}>Next</Button>}
          </Box>
          {activeStep===2 && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}
        </CardContent>
      </Card>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleCloseSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          Great job checking in today!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CheckIn; 