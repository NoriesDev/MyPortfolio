import { useEffect, useRef } from 'react';
import backgroundImg from '../assets/img/backgroundImg.png';

import Lay2 from '../assets/img/2.png';
import Lay3 from '../assets/img/3.png';
import Lay4 from '../assets/img/4.png';
import Lay5 from '../assets/img/5.png';
import Lay6 from '../assets/img/6.png';
import AboutComp from '../compoenets/aboutContent'
import Me from '../compoenets/me.jsx'

import Project from './project';
import ProjectSlide from './projectSlider';
import Contact from './contact';


const Background = () => {
    const lay4Ref = useRef(null);
    const lay5Ref = useRef(null);
    const lay6Ref = useRef(null);
    const bgRef = useRef(null);
    const rocketRef = useRef(null);
    const moonRef = useRef(null);

    


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
      
            const speed6 = 0.5;
            const speed5 = 1;
            const speed4 = 1.5 ;
            const bgSpeed = 2.0;
            const rocketspeed = 0.5;
            const moonSpeed = 5;
      

            if (lay4Ref.current) {
              lay4Ref.current.style.transform = `translateY(-${scrollY * speed4}px)`;
            }
            if (lay5Ref.current) {
              lay5Ref.current.style.transform = `translateY(-${scrollY * speed5}px)`;
            }
            if (lay6Ref.current) {
              lay6Ref.current.style.transform = `translateY(-${scrollY * speed6}px)`;
            }
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(-${scrollY * bgSpeed}px)`;
              }
              if (rocketRef.current) {
                rocketRef.current.style.transform = `translateY(-${scrollY * rocketspeed}px)`;
              }
              if (moonRef.current) {
                moonRef.current.style.transform = `translateY(-${scrollY * moonSpeed}px)`;
              }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

  return (
    <div className='w-full h-full '>
        <img ref={bgRef} className='w-[100vw]  relative top-0 left-0 -z-50' src={backgroundImg} alt="" />
        <img ref={bgRef} className='w-[100vw] absolute top-10 left-0 -z-30' src={Lay2} alt="" />
        <img ref={rocketRef} className='w-[100vw] absolute top-20 md:top-10 left-0 -z-10' src={Lay3} alt="" />   
        <Me />    
        <img ref={lay4Ref} className='w-[100vw] absolute top-[400px] md:top-32 left-0 z-0' src={Lay4} alt="" />
        <Project />
        <ProjectSlide />
        <img ref={lay5Ref} className='w-[100vw] absolute top-[110vh] md:top-[500px] left-0 z-10' src={Lay5} alt="" />
        <Contact />
        <img  ref={lay6Ref} className='w-[100vw] absolute top-[130vh] md:top-[700px] lg:top-[500px] left-0 z-20' src={Lay6} alt="" />
        <AboutComp />

    </div>
  );
};

export default Background;