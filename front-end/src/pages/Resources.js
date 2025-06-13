import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

function Resources() {
  const links = [
    { text: '988 Suicide & Crisis Lifeline (US)', url: 'https://988lifeline.org' },
    { text: 'Samaritans (UK & Ireland)', url: 'https://www.samaritans.org' },
    { text: 'Find a Helpline (Worldwide)', url: 'https://findahelpline.com' },
  ];

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Resources</Typography>
      <Typography color="text.secondary" paragraph>
        If you or someone you know is in crisis, please reach out to your local helpline immediately.
      </Typography>
      <List>
        {links.map((l) => (
          <ListItem key={l.url} disableGutters>
            <ListItemText>
              <Link href={l.url} target="_blank" rel="noreferrer">
                {l.text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Resources; 