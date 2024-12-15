import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './../../index.css'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'

const IDECard = () => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-[26px] p-4 sm:p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Turning Concepts into Reality 🚀
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-start"
                >
                    Hover over to discover how I craft dynamic, responsive, and scalable web apps using the MERN stack
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                >
                    <div className='IDECard text-xs sm:text-sm p-4 sm:p-6'>
                        <p><span style={{ 'color': '#fc2403' }}>const</span> <span style={{ 'color': '#00a2c2' }}>printIntro</span> = (<span style={{ 'color': '#00a2c2' }}>name: </span> <span style={{ 'color': '#02ba1a' }}>string</span>) =&gt; &#123;</p>
                        <p style={{ 'textIndent': 26 }}><span style={{ 'color': '#02ba1a' }}>console.log</span>(`<span style={{ 'color': '#eba400' }}>$&#123;</span><span style={{ 'color': '#00a2c2' }}>name</span><span style={{ 'color': '#eba400' }}>&#125;</span> is a MERN stack developer`)</p>
                        <p style={{ 'textIndent': 26 }}><span style={{ 'color': '#02ba1a' }}>console.log</span>("
                            <TypeAnimation
                                sequence={[
                                    'He Works with ReactJS',
                                    1000,
                                    'He Works with TypeScript',
                                    1000,
                                    'He Works with Node.js',
                                    1000,
                                    'He Works with Express.js',
                                    1000,
                                    'He Works with MongoDB',
                                    1000
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                            ")
                        </p>
                        <p>&#125;;</p>
                        <br />
                        <p><span style={{ 'color': '#00a2c2' }}>printIntro</span>("Ankit");</p>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default IDECard