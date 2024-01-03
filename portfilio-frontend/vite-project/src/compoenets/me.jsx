import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import meImg from '../assets/img/me3.jpeg'

const Me = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const speed4 = 1;

            if (aboutRef.current) {
                aboutRef.current.style.transform = `translateY(-${scrollY * speed4}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <Card ref={aboutRef} className="flex flex-col md:flex-row  lg:flex-row xl:flex-row absolute -z-1 top-48 md:top-[35vh] lg:top-[20vh] mx-16 md:mx-[33%] justify-center w-[70%] md:w-[65%] lg:w-[38%] xl:w-[38%] bg-black/10">
           
            <CardHeader className=" w-[95%] flex-col mx-2 absolute my-24 md:ml-96 md:mt-36">
            <p className="text-white/70 font-bold" > Nora Martiny, 28(f)</p>
            <p className="text-white/70 font-bold">Junior Web Developer</p>

            <div className="flex my-16 ">
            <ul className="mx-2 mx-6">
            <p className="text-white/70">HTML</p>
            <p className="text-white/70">CSS</p>
            <p className="text-white/70">Bootstrap</p>
            <p className="text-white/70">Tailwind</p>
            <p className="text-white/70">JavaScript</p>
            </ul>
            <ul className="mx-2 mx-6">
            <p className="text-white/70">React</p>
            <p className="text-white/70">Express</p>
            <p className="text-white/70">Node</p>
            <p className="text-white/70">SQL</p>
            <p className="text-white/70">MongoDB</p>
            </ul>
            </div>
            </CardHeader>
            <CardBody className="w-[95%] mx-auto relative">

            <Image src={meImg} className="h-full w-full rounded-none -z-1" />
            </CardBody>
        </Card>
        </>
    );
};

export default Me;
