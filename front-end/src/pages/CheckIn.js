import React, { useState } from 'react';
import MoodCheckIn from '../components/MoodCheckIn';
import SentimentInput from '../components/SentimentInput';
import SentimentResult from '../components/SentimentResult';
import CopingTools from '../components/CopingTools';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CheckIn() {
  const [mood, setMood] = useState(null);
  const [sentiment, setSentiment] = useState(null);

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Mood Check-In
          </Typography>
          <MoodCheckIn mood={mood} setMood={setMood} />
          <SentimentInput onSentimentCalculated={setSentiment} />
          <SentimentResult sentiment={sentiment} />
          <CopingTools mood={mood} sentiment={sentiment} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default CheckIn; 