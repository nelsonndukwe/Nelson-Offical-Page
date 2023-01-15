import React from 'react'
import './Home.css'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsDribbble} from 'react-icons/bs'


const HeaderSocails = () => {
  return (
    <div className='header__socails'>
    <a className='header__socails-links' href='' target='_blank'>
    <BsInstagram/></a>

    <a className='header__socails-links' href='' target='_blank'>
        <FiTwitter/>
    </a>

    <a className='header__socails-links' href='https://www.linkedin.com/feed/' target='_blank'>
        <GrLinkedinOption />
    </a>

    <a className='header__socails-links' href='' target='_blank'>
        <BsDribbble/>
    </a>
    </div>
  )
}

export default HeaderSocails