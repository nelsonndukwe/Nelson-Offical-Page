import React from 'react'
import './Testimonial.css'
import Image1 from '../../Assets/avatar-1.svg'
import Image3 from '../../Assets/avatar-3.svg'
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
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
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
                    <img src={image} alt='testimonail image' />
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