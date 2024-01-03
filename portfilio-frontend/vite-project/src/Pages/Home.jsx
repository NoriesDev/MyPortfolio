import LandingHeader from "../compoenets/LandingHeader";
import AboutComp from '../compoenets/aboutContent'
import Sidebar from "../compoenets/sidebar";
import ImgHead from "../compoenets/imgHead";
import Background from "../compoenets/background";

function Home() {


    return (
      <>
      <Background />
      <ImgHead />
      <LandingHeader />
    <AboutComp />
    <Sidebar />
      </>
    )
  }
  
  export default Home