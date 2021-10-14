import './Hero.css'
import React from 'react';
import banner from '../../img/bannerbackground.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img width='100%' src={banner} alt="" />
            <div className='hero-body'>
                <h1>Best food waiting for your belly</h1>
                <div className="search-box">
                    <input type="text" placeholder='Search food items' />
                    <button className="btn-regular">Search</button>
                </div>

            </div>

        </div>
    );
};

export default Hero;