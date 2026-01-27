import AnnouncementBar from "../components/AnnouncmentBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const RootLayout = () => {
  return (
    <div className="flex flex-col">
     <AnnouncementBar/>
     <Navbar/>
     <main className='min-h-screen px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw] '>
      
      <Outlet/>
     </main>

     <Footer/>
     </div>
  )
}

export default RootLayout