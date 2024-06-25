import React from 'react'
import { Box } from '@mui/system'

const Projects = () => {
  return (
    <Box 
    height={170}
    m="0 8px"
    display="flex"
    alignItems="center"
    borderRadius={3}
    gap={4}
    p={2}
    backgroundColor="#cee3e782"
    sx={{ border: '2px solid #5c7282', textAlign: 'center', maxWidth: '800px', boxShadow: '0px 10px 100px 7px #324673e0' }}>
      <div>
        <h1>Projects</h1>
      </div>
    </Box>
  )
}

export default Projects
