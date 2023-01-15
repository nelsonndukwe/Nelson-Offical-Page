import React from 'react'
import Home from '../Components/home/Home'
import About from '../Components/about/About'
import Services from '../Components/services/Services'
import Resmue from '../Components/resmue/Resmue'
import Testimonial from '../Components/testimonial/Testimonial'
import Contact from '../Components/contact/Contact'
import Porfolio from '../Components/portfolio/Portfolio'



const Layout = () => {
  return (
    <>
        
        <Home />
        <About />
        <Services />
        <Resmue />
        <Porfolio />
        <Testimonial />
        <Contact />
    </>
  )
}

export default Layout