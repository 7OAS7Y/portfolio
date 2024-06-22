import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to('#container-inner h1', {
      duration: 2,
      ease: "none",
      text: {
        value: "Joshua Crothers",
        delimiter: '',
        rtl: false
      },
      onComplete: () => {
        gsap.to('#container-inner p', {
          duration: 2,
          ease: "none",
          text: {
            value: "Frontend Web Developer",
            delimiter: '',
            rtl: false
          },
        });
      }
    });
  }, []);

  return (
    <div id='container-inner' className='home'>
      <h1></h1>
      <p></p>
    </div>
  );
};

export default Home;