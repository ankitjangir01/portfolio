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
            border: 'solid 12px'
        }
    }

    return (
        <div className='flex text-6xl font-extrabold items-center align-middle' style={{ backgroundImage: 'linear-gradient(45deg, #ff7c7c, #fe7eff, #e8a8ff)' }}>
            <span className='mx-auto flex p-8 align-middle cursor-pointer'
                onClick={() => { eduState === "beforeClick" ? setEduState("afterClick") : setEduState("beforeClick") }}
            >
                <span>
                    EDUCATI
                </span>
                <motion.span className='w-16 h-16 bg-black rounded-full inline self-center overflow-hidden'
                    variants={eduVarient}
                    animate={eduState}
                >
                    <motion.div className='flex p-8'>
                        <img src={nitrrlogo} style={{ maxHeight: '130px' }} />
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