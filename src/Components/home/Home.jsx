import React from 'react'
import './Home.css'
import Me from '../../Assets/NFT1.jpg'
import HeaderSocails from './HeaderSocails'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section id='home' className='home conatiner '>
      <div className='intro'>
        <img src={Me} alt='Me' className='me__image' />
        <h1 className='home__name'>Nelson Ndukwe</h1>
        <span className='home__education'>I am a FrontEnd Developer</span>

        <HeaderSocails />

        <a className='btn' href='#contact'>Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />


    </section>

  )
}

export default Home