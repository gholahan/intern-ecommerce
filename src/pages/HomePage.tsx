import HomePageGrd from "../components/HomePageGrd";
import TopDiv from "../components/TopDiv";


const HomePage = () => {

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw]">
     <TopDiv/>
     <HomePageGrd/>
    </div>
  )
}

export default HomePage