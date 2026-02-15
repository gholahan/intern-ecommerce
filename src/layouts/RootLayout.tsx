import AnnouncementBar from "../shared/components/AnnouncmentBar"
import { Outlet } from "react-router-dom"
import Footer from "../shared/components/Footer"
import Navbar from "../shared/components/Navbar"
const RootLayout = () => {
  return (
    <>
     <AnnouncementBar/>
     <Navbar/>
    <div className="flex flex-col">
     <main className='min-h-screen px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]'>
      <Outlet/>
     </main>
     <Footer/>
    </div>
    </>
  )
}

export default RootLayout