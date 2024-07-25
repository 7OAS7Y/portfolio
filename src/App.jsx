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

function Gizmo( {posX, posY} ) {

  const meshRef = useRef()

  useFrame(() => {
    if (!meshRef.current) return
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.setX(posX)
      meshRef.current.position.setY(posY)
      meshRef.current.scale.set(0.4, 0.4, 0.4)
  })

  const colorMap = useTexture('src/assets/PavingStones092_1K-JPG_Color.jpg')

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 36, 36]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )

}

function Scene() {

  const items = []
  const g = 2
  let count = 0
  
  for (let i = (-g); i <= g; i++) {
    for (let j = (-g); j <= g; j++) {
      count++
      items.push(<Gizmo key={count} posX={i} posY={j} />)
    }
    // console.log(items)
  }

  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 10]} />
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
