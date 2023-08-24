import React from 'react'
import hero from './../../assets/hero.png'
import HeroObject from './HeroObject.js'
import IDECard from './IDECard.js'
import './../../style/hero.css'
import { Typography } from '@mui/material'
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
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            // y: 0,
                            scale: 1
                        }}
                        transistion={{
                            duration: 1
                        }}
                    >
                        <Typography variant='h2' sx={{ 'fontWeight': 'bold' }}>
                            <TypeAnimation
                                sequence={[
                                    "Ankit Jangir"
                                ]}
                                speed={10}
                                >
                            </TypeAnimation>
                            </Typography>

                    </motion.div>
                    <motion.div
                        initial={{
                            y: '-6px',
                            opacity: 0,
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            y: '0px',
                            scale: 1
                        }}
                        transistion={{
                            duration: 1
                        }}
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