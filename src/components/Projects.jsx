import React from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link';

const Projects = () => {
  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3 }}>
        <Box sx={{ m: 4, }}>
          <h1>Check out some of my projects!</h1>
        </Box>
        <Box sx={{ m: 2, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3, boxShadow: '0px 10px 0px 0px #38a771e0' }}>
          <Box sx={{ m: 2, }}>
            <p><strong>https://github.com/7OAS7Y/portfolio</strong> (you are here!)</p>
          </Box>
        </Box>
        <Link href='https://github.com/7OAS7Y/dodge-the-creeps' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3, boxShadow: '0px 10px 0px 0px #38a771e0' }}>
            <Box sx={{ m: 2, }}>
              <p>https://github.com/7OAS7Y/dodge-the-creeps</p>
            </Box>
          </Box>
        </Link>
        <Link href='https://github.com/7OAS7Y/simple-calculator' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3, boxShadow: '0px 10px 0px 0px #38a771e0' }}>
            <Box sx={{ m: 2, }}>
              <p>https://github.com/7OAS7Y/simple-calculator</p>
            </Box>
          </Box>
        </Link>
        <Link href='https://github.com/7OAS7Y/progress-steps' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3, boxShadow: '0px 10px 0px 0px #38a771e0' }}>
            <Box sx={{ m: 2, }}>
              <p>https://github.com/7OAS7Y/progress-steps</p>
            </Box>
          </Box>
        </Link>
      </Box>
    </Stack>
  )
}

export default Projects
