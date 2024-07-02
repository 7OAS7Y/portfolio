import React from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link';

const Contact = () => {
  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
        <Box sx={{ m: 10, }}>
          <h1>Contact</h1>
        </Box>
        <Link href='https://www.linkedin.com/in/joshua-crothers-3592ba1b5/' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, display: 'flex', maxWidth: 500, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0', justifyContent: 'center' }}>
            <Box sx={{ m: 2, color: '#0077B5' }}>
              <h3>LinkedIn</h3>
            </Box>
          </Box>
        </Link>
        <Link href='mailto:joshcrothers1@gmail.com' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, display: 'flex', maxWidth: 500, border: '2px solid #324673', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0', justifyContent: 'center' }}>
            <Box sx={{ m: 2, color: '#0077B5' }}>
              <h3>Gmail</h3>
            </Box>
          </Box>
        </Link>
      </Box>
    </Stack>
  )
}

export default Contact
