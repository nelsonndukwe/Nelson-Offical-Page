import React from 'react'
import './Home.css'


const ScrollDown = () => {
  return (
    <div className='scroll__down'>
        <a href='about' className='mouse__warpper'>
            <span className='home__scroll-wheel'>Scroll Down </span>
            <span className='mouse'>
                <span className='wheel'></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown