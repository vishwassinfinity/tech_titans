import React from 'react';
import './CopingTools.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const TOOLS_BY_MOOD = {
  Happy: [
    'Celebrate your positivity with a gratitude journaling activity',
    'Share your joy with a friend or loved one',
  ],
  Sad: [
    'Try a 5-minute mindful breathing exercise',
    'Listen to a soothing playlist',
  ],
  Anxious: [
    'Practice a short grounding exercise (5-4-3-2-1 technique)',
    'Take a quick stretching break',
  ],
  Stressed: [
    'Do a guided muscle-relaxation session',
    'Take a short walk outside',
  ],
  Tired: [
    'Grab a glass of water and take a 2-minute eye rest',
    'Try a gentle neck and shoulder stretch',
  ],
};

const TOOLS_BY_SENTIMENT = {
  positive: [
    'Keep the momentum: write down three things you\'re grateful for',
  ],
  neutral: [
    'Do a quick body scan to notice any tension',
  ],
  negative: [
    'Try a 2-minute breathing exercise',
    'Write down your thoughts and reframe one into a positive',
  ],
};

function CopingTools({ mood, sentiment }) {
  const suggestions = [];

  if (mood && TOOLS_BY_MOOD[mood]) {
    suggestions.push(...TOOLS_BY_MOOD[mood]);
  }

  if (sentiment && TOOLS_BY_SENTIMENT[sentiment.label]) {
    suggestions.push(...TOOLS_BY_SENTIMENT[sentiment.label]);
  }

  if (suggestions.length === 0) return null;

  return (
    <Card className="coping-tools" sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Personalized Coping Tools
        </Typography>
        <List dense>
          {suggestions.map((tool, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemText primary={tool} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default CopingTools; 