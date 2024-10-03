import React from 'react'
import '../../Styles/Components/contact/contact.css'
import { Link } from 'react-router-dom'
import'../../Styles/Components/Forms/Forms.css'
import About from '../About/About'
import Aboutsection from '../Aboutsection/Aboutsection'
export default function Contact() {
  return (
    <div>
      
      <div className="contact">
      <div className="form-nav">
        <Link to ="Contactus">Contact Us From</Link>
        <Link to ="Emails">Emails</Link>
        <p>Locations</p>
        <p>Phone Num</p>
     </div>
   
     <Aboutsection/>
 </div>
    </div>
  )
}
