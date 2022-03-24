import React from 'react'
import profilePic from '../../../assets/31243793.jpeg';
import './about.scss'
function ProfilePic() {
    return (
        <div className='avatar-border'>
            <img className="avatar" src={profilePic} alt='avatar' />
        </div>
    )
}
function FullName() {
    return (
        <div className='page-title'>
            <span>Naor Shlomo Tedgi</span>
        </div>
    )
}

function JobTitle() {
    return (
        <div>
            <div className='job-title'>
                {`Full Stack Developer at `}<a className='link' href='https://www.is.com/' target="_blank" rel="noreferrer">IronSource</a>
            </div>
            <div className='job-title'>
                {`Software Engineer , Husband, Father, גולנצ'יק.`}
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
