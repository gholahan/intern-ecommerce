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


const App = () => {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='' element={<SearchPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/category/:categoryName' element ={<CategoryPage/>}/>
      <Route path ='/cart' element= {<CartPage/>}/>
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