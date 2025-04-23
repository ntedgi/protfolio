import React from 'react'
import './about.scss'
import Description from '../description'
import { faUnity } from "@fortawesome/free-brands-svg-icons"
import SocialNetwork from '../../../../common/social-network'
import ScrollHighlighter from '../../../../common/ScrollHighlighter'

function JobTitleDiscriptons() {
    return (
        <div className='job-title-discriptopn-container'>
            <div className='jtd-text'>
                {`Experienced software engineering leader with 8+ years in full-stack development, machine learning, and technical leadership. Currently at Unity, leading teams to architect scalable gaming infrastructure. Skilled in distributed systems, cross-functional team leadership, and innovation. Actively contribute to open-source projects with over 10K weekly downloads and deliver tech talks and workshops at Unity`}
            </div>
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
            </div>
        </div>
    </div>
}

function Name() {
    return <h1 className='about-name'>Naor Tedgi</h1>
}

function JobTitle() {
    return <div className='job-title-container'>
        <h1 className='about-job-title'>{"Tech Lead and Individual Contributor at Unity"}</h1>
        <SocialNetwork icon={faUnity} title="Unity" uri="https://unity.com/" />
    </div>
}

export default function About() {
    const sections = [
        { id: 'github-projects', title: 'Open Source' },
        { id: 'presentations', title: 'Presentations' },
        { id: 'videos', title: 'Videos' },
        { id: 'resume', title: 'Resume' }
    ];

    return (
        <div className='about'>
            <div>
                <Name />
                <JobTitle />
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
