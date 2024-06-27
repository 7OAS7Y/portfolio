import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'

const About = () => {

  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #80613c', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
        <Box sx={{ m: 4, }}>
          <h1>A little about me</h1>
          <p>My name is Joshua. I have always dreamed of making cool things and working with computers as a kid. One day at an open-mic, out of nowhere, I was randomly introduced to a very talented frontend engineer named <a href='https://www.linkedin.com/in/robert-davis-5aa87429/' target='_blank'>Robert Davis</a>. We almost instantly clicked, and he's been my best friend ever since. He taught me everything I know today about modern software/web development. Soon, I finally got my spot in the tech industry developing banner ads and maintaining SPAs for some of the biggest pharmacaeutical companies in the world.</p>
          <p>Despite my experience, there's still much to learn. With countless new technologies emerging and web frameworks being released seemingly every other month, I seek a role where I can broaden my knowledge and further hone my engineering skills.</p>
        </Box>
      </Box>
    </Stack>
  )
}

export default About