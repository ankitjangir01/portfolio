import React from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { useRef } from 'react'

const projectArr = [
    {
        image: project1,
        live: 'https://eventsnearme.onrender.com',
        repo: 'https://github.com/ankitjangir01/EventsNearMe'
    },
    {
        image: project2,
        live: 'https://cash-app-ankit-jangir.netlify.app/',
        repo: 'https://github.com/ankitjangir01/cash-app'
    },
    {
        image: project3,
        live: 'https://text-utils-umber.vercel.app/',
        repo: 'https://github.com/ankitjangir01/CWH-text-utils'
    }
]

const ProjectsParallax = (props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref })

    const Image = ({ src, live, repo }) => {
        const ref = useRef(null);
        const secInView = useInView(ref);

        return (
            <section className="flex flex-col sm:flex-row h-full items-center justify-around p-6 text-2xl font-normal">
                <a href={live} target='_blank' onClick={(e) => e.stopPropagation()}>
                    <motion.div
                        style={{
                            opacity: secInView ? 1 : 0,
                            transform: secInView ? "none" : "translateX(-100px)",
                            transition: "all 1s"
                        }}
                        className='group grow'
                    >
                        Live
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="w-6 h-6 inline group-hover:scale-125 group-hover:text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </motion.div>
                </a>
                <div className='flex items-center justify-center h-full' ref={ref}>
                    <img src={src} alt="project screenshot" className='max-h-full m-4' style={{ boxShadow: "#00000059 5px 5px 25px" }} />
                </div>
                <a href={repo} target='_blank' onClick={(e) => e.stopPropagation()}>
                    <motion.div
                        style={{
                            opacity: secInView ? 1 : 0,
                            transform: secInView ? "none" : "translateX(100px)",
                            transition: "all 1s"
                        }}
                        className='group grow'
                    >
                        GitHub
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
            {projectArr.map(({ image, live, repo }) => (
                <Image src={image} live={live} repo={repo} />
            ))}
        </div>
    )
}

export default ProjectsParallax