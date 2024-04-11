import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./social-network.scss"
export default function SocialNetwork(props) {
    const { size } = props
    const className = size ? `social-network-icon-${size}` : 'social-network-icon-small'
    return <div className={"social-network" }onClick={() => {
        window.open(props.uri, "_blank")
    }}>
        <span className={className}><FontAwesomeIcon icon={props.icon} /></span>
    </div>
}