import React from 'react'
import { Box } from '@mui/system'

const Contact = () => {
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
      <div className='contact'>
          <h1>Contact</h1>
          <p>This is more about us.</p>
      </div>
    </Box>
  )
}

export default Contact
