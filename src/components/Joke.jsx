import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { gsap } from "gsap";

export const Joke = () => {
  const noRef = useRef(null); // Step 1: Use useRef to reference the "No" section

  useEffect(() => {
    const noElement = noRef.current;

    const moveRandomly = () => {
      // Step 3: Define the random position function
      const maxX = 300; // Maximum X-axis movement in pixels
      const maxY = 300; // Maximum Y-axis movement in pixels
      const randomX = Math.random() * maxX - maxX / 2; // Calculate random X position
      const randomY = Math.random() * maxY - maxY / 2; // Calculate random Y position

      gsap.to(noElement, { x: randomX, duration: 0.5 });
    };

    const moveToDefault = () => {
        // Reset position function
        gsap.to(noElement, { x: 0, y: 0, duration: 0.5 }); // Animate back to original position
      };
    
      noElement.addEventListener('mouseover', moveRandomly);
      noElement.addEventListener('mouseout', moveToDefault); // Add mouseout event listener
    
      return () => {
        noElement.removeEventListener('mouseover', moveRandomly);
        noElement.removeEventListener('mouseout', moveToDefault); // Cleanup
      };
    }, []);

  return (
    <Stack>
      <Box sx={{ m: 8, maxWidth: 600, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0', display: "grid", alignItems: "center", justifyItems: "center" }}>
        <Box sx={{ m: 10, }}>
          <h1>Feel free to say no, but will you hire me?</h1>
        </Box>
        <Link href='mailto:joshcrothers1@gmail.com' target='_blank' rel="noopener" underline="none">
          <Box className="animate-box" sx={{ m: 4.5, maxWidth: 500, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
            <Box sx={{ m: 2, color: '#0077B5' }}>
              <h3>Absolutely!</h3>
            </Box>
          </Box>
        </Link>
        <Link rel="noopener" underline="none">
          <Box ref={noRef} className="animate-box" sx={{ m: 4.5, maxWidth: 800, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
            <Box sx={{ m: 2, color: '#0077B5' }}>
              <h3>No.</h3>
            </Box>
          </Box>
        </Link>
      </Box>
    </Stack>
  );
};

export default Joke;