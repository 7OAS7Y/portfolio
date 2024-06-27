import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.fromTo('#animate-text-box', { x: -200 }, { x: 0, duration: .5, ease: 'linear'})
  }, []);

  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #80613c', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
        <Box id='animate-text-box' sx={{ m: 4, }}>
          <h1>Joshua Crothers</h1>
          <p>Frontend Web Developer</p>
          <p>Passionate and detail-oriented Front-End Developer with over 3 years of professional experience in designing, developing, and maintaining responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React. Proven ability to translate design concepts into functional, user-friendly digital experiences.</p>
        </Box>
      </Box>
    </Stack>
  );
};

export default Home