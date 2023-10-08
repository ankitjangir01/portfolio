import React, { useState } from 'react'
import { motion } from 'framer-motion'
import nitrrlogo from './../assets/nitrrlogo.png'

const Education = () => {
    const [open, setOpen] = useState(false);

    const eduVariant = {
        false: {
            y: [-4, 4, -4],
            transition: {
                duration: 1.5,
                repeat: Infinity
            }
        },
        true: {
            backgroundColor: '#ffffff',
            width: '100%',
            border: 'solid 12px',
            height: 'max-content'
        }
    }

    return (
        <div className='hero-bar overflow-hidden' style={{ backgroundImage: 'linear-gradient(45deg, #ff7c7c, #fe7eff, #e8a8ff)' }}>
            <span className='flex hover:cursor-pointer items-center' onClick={() => open ? setOpen(false) : setOpen(true)}>
                EDUCATI
                <motion.span className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full overflow-hidden"
                    variants={eduVariant}
                    animate={open.toString()}
                >
                    <div className='flex flex-col sm:flex-row p-4 m-4'>
                        <img src={nitrrlogo} className='w-20 h-20 m-4' />
                        <div className='text-xl font-bold text-left'>
                            National Institute of Technology (NIT) <br />
                            Raipur, India
                            <hr style={{ height: '2px', backgroundColor: '#000000', marginBottom: '8px' }} />
                            <li className='text-base font-normal'>Electronics and Communication Engineering</li>
                            <li className='text-base font-normal'>July 2019 - July 2023</li>
                        </div>
                    </div>
                </motion.span>
                N
            </span>
        </div>
    )
}

export default Education