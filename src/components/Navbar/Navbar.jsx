import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

const[menu,setMenu] = useState("home");
// const menuRef = useRef();


  return (
    <div id='navbar' className='navbar'>
      <dev className="logo"><img src={logo} alt="" /></dev>
      <img src={menu_open} alt="" className='nav-mob-open'/>
      <ul className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" />
      </ul>
      
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' ofset={50} href='#hero'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li> 
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
