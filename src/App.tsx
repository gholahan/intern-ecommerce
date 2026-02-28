import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route, RouterProvider } from 'react-router-dom'
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage'
import RootLayout from './layouts/RootLayout'
import Wishlist from './pages/WishListPage'
import CategoryPage from './pages/ProductCategoryPage'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import AuthLayout from './layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
import { useAuthCheck } from './feautures/auth/authCheck'

const App = () => {

 const{} =  useAuthCheck()

 if (loading) return 

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route element={<AuthLayout/>}>
      <Route path='/login' element={<LoginPage/>}/>
    </Route>
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/category/:categoryName' element ={<CategoryPage/>}/>
      <Route path ='/cart' element= {<CartPage/>}/>
      <Route path='/cart/checkout' element={<Checkout/>}/>
    </Route>
    </Route>
  ))

  return (
    <>
      <ToastContainer  position="top-center"/>
      <RouterProvider router={routes}/>
      
    </>
  )
}

export default App