import React from 'react'
import { Box } from '@mui/system'
import './Page.css'
import { Stack } from '@mui/material';

export default function Page({ name, children, dir='column' }) {

  return (
      <Box className={`page ${name}`}>
        <Stack dir={dir} spacing={2}>
          {children}
        </Stack>
      </Box>
  )
  
}