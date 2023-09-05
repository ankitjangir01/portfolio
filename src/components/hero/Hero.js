import React from 'react'
import hero from './../../assets/hero.png'
import HeroObject from './HeroObject.js'
import IDECard from './IDECard.js'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Skills from './Skills'
import './../../index.css'
import Education from '../Education'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='flex flex-wrap'>
                <div className='hero-text flex-auto mx-auto items-center' style={{ 'margin': 'auto' }}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -200
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 120,
                            originX: 0,
                            delay: 0.5,
                            duration: 1
                        }}
                        className='text-7xl font-extrabold my-auto inline-block'
                    >
                        <motion.div
                            animate={{
                                color: ['#000000', '#2e2e2e', '#000000'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity
                            }}
                        >
                        <TypeAnimation
                            sequence={[
                                "Ankit Jangir"
                            ]}
                            speed={5}
                            cursor={false}
                        >
                        </TypeAnimation>
                        </motion.div>

                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -200
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 120,
                            originX: 0,
                            delay: 1.5,
                            duration: 1
                        }}
                        className='my-8'
                    >
                        <IDECard />
                    </motion.div>
                </div>
                <div className='hero-image flex-auto object-center'>
                    <img src={hero} style={{ 'maxHeight': '100vh', 'paddingTop': 14 }} />
                    {/* <HeroObject /> */}
                </div>
            </div>
            <Education/>
            <Skills />
        </div>
    )
}

export default Hero