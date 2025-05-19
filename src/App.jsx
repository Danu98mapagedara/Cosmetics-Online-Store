import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Cart from './pages/Cart/Cart'
import Context from './context/Context'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Allproduts from './pages/Allproduts/Allproduts'
import ProductPage from './pages/ProductPage/ProductPage'
import Blog from './pages/Blog/Blog'
import ContactUs from './pages/ContactUs/ContactUs'
import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'



function App() {

   const { state: auth} =useAuth();

  return (
    <div className="App">
      

     
   <Context>
      <BrowserRouter>
      <Navbar/> <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/all" element={<Allproduts/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/contactus" element={<ContactUs/>} />
           <Route path="/login" element={<Login/>} />
        
        <Route path="/profile"
   element={ <ProtectedRoute>  <Profile/>  </ProtectedRoute>  }
   />   </Routes>
      </BrowserRouter>
      </Context>
     
    
      </div>
      
      
    
  )
}

export default App
