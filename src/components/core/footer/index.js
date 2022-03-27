import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss'
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faGitlab, faInstagramSquare, faDocker, faStackOverflow, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


function SocialNetwork(props) {
    return <div className="social-network" onClick={() => {
        window.open(props.uri, "_blank")
    }}>
        <span className='social-network-icon'><FontAwesomeIcon icon={props.icon} /></span>
    </div>
}

function SocialNetworks() {
    return <div className="social-contacts-footer">
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


export default function Footer() {
    return (
        <div className='footer'>
            <SocialNetworks />
        </div>
    )
}
