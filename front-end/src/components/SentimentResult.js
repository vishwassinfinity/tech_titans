import React from 'react';
import './SentimentResult.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function SentimentResult({ sentiment }) {
  if (!sentiment) return null;

  const { label, score } = sentiment;
  const percentage = Math.round(((score + 1) / 2) * 100); // map -1~1 to 0~100

  const severityMap = {
    positive: 'success',
    neutral: 'info',
    negative: 'warning',
  };

  return (
    <Stack className="sentiment-result" mt={2}>
      <Alert severity={severityMap[label] || 'info'}>
        Overall sentiment: <strong>{label}</strong> ({percentage}%)
      </Alert>
    </Stack>
  );
}

export default SentimentResult; 