import React from 'react'
import profilePic from '../../../assets/31243793.jpeg';
import './about.scss'
import MediaQuery from 'react-responsive'

function ProfilePic() {
    return (
        <div className='avatar-border'>
            <img className="avatar" src={profilePic} alt='avatar' />
        </div>
    )
}
function FullName() {
    return (
        <div>
            <MediaQuery minWidth={1224}>
                <div className='page-title'>
                    <span>Naor Tedgi</span>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={1224}>
                <div className='page-title-small'>
                    <span>Naor Tedgi</span>
                </div>
            </MediaQuery>
        </div >

    )
}

function JobTitle() {
    return (
        <div>
            <div className='job-title'>
                {`Tech Lead and Individual Contributor at `}<a className='link' href='https://www.is.com/' target="_blank" rel="noreferrer">Unity</a>
            </div>
            <div className='job-title'>
                {`Software Ninjaneer 🥷, Husband, Father, גולנצ'יק.`}
            </div>
            <div className='job-title'>
                {`previously worked at `}<a className='link' href='https://voyagerlabs.co/' target="_blank" rel="noreferrer">Voyager Labs</a> and <a className='link' href='https://www.monday.com/' target="_blank" rel="noreferrer">Monday.com</a>

            </div>
        </div>
    )
}


export default function About() {
    return (
        <div className='about'>
            <ProfilePic />
            <FullName />
            <JobTitle />
        </div>
    )
}
