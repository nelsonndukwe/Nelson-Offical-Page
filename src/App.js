import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import {BsBrightnessHigh} from 'react-icons/bs'

import Home from './Components/home/Home'
import Porfolio from './Components/portfolio/Portfolio'
import Resmue from './Components/resmue/Resmue'
import Services from './Components/services/Services'
import Sidebar from './Components/sidebar/Sidebar'
import Contact from './Components/contact/Contact'
import Testimonial from './Components/testimonial/Testimonial'
import About from './Components/about/About';

import Layout from './Components/Layout';


function App() {
  const [theme, setTheme] = useState(false)
  
  return (
    <div className={theme ? 'theme-color' : ''}>

      <div className='Brightness'>
        <BsBrightnessHigh className='Brightness__icon' onClick={() =>
        theme == false ? setTheme(!false) : setTheme(false)} style={{color: theme === true? "pink" : ""}}/>
      </div>


      <Sidebar />
      <Layout />


    </div>
  )

}

export default App;
