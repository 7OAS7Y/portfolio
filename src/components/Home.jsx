import {gsap} from 'gsap'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        gsap.fromTo('#container-inner', {autoAlpha: 0, x: "+=500"}, {duration: .7, autoAlpha: 1, x: 0})
    }, [])
  return (
    <div id='container-inner' className='home'>
        <h1>Joshua Crothers</h1>
        <p>Frontend Web Developer</p>
    </div>
  )
}
