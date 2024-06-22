import VideoBackground from './components/VideoBackground'
import './index.css'
import './App.css'
import Page from './components/Page';
import { Box, Container } from '@mui/material';
import { element } from 'prop-types';
import Home from './components/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger

const pages = [
  {
    name: "Home",
    element: <Home />,
  },
  {
    name: "About",
    component: () => (
      <Container sx={{
        height: 800,
        width: 800,
        right: 0,
        margin: 'auto',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <p>Passionate and detail-oriented Front-End Developer with over 3 years of professional experience in designing, developing, and maintaining responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React. Proven ability to translate design concepts into functional, user-friendly digital experiences.</p>
      </Container>
    ),
  },
  {
    name: "Projects",
    component: () => (
      <Container sx={{
        height: 800,
        width: 800,
        right: 0,
        margin: 'auto',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <div id='container-inner'>
          <h1>Projects</h1>
        </div>
      </Container>
    ),
  },
  {
    name: "Contact",
    component: () => (
      <div id='conatiner-inner'>
        <h1>Contact</h1>
        <p>This is more about us.</p>
        {/* Add more content here */}
      </div>
    ),
  },
];



function App() {


  useEffect(() => {
    gsap.to('.home', {
      scrollTrigger: '.home'
      
    })
  }, [])

  return (
    <>
      <VideoBackground />
      <div id='page-container'>
        {pages.map((page, index) => {
          return (
            <Page key={index} name={page.name}>
              {page.element ? page.element : page.component()}
            </Page>
          )
        })}
      </div>
    </>
  )
}

export default App
