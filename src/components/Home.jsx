import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.fromTo('#animate-text-box', { x: -200, stagger: 4 }, { x: 0, duration: 3, ease: 'linear'})
  }, []);

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2, md: 4 }}>
      <Box id='animate-text-box'>
        <h1>Joshua Crothers</h1>
        <p>Frontend Web Developer</p>
      </Box>
    </Stack>
  );
};

export default Home