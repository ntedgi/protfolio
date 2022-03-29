import React from 'react'
import './description.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faGitlab, faInstagramSquare, faDocker, faStackOverflow, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import MediaQuery from 'react-responsive'

function AboutMe() {
    return (
        <div className='contact'>
            <span className="header">About Me</span>
            <div className='text-area'>
                I enjoy developing tools and software and contribute to open-source projects.
                I like being challenged and tackling problems, learning new things, and exploring new areas.
                I am a team player and enjoy cooperating with others and learning from them. A great team with professional,
                enthusiastic, and cooperating members is very important to me.
            </div>
        </div>)
}
function SocialNetwork(props) {
    return <div className="social-network" onClick={() => {
        window.open(props.uri, "_blank")
    }}>
        <span className='social-network-icon'><FontAwesomeIcon icon={props.icon} /></span>
        <span className='social-network-title'>{props.title}</span>
    </div>
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
            <span className="header">Contact</span>
            <SocialNetworks />
        </div>)

}

export default function Description() {
    return (
        <div className='description'>
            <AboutMe />
            <MediaQuery minWidth={1224}>
                <Contact />
            </MediaQuery>

        </div>
    )
}
