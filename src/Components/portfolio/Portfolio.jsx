import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import {AiOutlineLink} from 'react-icons/ai'
import './Portfolio.css'

const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  const filterItem = (categoryItems) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItems; 
    })

    setItems(updatedItems)
  }
  
  return (
    <section className='work container section' id='portfolio'>
    <h2 className='section__title '>Recent Works</h2>

    <div className='work__filters'>
      <span className='work__item' onClick={() => setItems(Menu)}>Everything</span>
      <span className='work__item' onClick={() => filterItem
("Creative")}>Web Deisgns</span>
      <span className='work__item' onClick={() => filterItem
("Art")}>Review Works</span>
      
    </div>

    <div >
      <div className='works__container grid'>
        {items.map((elem) =>{
          const {id, image, title, category} = elem;
          return(
            <div className='work__card' key={id}>
            <div className='work__thumbnail'>
            <img src={image} alt='' />
            <div className='work__mask'></div>
            </div>

            <span className='work__category'>{category}</span>
            <h3 className='work__title'>{title}</h3>
            <a href='#' className='work__button'>
              <i className='icon-link work__button-icon'><AiOutlineLink/></i>
            </a>

            </div>

          )

        })}
      </div>

    </div>

    </section>
  )
}

export default Portfolio