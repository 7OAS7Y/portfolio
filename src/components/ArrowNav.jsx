import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Box } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

gsap.registerPlugin(ScrollToPlugin);

function ArrowNav() {
  const scrollUp = () => {
    gsap.to("#page-container", {duration: .5, scrollTo: "-=800", ease: "power2.inOut"});
  };

  const scrollDown = () => {
    gsap.to("#page-container", {duration: .5, scrollTo: "+=800", ease: "power2.inOut"});
  };

  return (
    <Box
      sx={{
        top: 610,
        right: 100,
        color: 'black',
        display: 'grid',
        position: 'fixed',
        transform: 'scale(2)'
      }}>
      <button onClick={scrollUp} aria-label="Scroll Up">
        <ArrowUpwardIcon className='arrowUp' />
      </button>
      <button onClick={scrollDown} aria-label="Scroll Down">
        <ArrowDownwardIcon className='arrowDown' />
      </button>
    </Box>
  );
}

export default ArrowNav;