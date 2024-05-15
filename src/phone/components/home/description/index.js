import React from 'react'
import './description.scss'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import profilePic from '../../../../assets/31243793.jpeg';
import SocialNetwork from '../../common/social-network'
function ProfilePic() {
    return (
        <div className='s-avatar-border'>
            <img className="s-avatar" src={profilePic} alt='avatar' width="20px" />
        </div>
    )
}


function SocialNetworks() {
    return <div className="s-social-contacts" >
        <div className='s-scocial-phone-container' onClick={() => { window.open("https://github.com/ntedgi", "_blank")}}>
            <SocialNetwork icon={faGithub} title="Github" uri={"https://github.com/ntedgi"} />
            <span className='s-scocial-phone-container-text' >Github</span>

        </div>
        <div className='s-scocial-phone-container' onClick={() => {window.open("https://www.linkedin.com/in/naor-tedgi-11314284", "_blank")}}>
            <SocialNetwork icon={faLinkedinIn} title="Linkedin" uri={`https://www.linkedin.com/in/naor-tedgi-11314284/`} />
            <span className='s-scocial-phone-container-text' >Linkedin</span>
        </div>
    </div>

}

function Contact() {
    return (
        <div className='s-contact' >
            <SocialNetworks />
        </div>)

}

export default function Description() {
    return (
        <div className='s-description'>
            <ProfilePic />
            <Contact />
        </div>
    )
}
