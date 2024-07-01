// import React, { useEffect, useRef } from 'react';
// import { Box } from '@mui/system';
// import Stack from '@mui/material/Stack';
// import Link from '@mui/material/Link';
// import { gsap } from "gsap";

// export const Joke = () => {
//   const noRef = useRef(null); 

//   useEffect(() => {
//     const noElement = noRef.current;

//     const moveRandomly = () => {
      
//       const maxX = 400; 
//       const randomX = Math.random() * maxX - maxX; 

//       gsap.to(noElement, { x: randomX, duration: 0.5 });
//     };

//     const moveToDefault = () => {
//         // Reset position
//         gsap.to(noElement, { x: 0, y: 0, duration: 0.5 }); 
//       };
    
//       noElement.addEventListener('mouseover', moveRandomly);
//       noElement.addEventListener('mouseout', moveToDefault); 
    
//       return () => {
//         noElement.removeEventListener('mouseover', moveRandomly);
//         noElement.removeEventListener('mouseout', moveToDefault); 
//       };
//     }, []);

//   return (
//     <Stack>
//       <Box sx={{ m: 8, maxWidth: 600, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0', display: "grid", alignItems: "center", justifyItems: "center" }}>
//         <Box sx={{ m: 10, }}>
//           <h1>Feel free to say no, but will you hire me?</h1>
//         </Box>
//         <Link href='mailto:joshcrothers1@gmail.com' target='_blank' rel="noopener" underline="none">
//           <Box className="animate-box" sx={{ m: 4.5, maxWidth: 500, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
//             <Box sx={{ m: 2, color: '#0077B5' }}>
//               <h3>Absolutely!</h3>
//             </Box>
//           </Box>
//         </Link>
//       </Box>
//       <Box sx={{ m: 8, maxWidth: 600, display: "grid", alignItems: "center", justifyItems: "center" }}>
//           <Box ref={noRef} className="animate-box" 
//           sx={{ 
//             m: 4.5, maxWidth: 100,
//             border: '2px solid #324673', 
//             borderRadius: 3, 
//             boxShadow: '0px 10px 25px 0px #324673e0' }}>
//             <Box sx={{ m: 1, color: '#0077B5' }}>
//               <p>No.</p>
//             </Box>
//           </Box>
//       </Box>
//     </Stack>
//   );
// };

// export default Joke;


// WORK IN PROGRESS...