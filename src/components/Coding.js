import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CodingContent from './CodingContent';
import useAutoScroll from '../hooks/useAutoScroll.hook';

const Coding = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    // useAutoScroll({ref: ref});

    const varient = {
        false: {
            y: [-4, 4, -4],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                scrollY: -400
            }
        },
        true: {
            backgroundColor: '#ffffff',
            width: '70vw',
            height: '70vh',
            border: 'solid 12px',
            transition: {
                scrollY: 400
            }
        }
    }

    const toggleCoding = () => {
        if (!open) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    }

    return (
        <div className='hero-bar overflow-hidden' style={{ backgroundImage: 'linear-gradient(45deg, rgb(255 234 71), #ffe35c, rgb(255 157 53))' }} ref={ref} >
            <span className='mx-auto flex align-middle cursor-pointer items-center p-2'
                onClick={toggleCoding}
            >
                C
                <motion.span className='w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full inline overflow-hidden'
                    variants={varient}
                    animate={open.toString()}
                >
                    <CodingContent open={open} />
                </motion.span>
                DING
            </span>
        </div>
    )
}

export default Coding