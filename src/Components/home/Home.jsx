import React from 'react'
import './Home.css'
import Me from '../../Assets/NFT1.jpg'
import HeaderSocails from './HeaderSocails'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.section id='home' className='home conatiner '
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: "0vh" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div className='intro'
        initial={{y:"-30%",opacity:0}}
        animate={{y:"0%",opacity:1 }}
        transition={{ duration: 1, delay:1, type:"spring", stiffness:500, ease: "easeInOut" }}

      >
        <img src={Me} alt='Me' className='me__image' />
        <h1 className='home__name'>Nelson Ndukwe</h1>
        <span className='home__education'>I am a </span>
        <span className='home__education'>
          <Typewriter


            onInit={(typewriter) => {

              typewriter

                .typeString("Community Manager")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Technical Writer")

                .pauseFor(1000)
                .deleteAll()
                .typeString("FrontEnd Developer")
                .start()


            }}
          />
        </span>
        <HeaderSocails />

        <a className='btn' href='#contact'>Hire Me</a>

        <ScrollDown />
      </motion.div>

      <Shapes />


    </motion.section>

  )
}

export default Home