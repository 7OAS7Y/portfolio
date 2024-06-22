import React from 'react'
import { Container } from 'theme-ui'

const About = () => {
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
        <div className='about'>
            <p>Passionate and detail-oriented Front-End Developer with over 3 years of professional experience in designing, developing, and maintaining responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React. Proven ability to translate design concepts into functional, user-friendly digital experiences.</p>
        </div>
    </Container>
  )
}

export default About