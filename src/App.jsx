import VideoBackground from './components/VideoBackground'
import { Box } from '@mui/system';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css'
import './App.css'

gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger

const pages = [
  {
    name: "home",
    element: <Home />,
  },
  {
    name: "about",
    element: <About />,
  },
  {
    name: "projects",
    element: <Projects />,
  },
  {
    name: "contact",
    element: <Contact />,
  },
];



function App() {

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
    </>
  )
}

export default App
