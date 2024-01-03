import { Card, Image } from '@nextui-org/react';

const ImgHead = () => {

  return (

            <Card className="w-full rounded-none bg-two absolute z-[11] top-[300vh]">
              <Image removeWrapper alt="Card background" src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="relative rounded-none h-[35vh] w-full mx-auto z-0" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
            </Card>

  );
};

export default ImgHead;