import VerticalTextAnimation from './animation2';
import { Card, CardBody } from '@nextui-org/react';


function Sidebar() {


    return (
      <>
    <Card className='rounded-none w-[15vh] h-[70vh] '>
        <CardBody className='flex-col justify-center bg-two text-onw rounded-none'>
            <VerticalTextAnimation texts={[
              "HTML",
              "CSS",
              "Bootstrap",
              "Bootswatch",
              "TailwindCSS",
              "NextUI",
              "MaterinalUI",
              "JavaScript",
              "ReactJS",
              "ExpressJS",
              "NodeJS",
              "SQL",
              "MongoDB",
              "Mongoose",
              "GitHub",
              "git"
            ]}
            speed={500} 
             />
        </CardBody>
    </Card>
      </>
    )
  }
  
  export default Sidebar
  