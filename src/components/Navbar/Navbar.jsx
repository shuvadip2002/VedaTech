import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
const[menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
      <dev className="logo"><img src={logo} alt="" /></dev>
      
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' ofset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li> 
        <li><AnchorLink className='anchor-link' ofset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li> 
        <li><AnchorLink className='anchor-link' ofset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>

        <li><AnchorLink className='anchor-link' ofset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        {/* <li><p>Portfolio</p>{menu===""?<img src={underline} alt=''/>:<></>}</li> */}
        <li><AnchorLink className='anchor-link' ofset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' ofset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
