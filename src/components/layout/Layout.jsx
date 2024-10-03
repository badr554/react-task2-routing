import React from 'react'
import NavBar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
  <NavBar/>
<Outlet></Outlet>
    </div>
  )
}
