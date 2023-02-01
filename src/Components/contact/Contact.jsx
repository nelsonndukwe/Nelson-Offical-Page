import React, { useState, useEffect } from 'react'
import './Contact.css'
import { FiTwitter } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { SiSteemit } from 'react-icons/si'
import { MdOutgoingMail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdSignalWifiConnectedNoInternet0 } from "react-icons/md"
import { motion } from 'framer-motion'
// import { Alert, Space } from 'antd';


const Contact = () => {

  const [submit, setSubmitted] = useState("false")


  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitted("false")
    }, 3000)

    return () => clearTimeout(timer)
  }, [submit])


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xzqtlh', 'template_oljgyha', form.current, 'BLLsOFvUMfZ6fbN5U')
      .then((result) => {
        console.log(result.text);
        setSubmitted("true")
      }, (error) => {
        console.log(error.text);
        setSubmitted("error")
      });

    e.target.reset()
  };


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
            <a href='https://steemit.com/@whitestallion/posts' target="_blank"><MdOutgoingMail className='contact__icon' /></a>


          </div>
        </div>


        <form className='contact__form' ref={form} onSubmit={sendEmail}>

          <div className='contact__form-group '>

            <div className='contact__form-div'>
              <input name='name' type="text" placeholder='Name' className='conatct__form-input' required />
            </div>

            <div className='contact__form-div'>
              <input name='email' type="email" placeholder='Email' className='conatct__form-input' required />
            </div>
          </div>


          <div className='contact__form-div'>
            <input name='subject' type="text" placeholder='Subject' className='conatct__form-input' required />
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea name='message' cols='30' rows='10' className='conatct__form-input' placeholder='Write Your Message' required />
          </div>



          <input className="btn" type='submit' value={submit === "true" ? "Sent" : "Dispatch"} />

          <motion.span className={submit === "error" ? 'error__message': "error-message" }

            initial={{ y: "-30%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 500, ease: "easeInOut" }}

          > <MdSignalWifiConnectedNoInternet0 /> Network Error</motion.span>

        </form>


      </div>


      {/* <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </Space> */}

    </section>
  )
}

export default Contact