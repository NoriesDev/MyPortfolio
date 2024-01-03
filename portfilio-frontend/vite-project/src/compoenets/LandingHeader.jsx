import { Card, CardBody } from '@nextui-org/react';
import TextAnimation from "./animation";


function LandingHeader() {

    
    return (
      <>
    <Card className='rounded-none h-[25vh] w-[100vw] absolute top-[505vh] left-0 z-[21]'>
        <CardBody className='flex-col justify-center bg-two rounded-none'>

            <TextAnimation texts={[
              "Full Stack Web & App Developer...",
              "Sleep, Coffee, Code, Eat, Repeat...",
              "Problem solver...",
              "Creative thinker...",
              "Programmer with passion...",
            ]}
            speed={100} 
             />
        </CardBody>
    </Card>
      </>
    )
  }
  
  export default LandingHeader
  