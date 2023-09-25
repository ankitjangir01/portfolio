import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Projects = () => {

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
            width: '90vw',
            height: '90vh',
            border: 'solid 12px'
        }
    }

  return (
    <div className='hero-bar overflow-hidden' style={{backgroundImage: 'linear-gradient(45deg, #3987ff, #9dc3ff, #84f9ff)'}}>
        <span className='mx-auto flex align-middle cursor-pointer items-center'
                onClick={() => { eduState === "beforeClick" ? setEduState("afterClick") : setEduState("beforeClick"); documen.scrollBy(0, 500) }}
            >
                PR
                <motion.span className='w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full inline overflow-hidden'
                    variants={eduVarient}
                    animate={eduState}
                >
                    <motion.div className='flex p-4 sm:p-8'>
                        
                    </motion.div>
                </motion.span>
                JECTS
            </span>
    </div>
  )
}

export default Projects