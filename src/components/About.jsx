import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Box } from '@mui/system'

gsap.registerPlugin(useGSAP);

const About = () => {

  const about = useRef();
  
  useGSAP(() => {
    // gsap code here...
    gsap.to(".bio", {rotation: 180}); // <-- automatically reverted
  
  }, { scope: about }) // <-- scope for selector text (optional)

  return (
    <Box 
    height={800}
    m="0 8px"
    display="flex"
    alignItems="center"
    borderRadius={3}
    gap={4}
    p={2}
    backgroundColor="#8b9ec966"
    sx={{ border: '2px solid #5c7282', textAlign: 'center', maxWidth: '800px', boxShadow: '0px 10px 100px 7px #324673e0' }}>
        <div ref={about} className='about'>
            <p id='bio'>Passionate and detail-oriented Front-End Developer with over 3 years of professional experience in designing, developing, and maintaining responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React. Proven ability to translate design concepts into functional, user-friendly digital experiences.</p>
        </div>
    </Box>
  )
}

export default About