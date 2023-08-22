import React from 'react'
import Navbar from './../Navbar.js'
import hero from './../../assets/hero.png'
import HeroObject from './HeroObject.js'
import IDECard from './IDECard.js'
import './../../style/hero.css'

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-row'>
                <div className='hero-text w-50 font-bold text-left' style={{ 'width': '60%' }}>
                    <IDECard />
                </div>
                <div className='hero-image flex-auto object-center'>
                    <img src={hero} />
                    {/* <HeroObject /> */}
                </div>
            </div>
        </>
    )
}

export default Hero