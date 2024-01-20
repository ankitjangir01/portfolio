import React from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import coding1 from '../assets/coding1.png'
import coding2 from '../assets/coding2.png'
import coding3 from '../assets/coding3.png'
import coding4 from '../assets/coding4.png'

import { useRef } from 'react'

const codingArr = [
    {
        image: coding1,
        profile: 'https://leetcode.com/ankitjangir001/'
    },
    {
        image: coding2,
        profile: 'https://auth.geeksforgeeks.org/user/aj_00_11/practice/'
    },
    {
        image: coding3,
        profile: 'https://www.codingninjas.com/studio/profile/Ankit_J'
    },
    {
        image: coding4,
        profile: 'https://github.com/ankitjangir01/'
    }
]

const CodingContent = (props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref })

    const Image = ({ src, link }) => {
        const imageRef = useRef(null);
        const secInView = useInView(ref);

        return (
            <section className="flex flex-col sm:flex-row h-full items-center justify-around p-2 pt-8 sm:p-6 text-2xl font-normal mb-6">
                <a href={link} target='_blank' onClick={(e) => e.stopPropagation()}>
                    <motion.div
                        style={{
                            opacity: secInView ? 1 : 0,
                            transform: secInView ? "none" : "translateX(-100px)",
                            transition: "all 1s"
                        }}
                        className='group grow'
                    >
                        Profile
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-6 h-6 inline group-hover:scale-125 group-hover:text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </motion.div>
                </a>
                <div className='flex items-center justify-center sm:p-4 h-full' ref={imageRef}>
                    <img src={src} alt="project screenshot" className='max-h-full m-4' style={{ boxShadow: "#00000059 5px 5px 25px" }} />
                </div>
                <a href={link} target='_blank' onClick={(e) => e.stopPropagation()}>
                    <motion.div
                        style={{
                            opacity: secInView ? 1 : 0,
                            transform: secInView ? "none" : "translateX(100px)",
                            transition: "all 1s"
                        }}
                        className='group grow'
                    >
                        Profile
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-6 h-6 inline group-hover:scale-125 group-hover:text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </motion.div>
                </a>
            </section>
        );
    }

    return (
        <div className={`parallax-gutter p-4 overflow-scroll h-full ${props.open ? "" : "invisible"}`} ref={ref}>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            {codingArr.map(({ image, profile }) => (
                <Image src={image} link={profile} />
            ))}
        </div>
    )
}

export default CodingContent