import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ProjectsParallax from './ProjectsParallax'

const Projects = () => {
    const [projectsOpen, setProjectsOpen] = useState(false);

    const projectsVarient = {
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
            width: '90vw',
            height: '90vh',
            border: 'solid 12px',
            transition: {
                scrollY: 400
            }
        }
    }

    const toggleProjects = () => {
        if (!projectsOpen) {
            setProjectsOpen(true);
        }
        else {
            setProjectsOpen(false);
        }
    }

    return (
        <div className='hero-bar overflow-hidden' style={{ backgroundImage: 'linear-gradient(45deg, #3987ff, #9dc3ff, #84f9ff)' }}>
            <span className='mx-auto flex align-middle cursor-pointer items-center'
                onClick={toggleProjects}
            >
                PR
                <motion.span className='w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full inline overflow-hidden'
                    variants={projectsVarient}
                    animate={projectsOpen.toString()}
                >
                    <ProjectsParallax />
                </motion.span>
                JECTS
            </span>
        </div>
    )
}

export default Projects