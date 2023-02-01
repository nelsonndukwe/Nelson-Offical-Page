import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import {BsBrightnessHigh} from 'react-icons/bs'
import Sidebar from './Components/sidebar/Sidebar'
import Layout from './Components/Layout';
import Loading from './Components/Utilities/Loading';

function App() {

  const [theme, setTheme] = useState(false)

  const [load, setLoad] = useState(false)


  useEffect(() => {
    setLoad(true)
    const timer = setTimeout(() =>{
      setLoad(false)

    }, 3000)
    return () => clearTimeout(timer)

  }, [])

  if(load){
    return(
      <Loading />
    )
  }
  
  
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
