import { Box } from '@mui/system';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Joke from './components/Joke';
import { Suspense, useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
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
]

function Gizmo( {posX, radius} ) {

  const meshRef = useRef()

  useFrame(() => {
    if (!meshRef.current) return
      meshRef.current.rotation.y += 0.003
      meshRef.current.position.setX(posX)
      meshRef.current.scale.set(0.4, 0.4, 0.4)
      
  })

  const colorMap = useTexture('src/assets/sphereTexture.jpg')

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 144, 144]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )

}

function Scene() {

  const items = []
  const g = 1
  let count = 0
  let radius = 5
  
  for (let i = (-g); i <= g; i++) {
      count++
      items.push(<Gizmo key={count} posX={i} radius={radius} />)
      radius *= 0.5
  }

  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={null}>
        <directionalLight position={[1, -10, -10]} />
        {items}
      </Suspense>
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
