


import Logo from '../assets/img/Logo.png';
import Logo1 from '../assets/img/Logo1.png';
import { FaFacebookF } from "react-icons/fa";

function Foot() {
  const iconsTab = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
  ];

  return (
    <>
    <footer className="min-h-screen flex flex-col ">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center bg-two text-one absolute z-[100] w-full top-[2400px] md:top-[3000px]">
        <div className='flex'>
        <img src={Logo} alt="Logo" className="object-cover w-[350px] h-[350px] sm:hidden block" />
        <img src={Logo1} alt="Logo" className=" mr-12 object-cover w-[140px] h-[140px] hidden sm:block" />
        </div>
        <div className='flex-col'>
        <div className="flex gap-8 sm:justify-center sm:pb-4">
          <button className="text-[16px] text-one font-bold ">Home</button>
          <button className="text-[16px] text-one font-bold">About</button>
          <button className="text-[16px] text-one font-bold">Projects</button>
          <button className="text-[16px] text-one font-bold">Contact</button>
        </div>
        <div className="flex sm:justify-center">
          {iconsTab.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="mt-2 mb-1 mx-auto text-2xl p-4 rounded-full text-one transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
        </div>
        <div className='text-center text-one bg-two pb-8 ml-8'>
        <h5>Privacy Policy | © 2023 Nora Martiny Development</h5>
        <p>Design by Nora Martiny</p>
      </div>
      </div>
      </footer>
    </>
  )
}

export default Foot;
