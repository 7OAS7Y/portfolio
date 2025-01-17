import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Home = () => {

  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3, }}>
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