import React from 'react';
import './MoodCheckIn.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

const MOODS = [
  { label: 'Happy', emoji: '😀' },
  { label: 'Sad', emoji: '😔' },
  { label: 'Anxious', emoji: '😟' },
  { label: 'Stressed', emoji: '😡' },
  { label: 'Tired', emoji: '😴' },
];

function MoodCheckIn({ mood, setMood }) {
  const handleChange = (_, value) => {
    if (value !== null) setMood(value);
  };

  return (
    <div className="mood-checkin">
      <Typography variant="subtitle1" gutterBottom>
        How are you feeling right now?
      </Typography>
      <ToggleButtonGroup
        value={mood}
        exclusive
        onChange={handleChange}
        color="primary"
        sx={{ flexWrap: 'wrap' }}
      >
        {MOODS.map((m) => (
          <ToggleButton key={m.label} value={m.label} sx={{ m: 0.5 }}>
            <span role="img" aria-label={m.label} style={{ fontSize: '1.5rem' }}>
              {m.emoji}
            </span>
            <Typography variant="caption" sx={{ ml: 0.5 }}>
              {m.label}
            </Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default MoodCheckIn; 