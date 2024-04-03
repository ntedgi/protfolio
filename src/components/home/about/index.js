import React from 'react'
import './about.scss'
import Description from '../description'
function JobTitleDiscriptons() {
    return (
        <div className='job-title-discriptopn-container'>
            <div className='jtd-text'>
                {`Tech Lead and Individual Contributor at `}<a className='link' href='https://www.is.com/' target="_blank" rel="noreferrer">Unity</a>
            </div>
            <div className='jtd-text'>
                {`Software Ninjaneer 🥷, Husband, Father, גולנצ'יק.`}
            </div>
            <div className='jtd-text'>
                {`previously worked at `}<a className='link' href='https://voyagerlabs.co/' target="_blank" rel="noreferrer">Voyager Labs</a> and <a className='link' href='https://www.monday.com/' target="_blank" rel="noreferrer">Monday.com</a>

            </div>
        </div>
    )
}

function Name() {
    return <h1 className='about-name'>Naor Tedgi</h1>
}
function JobTitle() {
    return <h1 className='about-job-title'>Tech Lead and Individual Contributor at Unity</h1>
}

export default function About() {
    
    return (
        <div className='about'>
            <div>
                <Name />
                <JobTitle />
                <JobTitleDiscriptons />
            </div>
            <Description />

        </div>
    )
}
