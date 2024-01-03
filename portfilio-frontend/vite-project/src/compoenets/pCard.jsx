import { getProjects } from "../../lib/dbClient";

import { useEffect, useState  } from 'react';

const ProjectCard = () => {
    const [project, setProject] = useState([]);



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
    
  return (
   
    <div  className="sm:my-8 md:my-12 mx-auto rounded bg-black/0 text-white">
         {project.map((project, index) => (
      <div key={index}>
        <h4 className="font-bold py-1 font-four text-sm my-2 mx-4">{project.projectTitle}</h4>
        <p className="font-four mx-6 text-xs">{project.description}</p>
        <p className="font-four mx-6 text-xs">{project.tools.join(', ')}</p>
        <a className="font-four mx-6 text-xs" href={project.link}>
          {project.link}
        </a>
      </div>
        ))}
    </div>
     
  );
};

export default ProjectCard;