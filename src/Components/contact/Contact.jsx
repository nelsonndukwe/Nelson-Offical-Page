import React from 'react'
import './Contact.css'
import { FiTwitter } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { SiSteemit } from 'react-icons/si'


const Contact = () => {
  return (
    <section id='contact' className='contact container section'>
      <h2 className='section__title'>Send a Message</h2>





      <div className='main__container'>

        <div className='contact__side-container'>
          <h3 className='contact__title'>Lets Talk 😊</h3>
          <h4>Wanna Reach Out, Leave A Message 👋 </h4>

          <div className='contact__icon-div'>

            <a href='https://twitter.com/NelsonNdukwe6' target="_blank"><FiTwitter className='contact__icon' /></a>
            <a href='https://www.linkedin.com/in/nelson-ndukwe-040b6a168/' target="_blank"><FiLinkedin className='contact__icon' /></a>
            <a href='https://steemit.com/@whitestallion/posts' target="_blank"><SiSteemit className='contact__icon' /></a>


          </div>
        </div>


        <form action='' className='contact__form'>

          <div className='contact__form-group '>

            <div className='contact__form-div'>
              <input type="text" placeholder='Name' className='conatct__form-input' required />
            </div>

            <div className='contact__form-div'>
              <input type="email" placeholder='Email' className='conatct__form-input' required />
            </div>
          </div>


          <div className='contact__form-div'>
            <input type="text" placeholder='Subject' className='conatct__form-input' required />
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea name='' cols='30' rows='10' className='conatct__form-input' placeholder='Write Your Message' required />
          </div>



          <button className='btn'>Dispatch</button>

        </form>


      </div>
    </section>
  )
}

export default Contact