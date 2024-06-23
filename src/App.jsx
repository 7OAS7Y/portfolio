import VideoBackground from './components/VideoBackground'
import ArrowNav from './components/ArrowNav';
import { Box } from '@mui/system';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './index.css'
import './App.css'

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

  useEffect(() => {
    gsap.from('.home', {
      y: 100,
      duration: .5,
      ease: 'none',
    })
    gsap.to('.home', {
      scrollTrigger: '.home', // start the animation when ".home" enters the viewport (once)
      y: 0,
      duration: .5,
    })
  }, [])

  return (
    <>
      <VideoBackground />
      <Box id='page-container'>
        {pages.map((page, index) => {
          return (
            <Page key={index} name={page.name}>
              {page.element}
            </Page>
          )
        })}
      </Box>
      <ArrowNav />
    </>
  )
}

export default App
