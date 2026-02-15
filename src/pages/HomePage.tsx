import HomePageGrd from "../feautures/products/components/HomePageGrd";
import SideBar from "../feautures/products/components/SideBar";


const HomePage = () => {

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw]">
     <SideBar/>
     <HomePageGrd/>
    </div>
  )
}

export default HomePage