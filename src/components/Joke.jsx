import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Joke = () => {
  
  const minX = -360
  const minY = -440
  const maxX = 360
  const maxY = 10

  const jokeRef = useRef(null)

  useEffect(() => {
    console.log(jokeRef)
    if (!jokeRef.current) return
    jokeRef.current.addEventListener('mouseenter', onMouseEnter)
    return () => {
      jokeRef.current.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  function onMouseEnter() {

    const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX)
    const randomY = Math.floor(Math.random() * (maxY - minY + 1) + minY)
    
    gsap.to(jokeRef.current, { x: randomX, y: randomY, duration: .2  })
  }


  return (
    <Stack>
      <Box sx={{ m: 4, maxWidth: 800, border: '2px solid #A5C9FF', borderRadius: 3, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ m: 10, }}>
          <h1>Feel free to say no, but will you hire me?</h1>
        </Box>
        <Link href='https://www.linkedin.com/in/joshua-crothers-3592ba1b5/' target='_blank' rel="noopener" underline="none">
          <Box sx={{ m: 2, display: 'flex', maxWidth: 500, border: '2px solid #A5C9FF', borderRadius: 3, justifyContent: 'center' }}>
            <Box sx={{ m: 2, color: '#A5C9FF' }}>
              <h3>Absolutely!</h3>
            </Box>
          </Box>
        </Link>
          <Box ref={jokeRef} id='joke' sx={{ m: 2, display: 'flex', maxWidth: 500, border: '2px solid #A5C9FF', borderRadius: 3, justifyContent: 'center' }}>
            <Box sx={{ m: 2, color: '#A5C9FF' }}>
              <h3>No.</h3>
            </Box>
          </Box>
      </Box>
    </Stack>
  )
}

export default Joke
