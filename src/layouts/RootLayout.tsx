import AnnouncementBar from "../shared/components/AnnouncmentBar"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../shared/components/Footer"
import Navbar from "../shared/components/Navbar"
import Breadcrumbs from "../shared/components/BreadCrumbs"
import ScrollToTop from "../shared/components/ScrollToTop"
const RootLayout = () => {
   const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  return (
    <>
    <ScrollToTop />
     <AnnouncementBar/>
     <Navbar/>
    <div className="flex flex-col">
     <main className='min-h-screen px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]'>
      {!isHomePage && <Breadcrumbs />}
      <Outlet/>
     </main>
     <Footer/>
    </div>
    </>
  )
}

export default RootLayout 