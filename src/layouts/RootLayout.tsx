import AnnouncementBar from "../components/AnnouncmentBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const RootLayout = () => {
  return (
    <>
     <AnnouncementBar/>
     <Navbar/>
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Outlet/>
     
    </div>
     <Footer/>
    </>
  )
}

export default RootLayout