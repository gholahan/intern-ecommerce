import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route, RouterProvider } from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage'
import RootLayout from './layouts/RootLayout'
import Wishlist from './components/WishList'
import CartPage from './components/CartPage'
import Omo from './components/Omo'


const App = () => {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path ='/contact' element={<Omo/>}/>
    </Route>
     
  ))

  return (
    <>
      <ToastContainer/>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App