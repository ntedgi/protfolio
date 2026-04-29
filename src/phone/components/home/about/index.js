import React from 'react'
import './about.scss'
import Description from '../description'
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons"
import SocialNetwork from '../../../../common/social-network'
import { AIChips, AICaret, AITypewriter } from '../../../../common/ai-fx'

function JobTitleDiscriptons() {
    return (
        <div className='p-job-title-discriptopn-container'>
            <div className='jtd-text'>
                {`i enjoy developing tools and software and contribute to open-source projects. I like being challenged and tackling problems, learning new things, and exploring new areas. I am a team player and enjoy cooperating with others and learning from them. A great team with professional, enthusiastic, and cooperating members is very important to me.`}
            </div>
            <AIChips />
        </div>
    )
}


function Name() {
    return (
        <div className='s-name-row'>
            <h1 className='s-about-name ai-gradient-text'>Naor Tedgi</h1>
        </div>
    )
}
function JobTitle() {
    return <div className='job-title-container'>
        <h1 className='about-job-title ai-job-title-line'>
            <span>Principal SWE</span>
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

    return (
        <div className='about'>
            <div>
                <Name />
                <JobTitle />
                <AITypewriter />
                <JobTitleDiscriptons />
            </div>
            <div>
                <Description />
            </div>
        </div>
    )
}
