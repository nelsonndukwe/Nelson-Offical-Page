import React from 'react'
import './Resmue.css'
import Card from './Card';
import Data
 from './Data';
const Resmue = () => {

   

  return (
    <section id='resume' className='resume container grid'>
    <h2 className='section__title section'>Experince</h2>

    <div className='resume__conatiner grid' >
    <div className='timeline grid'>
    {Data.map((me, id) =>{
      if(me.category === "education"){
        return(
          <Card key={id} icon={me.icon} title={me.title} year={me.year} desc={me.desc} />
        )
      }
    })}
    </div>

    <div className='timeline grid'>
    {Data.map((me, idex) =>{
      if(me.category === "experience"){
        return(
          <Card key={idex} icon={me.icon} title={me.title} year={me.year} desc={me.desc} />
        )
      }
    })}
    </div>
    </div>

    </section>
  )
}

export default Resmue