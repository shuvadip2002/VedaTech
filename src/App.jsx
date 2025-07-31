import React from 'react'
import Navbar from './components/Navbar/Navbar'

import Services from './components/Services/Services'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'



const App = () => {
  return (
    <div> 
      
      <Navbar/>
      <Hero/>
      
      {/* <Home/> */}
      <Services/>
      <MyWork/>
     
      {/* <Services/> */}
      <About/>
      <Contact/>
      <Footer/>
      
     
      
    </div>
  )
}

export default App
