import React from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'

const Contact = () => {
  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #80613c', borderRadius: 3, boxShadow: '0px 10px 25px 0px #324673e0' }}>
        <Box sx={{ m: 4, }}>
          <h1>Contact</h1>
        </Box>
      </Box>
    </Stack>
  )
}

export default Contact
