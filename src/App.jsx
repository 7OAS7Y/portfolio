import { Box } from '@mui/system';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Joke from './components/Joke';
import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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
    name: "joke",
    element: <Joke />,
  },
];

function Gizmo() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );

}

function Scene() {  
  
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }}>
      {/* <ambientLight /> */}
      <directionalLight position={[30, 0, 10]} />
        <Gizmo />
    </Canvas>
  )

}



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
      <Scene />
    </>
  )
}

export default App
