import VideoBackground from './components/VideoBackground'
import './index.css'
import './App.css'
import Page from './components/Page';
import { Box, Container } from '@mui/material';
import { element } from 'prop-types';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
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
    element: <About />,
  },
  {
    name: "Projects",
    element: <Projects />,
  },
  {
    name: "Contact",
    element: <Contact />,
  },
];



function App() {


  // useEffect(() => {
  //   gsap.to('.home', {
  //     scrollTrigger: '.home', // start the animation when ".home" enters the viewport (once)
  //     y: 0
  //   })
  // }, [])

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
