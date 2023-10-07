import React, { useState } from 'react'
import { motion } from 'framer-motion'
import nitrrlogo from './../assets/nitrrlogo.png'

const Education = () => {
    const [eduState, setEduState] = useState("beforeClick");

    const eduVarient = {
        beforeClick: {
            y: [-4, 4, -4],
            transition: {
                duration: 1.5,
                repeat: Infinity
            }
        },
        afterClick: {
            backgroundColor: '#ffffff',
            width: 'max-content',
            height: 'fit-content',
            border: 'solid 12px',
            // maxWidth: '90vh',
        }
    }

    return (
        <div className='hero-bar'>
            <span className=' flex items-center cursor-pointer overflow-hidden p-2'
                onClick={() => { eduState === "beforeClick" ? setEduState("afterClick") : setEduState("beforeClick") }}
            >
                <span>
                    EDUCATI
                </span>
                <motion.span className='w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full inline self-center overflow-hidden'
                    variants={eduVarient}
                    animate={eduState}
                >
                    <motion.div className='flex p-4 sm:p-8'>
                        <img src={nitrrlogo} style={{ maxHeight: '130px' }} className='hidden md:block'/>
                        <div className='text-xl font-bold ml-4 text-left'>
                            National Institute of Technology (NIT) <br />
                            Raipur, India
                            <hr style={{ height: '2px', backgroundColor: '#000000', marginBottom: '8px' }} />
                            <li className='text-base font-normal'>Electronics and Communication Engineering</li>
                            <li className='text-base font-normal'>July 2019 - July 2023</li>
                        </div>
                    </motion.div>
                </motion.span>
                <span>
                    N
                </span>
            </span>
        </div>
    )
}

export default Education