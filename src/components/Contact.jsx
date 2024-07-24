import React from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link';

const Contact = () => {
  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3 }}>
        <Box sx={{ m: 10, }}>
          <h1>Contact</h1>
        </Box>
        <Link href='https://www.linkedin.com/in/joshua-crothers-3592ba1b5/' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, display: 'flex', maxWidth: 500, border: '2px solid #A5C9FF', borderRadius: 3, boxShadow: '0px 10px 0px 0px #38a771e0', justifyContent: 'center' }}>
            <Box sx={{ m: 2, color: '#A5C9FF' }}>
              <h3>LinkedIn</h3>
            </Box>
          </Box>
        </Link>
        <Link href='mailto:joshcrothers1@gmail.com' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, display: 'flex', maxWidth: 500, border: '2px solid #A5C9FF', borderRadius: 3, boxShadow: '0px 10px 0px 0px #38a771e0', justifyContent: 'center' }}>
            <Box sx={{ m: 2, color: '#A5C9FF' }}>
              <h3>Gmail</h3>
            </Box>
          </Box>
        </Link>
      </Box>
    </Stack>
  )
}

export default Contact
