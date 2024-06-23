import { Box } from '@mui/system'

const About = () => {

  return (
    <Box 
    height={800}
    m="0 8px"
    display="flex"
    alignItems="center"
    borderRadius={3}
    gap={4}
    p={2}
    backgroundColor="#cee3e782"
    sx={{ border: '2px solid #5c7282', textAlign: 'center', maxWidth: '800px', boxShadow: '0px 10px 100px 7px #324673e0' }}>
        <div className='about'>
          <p>Passionate and detail-oriented Front-End Developer with over 3 years of professional experience in designing, developing, and maintaining responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React. Proven ability to translate design concepts into functional, user-friendly digital experiences.</p>
        </div>
    </Box>
  )
}

export default About