import React from 'react'
import './Testimonial.css'
import Image1 from '../../Assets/avatar3.jpg'
import Image3 from '../../Assets/avatar4.jpg'
import number1 from '../../Assets/avatar1.jpg'
import number2 from '../../Assets/avatar2.jpg'

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';



const Testimonial = () => {

  const data = [
    {
      id: 1,
      image: Image1,
      title: "Tochi",
      subtitle: "Frontend Devloper and Ui/UX design",
      comment:
        "Working with Nelson for About 13 months has been a great working experience, always ready to face the challenges and to deliver tasks as at when due",
    },
    {


      id: 2,
      image: Image3,
      title: "Anita",
      subtitle: "Client",
      comment:
        "Working and Learning with Nelosn has been by far the best learning experince i have had in my whole life, his understanding of the forex and crypto market is immense.",
    },
    {
      id: 3,
      image: number1,
      title: "Marvel",
      subtitle: "Project Manager At Groove",
      comment:
        "Working with Nelson as a Frontend developer on our groove project has proved to be a spectauclar experince as a result of his insane work ethic and vivalious sense of humour.Good luck! 👍",
    },
    
  
    
  ];



  return (
    <section id='testiominal' className='container section testimonials'>
      <h2 className='section__title'>Hear From Others </h2>

      <Swiper className='testimonal__conatiner grid'
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}

        loop={true}
        grabCursor={true}

        pagination={{ clickable: true }}
      >
        {data.map((Item) => {
          const { id, image, title, subtitle, comment } = Item
          
            

              return (

                <SwiperSlide className='testimonial__item'

                >
                  <div className='thumb'>
                    <img src={image} alt='testimonail image'  className='testimonial__image'/>
                  </div>
                  <h3 className='testimonial__title'>{title}</h3>
                  <span className='testiominal__subtitle'>{subtitle}</span>
                  <p className='testimonial__comment'>{comment}</p>



                </SwiperSlide>
              )
            })}


      </Swiper>

    </section>
  )
}

export default Testimonial