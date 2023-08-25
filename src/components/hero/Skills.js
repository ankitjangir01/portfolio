import React, { useEffect, useRef, useState } from 'react'
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
import cpp from './../../assets/cpp.svg'
import github from './../../assets/github.svg'

const Skills = () => {
    const [maxHeight, setMaxHeight] = useState();
    const ref = useRef(null);

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
        { id: 3, art: cpp, title: 'C++', level: 5 },
        { id: 4, art: github, title: 'GitHub', level: 4 }
    ]

    //self executing function to define the height of class skills-section
    useEffect(() => {
        const viewportHeight = window.innerHeight;
        if (ref.current) {
            const contentHeight = ref.current.clientHeight;
            if (viewportHeight < contentHeight) {
                setMaxHeight('fitContent')
            }
            else {
                setMaxHeight('100vh')
            }
        }
    }, [])

    return (
        <>
            {/* ==============frontend================= */}
            <div className='flex skills-section' ref={ref} style={{ backgroundColor: '#9acd32', height: maxHeight }}>
                <div className='text-8xl font-extrabold rotate-180 px-4' style={{ 'writingMode': 'vertical-lr' }}>
                    Frontend
                </div>
                <div sx={{ 'display': 'inline-block' }}>
                    {frontend.map(skill => (
                        <div className='p-10 inline-block' style={{ 'width': 200 }}>
                            <img src={skill.art} alt={skill.title} />
                            <h3>{skill.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            {/* =================backend==================== */}
            <div className='flex skills-section' style={{ backgroundColor: '#ffd271', height: maxHeight }}>
                <div sx={{ 'display': 'inline-block' }} className='grow'>
                    {backend.map(skill => (
                        <div className='p-10 inline-block' style={{ 'width': 200 }}>
                            <img src={skill.art} alt={skill.title} />
                            <h3>{skill.title}</h3>
                        </div>
                    ))}
                </div>
                <div className='text-8xl font-extrabold px-4 flex-none' style={{ 'writingMode': 'vertical-lr' }}>
                    Backend
                </div>
            </div>
            {/* ===================a few more==================== */}
            <div className='flex skills-section' style={{ backgroundColor: '#e5a9d9', height: maxHeight }}>
                <div className='text-8xl font-extrabold rotate-180 px-4' style={{ 'writingMode': 'vertical-lr' }}>
                    More...
                </div>
                <div sx={{ 'display': 'inline-block' }}>
                    {more.map(skill => (
                        <div className='p-10 inline-block' style={{ 'width': 200 }}>
                            <img src={skill.art} alt={skill.title} />
                            <h3>{skill.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Skills