import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to('#animate-text-box h1', {
      duration: 2,
      ease: "none",
      text: {
        value: "Joshua Crothers",
        delimiter: '',
        rtl: false
      },
      onComplete: () => {
        gsap.to('#animate-text-box p', {
          duration: 2,
          ease: "none",
          text: {
            value: "Frontend Web Developer",
            delimiter: '',
            rtl: false
          },
        });
      }
    });
  }, []);

  return (
    <Box id='animate-text-box' 
      sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'right',
      alignItems: 'right',
      }}>
      <h1></h1>
      <p></p>
    </Box>
  );
};

export default Home