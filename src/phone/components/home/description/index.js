import React from 'react'
import './description.scss'
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faGitlab, faInstagramSquare, faDocker, faStackOverflow, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import MediaQuery from 'react-responsive'
import profilePic from '../../../../assets/31243793.jpeg';
import SocialNetwork from '../../common/social-network'
function ProfilePic() {
    return (
        <div className='avatar-border'>
            <img className="avatar" src={profilePic} alt='avatar' width="20px"/>
        </div>
    )
}


function SocialNetworks() {
    return <div className="social-contacts">
        <SocialNetwork icon={faStackOverflow} title="StackOverflow" uri={`https://stackoverflow.com/users/4267015/naor-tedgi`} />
        <SocialNetwork icon={faGithubSquare} title="Github" uri={"https://github.com/ntedgi"} />
        <SocialNetwork icon={faLinkedinIn} title="Linkedin" uri={`https://www.linkedin.com/in/naor-tedgi-11314284/`} />
        <SocialNetwork icon={faGitlab} title="GitLab" uri={"https://gitlab.com/Naor-Tedgi"} />
        <SocialNetwork icon={faDocker} title="DockerHub" uri={"https://hub.docker.com/u/naortedgi"} />
        <SocialNetwork icon={faFacebookSquare} title="Facebook" uri={"https://www.facebook.com/NaorTedgi2205/"} />
        <SocialNetwork icon={faTwitterSquare} title="Twitter" uri={"https://twitter.com/naor_tedgi"} />
        <SocialNetwork icon={faInstagramSquare} title="Instagram" uri={"https://www.instagram.com/naortedgi/?hl=en"} />
        <SocialNetwork icon={faEnvelopeSquare} title="Email" uri={"mailto:naor.tedgi@gmail.com"} />
    </div>

}

function Contact() {
    return (
        <div className='contact'>
            <SocialNetworks />
        </div>)

}

export default function Description() {
    return (
        <div className='description'>
            <MediaQuery minWidth={1224}>
                <ProfilePic/>
                <Contact />
            </MediaQuery>

        </div>
    )
}
