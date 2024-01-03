import { Card, CardHeader, Button } from "@nextui-org/react";
import { useEffect, useRef } from 'react';

function Contact() {
    const projectRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const speed5 = 1;

            if (projectRef.current) {
                projectRef.current.style.transform = `translateY(-${scrollY * speed5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <>

      <Card ref={projectRef} className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center mx-5 md:mx-20 lg:mx-[450px]  w-[90vw] lg:w-[50vw] bg-black/20 absolute z-[11] lg:top-[1150px] xl:top-[2150px]">
        
        <CardHeader className="flex-col gap-8 justify-center mx-auto ">
        <h2 className="text-one font-bold text-2xl">Contact me</h2>
          <p className="text-[16px] text-one font-bold align-text-left">Linkedin <Button className="text-white text-xs mx-4 bg-white/20 sm:ml-12 md:ml-12 lg:ml-36 xl:ml-48">Nories</Button></p>
          <p className="text-[16px] text-one font-bold">Discord <Button className="text-white bg-white/20  text-xs mx-4 sm:ml-12 md:ml-12 lg:ml-36 xl:ml-48">Nories</Button></p>
          <p className="text-[16px] text-one font-bold">GitHub <Button className="text-white bg-white/20 text-xs mx-4 sm:ml-12 md:ml-12 lg:ml-36 xl:ml-48">Nories</Button></p>
          <p className="text-[16px] text-one font-bold">E-mail <Button className="text-white bg-white/20 text-xs mx-4 sm:ml-12 md:ml-12 lg:ml-36 xl:ml-48">Nories</Button></p>
        </CardHeader>
      </Card>
    </>
  )
}

export default Contact;
