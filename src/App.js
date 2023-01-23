import React from 'react';
import './App.css';
import { useState } from 'react';
import {BsBrightnessHigh} from 'react-icons/bs'
import Sidebar from './Components/sidebar/Sidebar'
import Layout from './Components/Layout';


function App() {
  const [theme, setTheme] = useState(false)
  
  return (
    <div className={theme ? 'theme-color' : ''}>

      <div className='Brightness'>
        <BsBrightnessHigh className='Brightness__icon' onClick={() =>
        theme === false ? setTheme(!false) : setTheme(false)} style={{color: theme === true? "pink" : ""}}/>
      </div>

      <Sidebar />
      <Layout />
    </div>
  )

}

export default App;
