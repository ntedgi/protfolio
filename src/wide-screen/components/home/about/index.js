import React from 'react'
import './about.scss'
import Description from '../description'
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons"
import SocialNetwork from '../../../../common/social-network'
import ScrollHighlighter from '../../../../common/ScrollHighlighter'
import { AIChips, AICaret, AITypewriter } from '../../../../common/ai-fx'

function JobTitleDiscriptons() {
    return (
        <div className='job-title-discriptopn-container'>
            <div className='jtd-text'>
                {`Experienced software engineering leader with 8+ years in full-stack development, backend, data, and technical leadership. Currently at Palo Alto Networks as Principal Software Engineer - Backend and Data, driving engineering excellence across cybersecurity platforms. Skilled in distributed systems, cross-functional team leadership, and innovation. Actively contribute to open-source projects with over 10K weekly downloads and deliver tech talks and workshops.`}
            </div>
            <AIChips />
        </div>
    )
}

function Overviow() {
    return <div className='job-title-discriptopn-container'>
        <div className='jtd-text'>
            <div className='item-container'>
                <div className='item'>
                    {`Husband`}
                </div>
                <div className='item'>
                    {`Father`}
                </div>
                <div className='item'>
                    {`גולנצ'יק.`}
                </div>
                <div className='item'>
                    {`Vibe Code Cleanup Specialist`}
                </div>
            </div>
        </div>
    </div>
}

function Name() {
    return (
        <div className='name-row'>
            <h1 className='about-name ai-gradient-text'>Naor Tedgi</h1>
        </div>
    )
}

function JobTitle() {
    return <div className='job-title-container'>
        <h1 className='about-job-title ai-job-title-line'>
            <span>Principal Software Engineer</span>
            <span className='at'>·</span>
            <span>Backend &amp; Data</span>
            <span className='at'>@</span>
            <span className='company-with-icon'>
                <span className='company'>Palo Alto Networks</span>
                <SocialNetwork icon={faShieldAlt} title="Palo Alto Networks" uri="https://www.paloaltonetworks.com/" />
            </span>
            <AICaret />
        </h1>
    </div>
}

export default function About() {
    const sections = [
        { id: 'github-projects', title: 'Open Source' },
        { id: 'presentations', title: 'Presentations' },
        { id: 'videos', title: 'Videos' }
    ];

    return (
        <div className='about'>
            <div>
                <Name />
                <JobTitle />
                <AITypewriter />
                <JobTitleDiscriptons />
            </div>
            <div>
                <div className="scroll-highlighter-container">
                    <ScrollHighlighter sections={sections} />
                </div>
                <Overviow />
                <Description />
            </div>
        </div>
    )
}
