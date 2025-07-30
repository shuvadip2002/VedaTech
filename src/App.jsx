import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import Home from './components/Home/Home'
// import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <Services/>
      <MyWork/>
      {/* <Hero/> */}
      {/* <Services/> */}
      <About/>
      <Contact/>
      <Footer/>
     
      
    </div>
  )
}

export default App
