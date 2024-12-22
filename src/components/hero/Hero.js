import React, { useRef, useState } from 'react'
import hero from './../../assets/hero.png'
import IDECard from './IDECard'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Skills from './Skills'
import './../../index.css'
import Education from '../Education'
import { Alert } from '@material-tailwind/react'
import linkedinIcon from './../../assets/linkedin.svg'
import xIcon from './../../assets/x.png'
import githubIcon from './../../assets/githubIcon.svg'
import Background from './Background'
import Projects from '../Projects'
import Coding from '../Coding'
import Contact from '../Contact'
import Resume from '../Resume'
import Stats from '../stats/Stats'

const Hero = () => {
    const [desktopWarnOpen, setDesktopWarnOpen] = useState(true);
    const [quickViewDialogCase, setQuickViewDialogCase] = useState("");     // leetcode | ""
    const quickViewDialogRef = useRef(null);

    const isQuickViewDialogOpen = quickViewDialogCase !== "";

    const onCloseQuickViewDialog = () => {
        setQuickViewDialogCase("");
    }

    const getGreeting = () => {
        const hours = new Date().getHours();
        if (hours < 12) {
          return "Good Morning! 🙋🏻‍♂️";
        } else if (hours < 17) {
          return "Good Afternoon! 🙋🏻‍♂️";
        } else {
          return "Good Evening! 🙋🏻‍♂️";
        }
      };

    return (
        <>
            <div className='bg-[#bf58ff]'>
                {/* <Alert color="amber" className='sm:hidden text-white absolute z-[1]' open={desktopWarnOpen} onClose={() => setDesktopWarnOpen(false)}>
                    view in desktop for best experience
                </Alert> */}
                <div className='flex h-screen'>
                    <Background />
                    <div className='absolute right-0 p-1 md:p-6 hidden sm:block'>
                        <Resume />
                    </div>
                    <div className='hero-text flex-auto mx-auto items-center flex flex-col' style={{ 'margin': 'auto' }}>
                        <div className='text-2xl font-bold mb-4'>
                            Hi there, {getGreeting()}
                        </div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                originX: 0,
                                delay: 0.2,
                                duration: 1
                            }}
                            className='text-xl md:text-2xl font-extrabold my-auto inline-block z-[1] relative'
                        >
                            I am
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                originX: 0,
                                delay: 0.2,
                                duration: 1
                            }}
                            className='text-4xl md:text-7xl font-extrabold my-auto inline-block z-[1] relative'
                        >
                            Ankit Jangir
                        </motion.div>

                        {/* ============== IDE Card ========================== */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                originX: 0,
                                delay: .5,
                                duration: 1
                            }}
                        >
                            <div style={{ zIndex: 1, display: 'inline-block' }} className='relative m-5'>
                                <IDECard />
                            </div>
                        </motion.div>
                    {/* j */}
                    </div>
                </div>
            </div>
            <Stats />
            {/* <Education /> */}
            <Projects />
            <Coding />
            <Skills />
            <Contact />
        </>
    )
}

export default Hero