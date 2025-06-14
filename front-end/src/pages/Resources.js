import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Collapse from '@mui/material/Collapse';
import LocalHospitalIcon from '@mui/icons-material/LocalHospitalOutlined';
import ForumIcon from '@mui/icons-material/ForumOutlined';
import TipsIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import MusicIcon from '@mui/icons-material/LibraryMusicOutlined';
import GameIcon from '@mui/icons-material/SportsEsportsOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

function Resources() {
  const [search, setSearch] = useState('');

  const allSections = {
    'Talk to a Doctor': [
      { text: 'Teladoc – 24/7 online therapy', url: 'https://www.teladoc.com' },
      { text: 'BetterHelp – licensed therapists', url: 'https://www.betterhelp.com' },
    ],
    Community: [
      { text: '7 Cups – peer chat', url: 'https://www.7cups.com' },
      { text: 'r/mentalhealth on Reddit', url: 'https://www.reddit.com/r/mentalhealth/' },
    ],
    'General Health Tips': [
      { text: 'WHO Mental Health', url: 'https://www.who.int/health-topics/mental-health' },
      { text: 'CDC Stress Management', url: 'https://www.cdc.gov/mentalhealth/stress-coping' },
    ],
    'Mindful Music': [
      { text: 'Spotify "Peaceful Piano"', url: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO' },
      { text: 'YouTube Lo-Fi Chill', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A' },
    ],
    'Mindful Games': [
      { text: "Alto's Odyssey (mobile)", url: 'https://www.altosodyssey.com' },
      { text: 'Flow Free (puzzle)', url: 'https://bigduckgames.com/flowfree' },
    ],
  };

  const sectionsKeys = Object.keys(allSections);

  const icons = {
    'Talk to a Doctor': <LocalHospitalIcon sx={{ fontSize: 40 }} color="secondary" />,
    Community: <ForumIcon sx={{ fontSize: 40 }} color="secondary" />,
    'General Health Tips': <TipsIcon sx={{ fontSize: 40 }} color="secondary" />,
    'Mindful Music': <MusicIcon sx={{ fontSize: 40 }} color="secondary" />,
    'Mindful Games': <GameIcon sx={{ fontSize: 40 }} color="secondary" />,
  };

  const [openKey, setOpenKey] = useState(null);

  const renderList = (arr) => (
    <List>
      {arr
        .filter((l) => l.text.toLowerCase().includes(search.toLowerCase()))
        .map((l) => (
          <ListItem key={l.url} disableGutters>
            <ListItemText>
              <Link href={l.url} target="_blank" rel="noreferrer">
                {l.text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
    </List>
  );

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Resources</Typography>
      <Typography color="text.secondary" paragraph>
        Find the right support and activities for your mental well-being.
      </Typography>
      <TextField
        fullWidth
        placeholder="Search resources..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={4}>
        {sectionsKeys.map((key, idx)=> (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Card elevation={3} sx={{ borderRadius:3, height:'100%' }}>
              <CardActionArea onClick={()=> setOpenKey(key)} sx={{ p:3, textAlign:'center' }}>
                {icons[key]}
                <Typography variant="subtitle1" sx={{ mt:1 }}>{key}</Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={Boolean(openKey)} onClose={()=>setOpenKey(null)} fullWidth maxWidth="sm">
        <DialogTitle>{openKey}</DialogTitle>
        <DialogContent dividers>{openKey && renderList(allSections[openKey])}</DialogContent>
      </Dialog>
    </Container>
  );
}

export default Resources; 