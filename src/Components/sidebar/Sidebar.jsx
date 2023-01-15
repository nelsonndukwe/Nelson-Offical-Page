import React from 'react'
import { useState } from 'react'
import './Sidebar.css'
import Logo from '../../Assets/logo.svg'

import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAdd} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'
import {SlGraduation} from 'react-icons/sl'

const Sidebar = () => {

  const year = new Date().getFullYear();
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={(activeNav === '#' ? 'active' : '')}><AiTwotoneHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={(activeNav === '#about' ? 'active' : '')}><AiOutlineUser /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={(activeNav === '#portfolio' ? 'active' : '')}><BiBookAdd /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={(activeNav === '#services' ? 'active' : '')}><RiServiceLine /></a>
      <a href='#resume' onClick={() => setActiveNav('#resume')} className={(activeNav === '#resume' ? 'active' : '')}><SlGraduation /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={(activeNav === '#contact' ? 'active' : '')}><RiContactsFill /></a>





    </nav>



  )
}

export default Sidebar