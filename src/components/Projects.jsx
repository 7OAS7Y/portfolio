import React from 'react'
import { Container } from 'theme-ui'

const Projects = () => {
  return (
        <Container sx={{
        height: 800,
        width: 800,
        right: 0,
        margin: 'auto',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <div>
          <h1>Projects</h1>
        </div>
      </Container>
  )
}

export default Projects
