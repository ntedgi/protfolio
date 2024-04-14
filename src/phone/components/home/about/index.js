import React from 'react'
import './about.scss'
import Description from '../description'
import { faUnity } from "@fortawesome/free-brands-svg-icons"
import SocialNetwork from '../../common/social-network'

function JobTitleDiscriptons() {
    return (
        <div className='job-title-discriptopn-container'>
            <div className='jtd-text'>
                {`i enjoy developing tools and software and contribute to open-source projects. I like being challenged and tackling problems, learning new things, and exploring new areas. I am a team player and enjoy cooperating with others and learning from them. A great team with professional, enthusiastic, and cooperating members is very important to me.`}
            </div>
        </div>
    )
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

    return (
        <div className='about'>
            <div>
                <Name />
                <JobTitle />
                <JobTitleDiscriptons />
            </div>
            <div>
                <Description />
            </div>
        </div>
    )
}
