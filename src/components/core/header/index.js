import React from 'react'
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAddressCard, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
const MenuButton = (props) => {
    let navigate = useNavigate();
    return (
        <div className={`header-button ${props.cls}`} onClick={() => { navigate(props.path); }} >
            {props.icon ?? <FontAwesomeIcon icon={faProjectDiagram} />}
            <span className={`header-button uri`} >{props.text}</span>
        </div >
    )
};

const DownloadFile = (props) => {
    return (<div className={`header-button ${props.cls}`}>
        <FontAwesomeIcon icon={faAddressCard} />
        <div className={`header-button uri link`}>
            <Link to="/Naor_Tedgi_-_Software_Developer.docx" target="_blank" download>{props.text}</Link>
        </div>
    </div>)
}

export default function Header() {
    return (
        <div className="header-container">
            <MenuButton text="NAOR TEDGI" path="/" cls="name" icon={false} />
            <div className='menus'>
                <MenuButton text="PROJECTS" path="/projects" cls="menu" />
                <DownloadFile text="DOWNLOAD RESUME" cls="link" />
            </div>
        </div>
    )
}
