import React from 'react'
import Menu from './components/menu/Menu'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/navbar/Navbar'
import Layout from './components/layout/Layout'
import About from './components/About/About'
import Service from './components/Service/Service'
import Contact from './components/ContactUs/Contact'
import Contactus from './components/contact-Us/Contactus'
import Emailus from './components/Email/Emailus'
export default function App() {
  const routing = createBrowserRouter([
    {path: "/", element: <Layout/> ,children:[
      { index: true, element: <Home/> },
      {path:"/about" , element: <About/>},
      {path:"/contact" , element: <Contact/> ,children:[
        {path:"/contact/Contactus" , element: <Contactus/>},
        {path:"/contact/Emails" , element: <Emailus/>},
      ]  },
      {path:"/Services" , element: <Service/>},  
    ] ,
    }, 
  ]) ;
  return (
    <RouterProvider router={routing} >
    </RouterProvider>
  )
}
