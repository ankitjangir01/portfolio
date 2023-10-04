import React from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import project1 from './1.png'
import project2 from './2.png'
import project3 from './2.png'
import project4 from './1.png'
import { useRef } from 'react'
import { Typography } from '@material-tailwind/react'

const projectArr = [project1, project2, project3, project4]

const ProjectsParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref })

    const Image = ({ src }) => {
        const ref = useRef(null);
        const secInView = useInView(ref);

        return (
            <section className="flex h-full items-center">
                <div className='items-center'>
                    <img src={src} alt="A London skyscraper" className='w-full' />
                </div>
                <motion.h2 className="text-lg max-w-[30%]"
                 ref={ref}
                    style={{
                        opacity: secInView ? 1 : 0,
                        transform: secInView ? "none" : "translateX(100px)",
                        transition: "all 0.7s"
                    }}
                >
                <Typography style={{overflowWrap: 'breakWord'}}>
                    Tis fsdfsd fsdifsd i berore oert43 34if icvjs fiewnf sgnidrgtjer gidofjg vidj dfgr3eritert vdciojovdf oirejt9re diojdfnvos terojer df Tis fsdfsd fsdifsd i berore oert43 34if icvjs fiewnf sgnidrgtjer gidofjg vidj dfgr3eritert vdciojovdf oirejt9re diojdfnvos terojer df Tis fsdfsd fsdifsd i berore oert43 34if icvjs fiewnf sgnidrgtjer gidofjg vidj dfgr3eritert vdciojovdf oirejt9re diojdfnvos terojer df Tis fsdfsd fsdifsd i berore oert43 34if icvjs fiewnf sgnidrgtjer gidofjg vidj dfgr3eritert vdciojovdf oirejt9re diojdfnvos terojer df Tis fsdfsd fsdifsd i berore oert43 34if icvjs fiewnf sgnidrgtjer gidofjg vidj dfgr3eritert vdciojovdf oirejt9re diojdfnvos terojer df
                </Typography>
                </motion.h2>
            </section>
        );
    }

    return (
        <div className='parallax-gutter p-4 overflow-scroll h-full' ref={ref}>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            {projectArr.map((image) => (
                <Image src={image} />
            ))}
        </div>
    )
}

export default ProjectsParallax