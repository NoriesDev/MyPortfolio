import { getProjects } from "../../lib/dbClient";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useEffect, useState, useRef } from 'react';

const Project = () => {
    const [project, setProject] = useState([]);
    const projectRef = useRef(null);

    useEffect(() => {
        async function fetchProject() {
            try {
                const projectData = await getProjects();
                if (projectData && Array.isArray(projectData)) {
                    setProject(projectData);
                } else {
                    console.error('Invalid project data format:', projectData);
                }
            } catch (error) {
                console.error('Error fetching about:', error);
            }
        }
    
        fetchProject();
    }, []);
    
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


    return (
        <>
            <div ref={projectRef} className="flex absolute z-[2] lg:top-[150vh] lg-block xl-block ">
                <div className="w-full  lg:w-5/12 xl:w-5/12  mx-auto">
                    <div className="mx-auto">
                        <Card shadow className="w-full mx-auto text-one bg-two/5 my-8 lg-rounded xl-rounded">
                            <CardHeader>
                                <h2 className="font-four text-lg mx-auto">My Project Collection</h2>
                            </CardHeader>
                            {project.map((data, index) => (
                                <CardBody
                                    key={index}
                                    className={index % 2 === 0 ? 'text-left' : 'text-right'}
                                >
                                    <div>
                                        <h4 className="font-bold py-1 font-four text-sm my-2 mx-4">{data.projectTitle}</h4>
                                        <p className="font-four mx-6 text-xs">{data.description}</p>
                                        <p className="font-four mx-6 text-xs">{data.tools.join(', ')}</p> 
                                        <a className="font-four mx-6 text-xs" href={data.link}>{data.link}</a>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
