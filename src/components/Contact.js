import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import linkedin from './../assets/linkedin.svg'
import twitter from './../assets/twitter.svg'
import email from './../assets/email.svg'

const Contact = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const variant = {
        false: {
            height: '58px',
            width: '140px'
        },
        true: {
            width: '300px'
        }
    }

    return (
        <motion.div className='bg-white text-lg p-4 rounded-full fixed bottom-6 right-6 shadow-lg overflow-hidden h-min z-[2]'
            whileHover={{
                scale: 1.1,
                cursor: 'pointer'
            }}
            onClick={() => open ? setOpen(false) : setOpen(true)}
            variants={variant}
            animate={open.toString()}
            ref={ref}
        >
            Contact me
            <div className='mt-4'>
                <a href='https://www.linkedin.com/in/jangirankit' target='_blank' className='m-2 p-1 hover:shadow-lg'>
                    <img src={linkedin} style={{ width: '2.2em', display: 'inline-block' }} />
                </a>
                <a href='https://www.twitter.com/AnkitJangir01' target='_blank' className='m-2 p-1  hover:shadow-lg'>
                    <img src={twitter} style={{ width: '2em', display: 'inline-block' }} />
                </a>
                <a href='mailto:ankitjangirnice+pw@gmail.com' className='m-2 p-1  hover:shadow-lg'>
                    <img src={email} style={{ width: '2.1em', display: 'inline-block' }} />
                </a>
            </div>
        </motion.div>
    )
}

export default Contact