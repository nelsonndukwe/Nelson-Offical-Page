import React from 'react'
import { GiCelebrationFire } from 'react-icons/gi'
import { SlBadge } from 'react-icons/sl'
import { ImHappy } from 'react-icons/im'

const Aboutbox = () => {
    return (
        <div className='about__boxes'>


            <div className='main__boxes annimation__box'>
                <div className='box__emoji__container'><GiCelebrationFire className='box__emoji' /></div>
                <h4 className='box__text'>Projects</h4>
                <p>4 Completed Projects</p>
            </div>


            <div className='main__boxes'>
                <div className='box__emoji__container'><SlBadge className='box__emoji' /></div>
                <h4 className='box__text'>Experince</h4>
                <p>13 Months Experince</p>
            </div>

            <div className='main__boxes annimation__box'>
                <div className='box__emoji__container'><ImHappy className='box__emoji' /></div>
                <h4 className='box__text'>Clients</h4>
                <p>25 Happy Clients WorldWide</p>
            </div>







        </div>

    )
}

export default Aboutbox