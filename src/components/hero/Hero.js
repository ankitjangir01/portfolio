import React from 'react'
import hero from './../../assets/hero.png'
import HeroObject from './HeroObject.js'
import IDECard from './IDECard.js'
import './../../style/hero.css'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Skills from './Skills'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='flex flex-row flex-wrap'>
                <div className='hero-text flex-auto text-left' style={{ 'width': '60%', 'margin': 'auto', 'marginLeft': 30 }}>
                    <motion.div
                        initial={{
                            // y: -1,
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
                        className='text-8xl font-extrabold m-4'
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
                            speed={10}
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
                        tran
                    >
                        <IDECard />
                    </motion.div>
                </div>
                <div className='hero-image flex-auto object-center'>
                    <img src={hero} style={{ 'maxHeight': '100vh', 'paddingTop': 14 }} />
                    {/* <HeroObject /> */}
                </div>
            </div>

            {/* -----------------------skills carousel -------------------------------------- */}
            <Skills />
        </div>
    )
}

export default Hero