import React, { useState } from 'react';
import analyzeSentiment from '../utils/sentiment';
import './SentimentInput.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SentimentInput({ onSentimentCalculated }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setLoading(true);
    // Simulate async analysis
    setTimeout(() => {
      const result = analyzeSentiment(text);
      onSentimentCalculated(result);
      setLoading(false);
    }, 300);
  };

  return (
    <Box className="sentiment-input" mt={2}>
      <Typography variant="subtitle1" gutterBottom>
        Write a quick journal entry or describe your thoughts
      </Typography>
      <TextField
        multiline
        fullWidth
        minRows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your feelings here..."
        variant="outlined"
      />
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        onClick={handleAnalyze}
        disabled={loading || !text.trim()}
      >
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </Button>
      {loading && <LinearProgress sx={{ mt: 1 }} />}
    </Box>
  );
}

export default SentimentInput; 