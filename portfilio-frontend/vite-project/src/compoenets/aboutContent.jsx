import { getAbout } from "../../lib/dbClient";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useEffect, useState, useRef } from 'react';



const AboutComp = () => {
    const [about, setAbout] = useState([]);
    const aboutRef = useRef(null);


    useEffect(() => {
        async function fetchAbout() {
            try {
                const aboutData = await getAbout();
                setAbout(aboutData);
            } catch (error) {
                console.error('Error fetching about:', error);
            }
        }

        fetchAbout();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const speed4 = 0.5;

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
            <div ref={aboutRef} className="w-full flex  bg-none absolute z-[21] top-[215vh] md:top-[310vh] lg:top-[320vh] bg-none md:bg-none lg:bg-none xl:bg-none">
      
                <div className="w-full md:w-9/12 lg:w-9/12 xl:w-9/12 mx-auto">
                    <div className=" mx-auto ">
                        <Card shadow className="w-full mx-auto text-one bg-two/20 my-4">
                            <CardHeader>
                                <h2 className="font-four text-sm mx-auto my-2">Hey there, curious soul wandering through my digital universe!</h2>
                            </CardHeader>
                            {about.map((aboutItem) => (
                                <div key={aboutItem._id}>
                                    {aboutItem.article &&
                                        aboutItem.article.map((item, index) => (
                                            <CardBody
                                                key={index}
                                                className={index % 2 === 0 ? 'text-left' : 'text-right'}
                                            >
                                                <div className="">
                                                    <h4 className="font-bold py-1 font-four text-sm my-2 mx-4 md:mx-8 lg:mx-12 xl:mx-12">{item.headline}</h4>
                                                    <p className="font-four text-xs mx-4 md:mx-8 lg:mx-16 xl:mx-20">{item.paragraph}</p>
                                                </div>
                                            </CardBody>
                                        ))}
                                </div>
                            ))}
                            <CardFooter>
                                <h2 className="font-four text-sm mx-auto my-2 md:my-8 lg:my-8 xl:my-8">Stay curious and keep exploring this endless digital cosmos!</h2>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutComp;
