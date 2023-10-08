import React, { useRef, useState } from 'react'
import './../../index.css'
import reactjs from './../../assets/reactjs.svg'
import materialui from './../../assets/materialui.svg'
import bootstrap from './../../assets/bootstrap.svg'
import framermotion from './../../assets/framermotion.svg'
import tailwindcss from './../../assets/tailwindcss.svg'
import html5 from './../../assets/html5.svg'
import css3 from './../../assets/css3.svg'
import javascriptes6 from './../../assets/javascriptes6.svg'
import nodejs from './../../assets/nodejs.svg'
import expressjs from './../../assets/expressjs.svg'
import springboot from './../../assets/springboot.svg'
import mongodb from './../../assets/mongodb.svg'
import sql from './../../assets/sql.svg'
import datastructures from './../../assets/datastructures.svg'
import algorithms from './../../assets/algorithms.svg'
import cpp from './../../assets/cpp.svg'
import git from './../../assets/git.svg'
import github from './../../assets/github.svg'
import vscode from './../../assets/vscode.svg'
import { motion, useInView } from 'framer-motion'
import downArrow from './../../assets/down-arrow.svg'

const Skills = () => {
    const [showSkills, setShowSkills] = useState(true);
    const frontendRef = useRef(null);
    const backendRef = useRef(null);
    const othersRef = useRef(null);
    const frontendInView = useInView(frontendRef);
    const backendInView = useInView(backendRef);
    const othersInView = useInView(othersRef);

    const frontend = [
        { id: 1, art: reactjs, title: 'ReactJS', level: 5 },
        { id: 2, art: tailwindcss, title: 'Tailwind CSS', level: 5 },
        { id: 3, art: materialui, title: 'Material UI', level: 4 },
        { id: 4, art: bootstrap, title: 'Bootstrap', level: 4 },
        { id: 5, art: framermotion, title: 'Framer Motion', level: 5 },
        { id: 6, art: html5, title: 'HTML5', level: 5 },
        { id: 7, art: css3, title: 'CSS3', level: 5 },
        { id: 8, art: javascriptes6, title: 'JavaScript ES6', level: 5 }
    ]

    const backend = [
        { id: 1, art: nodejs, title: 'Node.js', level: 5 },
        { id: 2, art: expressjs, title: 'Express.js', level: 5 },
        { id: 3, art: springboot, title: 'Spring Boot', level: 3 },
        // { id: 4, art: mybatis, title: 'My Batis', level: 3 },
        { id: 5, art: mongodb, title: 'MongoDB', level: 5 },
        { id: 6, art: sql, title: 'SQL', level: 4 }
    ]

    const more = [
        { id: 1, art: datastructures, title: 'Data Structures', level: 5 },
        { id: 2, art: algorithms, title: 'Algorithms', level: 5 },
        { id: 3, art: cpp, title: 'C++', level: 5 },
        { id: 4, art: git, title: 'Git', level: 5 },
        { id: 5, art: github, title: 'GitHub', level: 4 },
        { id: 6, art: vscode, title: 'VS Code', level: 4 }
    ]

    return (
        <>
            <div className='hero-bar' style={{ backgroundColor: '#9acd32', borderBottom: 'dasheds'}}>
                <span className='flex-col md:flex-row mx-auto flex align-middle cursor-pointer'>
                    Technologies I Use
                    <img src={downArrow} style={{ height: '1.3em' }} />
                </span>
            </div>
            <motion.div className="skills-container overflow-hidden">
                {/* ==============frontend================= */}
                <section className='flex skills-section h-fit md:h-screen' ref={frontendRef} style={{ backgroundColor: '#9acd32' }}>
                    <div className='text-8xl font-extrabold rotate-180 px-4'
                        style={{
                            writingMode: 'vertical-lr',
                            transform: frontendInView ? "none" : "translateX(-200px)",
                            opacity: frontendInView ? 1 : 0,
                            transition: "all 1s"
                        }}>
                        Frontend
                    </div>
                    <div style={{
                        display: 'inline-block',
                        transform: frontendInView ? "none" : "translateX(200px)",
                        opacity: frontendInView ? 1 : 0,
                        transition: "all 1s"
                    }}>
                        {frontend.map(skill => (
                            <div className='p-6 sm:p-10 inline-block w-[130px] sm:w-[200px]'>
                                <img src={skill.art} alt={skill.title} />
                                <h3>{skill.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
                {/* =================backend==================== */}
                <section className='flex skills-section h-fit md:h-screen' ref={backendRef} style={{ backgroundColor: '#ffd271' }}>
                    <div
                        style={{
                            display: 'inline-block',
                            transform: backendInView ? "none" : "translateX(-200px)",
                            opacity: backendInView ? 1 : 0,
                            transition: "all 1s"
                        }}
                        className='grow'>
                        {backend.map(skill => (
                            <div className='p-6 sm:p-10 inline-block w-[130px] sm:w-[200px]'>
                                <img src={skill.art} alt={skill.title} />
                                <h3>{skill.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className='text-8xl font-extrabold px-4 flex-none'
                        style={{
                            writingMode: 'vertical-lr',
                            transform: backendInView ? "none" : "translateX(200px)",
                            opacity: backendInView ? 1 : 0,
                            transition: "all 1s"
                        }}
                    >
                        Backend
                    </div>
                </section>
                {/* ===================a few more==================== */}
                <section className='flex skills-section h-fit md:h-screen' ref={othersRef} style={{ backgroundColor: '#e5a9d9' }}>
                    <div className='text-8xl font-extrabold rotate-180 px-4'
                        style={{
                            writingMode: 'vertical-lr',
                            transform: othersInView ? "none" : "translateX(-200px)",
                            opacity: othersInView ? 1 : 0,
                            transition: "all 1s"
                        }}
                    >
                        More...
                    </div>
                    <div
                        style={{
                            display: 'inline-block',
                            transform: othersInView ? "none" : "translateX(200px)",
                            opacity: othersInView ? 1 : 0,
                            transition: "all 1s"
                        }}
                    >
                        {more.map(skill => (
                            <div className='p-6 sm:p-10 inline-block w-[130px] sm:w-[200px]'>
                                <img src={skill.art} alt={skill.title} />
                                <h3>{skill.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </>
    )

}

export default Skills