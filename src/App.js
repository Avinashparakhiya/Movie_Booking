import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error/Error';
import AdminLogin from './components/Login/adminLogin';
import UserLogin from './components/Login/userLogin';
import Dashboard from './components/Dashboard/dashboard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Logout from './components/Logout/Logout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movieBookingcart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
