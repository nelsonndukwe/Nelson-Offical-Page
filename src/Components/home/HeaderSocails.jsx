import React from 'react'
import './Home.css'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'


const HeaderSocails = () => {
  return (
    <div className='header__socails'>
    <a className='header__socails-links' href='https://www.instagram.com/nelsonndukwe/' target='_blank'  rel="noreferrer" >
    <BsInstagram/></a>

    <a className='header__socails-links' href='https://twitter.com/NelsonNdukwe6' target='_blank'  rel="noreferrer" >
        <FiTwitter/>
    </a>

    <a className='header__socails-links' href='https://www.linkedin.com/in/nelson-ndukwe-040b6a168/' target='_blank'  rel="noreferrer" >
        <GrLinkedinOption />
    </a>
    
    </div>
  )
}

export default HeaderSocails