import { Box } from '@mui/system';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Joke from './components/Joke';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import './index.css'
import './App.css'



gsap.registerPlugin(useGSAP);

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
  {
    name: "contact",
    element: <Joke />,
  },
];



function App() {

  return (
    <>
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
