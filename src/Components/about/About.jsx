import React from 'react'
import './About.css'
import Me from '../../Assets/NFT1.jpg'
import Aboutbox from './Aboutbox'
import File from '../../Assets/CV.pdf'

const About = () => {
  return (
    <section className=' about container section' id='about'>
      <h2 className='section__title '>
        About Me
      </h2>

      <div className='about__conatiner  container grid'>
        <img src={Me} alt='' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              Nelson is an experinced frontend Developer based in Nigeria, Africa. Nelson offers exceptional frontend devloping abilities, Nelson has been involcved in various projects involving huge and scalbale apps and high delivering web applications.
            </p>

            <a href={File} download className='btn'>Download CV</a>

          </div>

          <div className='about__skills grid'>
            <div className='skill__data'>
              <div className='skill__titles'>
                <h3 className='skill__name'>
                  Development
                </h3>
                <span className='skill__number'>90%</span>
              </div>

              <div className='skills__bar development'>
                <span className='skill__percentage'></span>
              </div>
            </div>


            <div className='skill__data'>
              <div className='skill__titles'>
                <h3 className='skill__name'>
                  Technical Writing
                </h3>
                <span className='skill__number'>75%</span>
              </div>

              <div className='skills__bar technical__write'>
                <span className='skill__percentage '></span>
              </div>
            </div>



            <div className='skill__data'>
              <div className='skill__titles'>
                <h3 className='skill__name'>
                  Community Manager
                </h3>
                <span className='skill__number '>80%</span>
              </div>

              <div className='skills__bar community__manager'>
                <span className='skill__percentage'></span>
              </div>
            </div>

          </div>



        </div>

      </div>


      <Aboutbox />
    </section>

  )
}

export default About