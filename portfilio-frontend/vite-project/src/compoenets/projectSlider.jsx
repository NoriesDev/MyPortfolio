
import ProjectCard from './pCard';
import { useEffect, useRef } from 'react';
import Slider from 'react-slick';

const ProjectSlide = () => {

    const projectRef = useRef(null);


  

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const speed5 = 1.5;

            if (projectRef.current) {
                projectRef.current.style.transform = `translateY(-${scrollY * speed5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, 
      }


      return (
        <div ref={projectRef} className="w-11/12 h-52 mx-4 md:mx-12 absolute z-[3] sm:block md:block lg:hidden xl:hidden bg-black/20 rounded top-[90vh]">
          <Slider {...settings} className="mx-2 sm:mx-8 md:mx-12 text-white">

              <div >
                <ProjectCard />
              </div>
              </Slider>
        </div>
      );
    };
    
    export default ProjectSlide;