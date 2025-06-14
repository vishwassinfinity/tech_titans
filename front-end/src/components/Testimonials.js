import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const testimonials = [
  {
    name: 'Alex',
    text: 'MindWave helped me understand my mood patterns and take action sooner.',
  },
  {
    name: 'Jamie',
    text: 'The coping tools are simple yet effective—I use them daily!',
  },
  {
    name: 'Sam',
    text: 'Beautiful interface and quick check-in process. Love the dashboard visuals!',
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        What our users say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <Box key={idx} px={2}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                “{t.text}”
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                — {t.name}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Testimonials; 