import React from 'react'
import Navbar from './Navbar'
import hero from './../assets/hero.jpg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-row'>
                <div className='hero-text w-50 text-6xl font-bold text-left' style={{'width': '60%'}}>
                    <span className='w-200'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'A frontend heavy full-stack developer',
                            1000,
                            'Works on ReactJS',
                            1000,
                            'Works on Node.js',
                            1000,
                            'Works on Express.js',
                            1000,
                            'Works on MongoDB',
                            1000
                        ]}
                        speed={50}
                        // style={{ fontSize: '6em' }}
                        repeat={Infinity}
                    />
                    </span>
                </div>
                <div className='hero-image flex-auto object-center'>
                    <img src={hero} />
                </div>
            </div>
        </>
    )
}

export default Hero