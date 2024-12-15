import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './../../index.css'

const IDECard = () => {
    return (
        <div className='IDECard text-sm sm:text-base'>
            <p><span style={{ 'color': '#fc2403' }}>const</span> <span style={{ 'color': '#00a2c2' }}>showHeadline</span> = (<span style={{ 'color': '#00a2c2' }}>name</span>) =&gt; &#123;</p>
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
            <p>&#125;</p>
            <br />
            <p><span style={{ 'color': '#00a2c2' }}>showHeadline</span>("Ankit")</p>
        </div>
    )
}

export default IDECard