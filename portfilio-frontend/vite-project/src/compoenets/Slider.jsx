import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Card, CardHeader, Image } from '@nextui-org/react';

const SliderComp = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  }
  return (
    <div className='w-9/12 mx-auto'>
    <Slider {...settings} className="mx-2 sm:mx-8 md:mx-12 lg:mx-36 xl:mx-20">
          <div key=''>
            <Link to='#'>
            <Card className="relative my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20 lg:max-h-96 xl:max-h-96 mx-auto">
              <Image removeWrapper alt="Card background" src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="relative mx-auto object-cover z-0" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
              <CardHeader className="absolute z-10 top-1 flex-col">
                    <p className="text-medium text-white uppercase font-bold md:mt-48 md:mb-6 lg:mt-36 lg:mb-6"></p>
                    <h4 className="text-white font-bold text-xl"></h4>
              </CardHeader>
            </Card>
            </Link>
          </div>
    </Slider>
    </div>
  );
};

export default SliderComp;