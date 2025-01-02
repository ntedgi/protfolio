
import React, { useState } from 'react';
import './youtube.scss'
import SocialNetwork from '../../../../common/social-network'

import {  faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function YouTubeContainer(props) {
    const [isHovered, setIsHovered] = useState(false);
    const clickUrl = "https://www.youtube.com/watch?v=Y4YbVcsGGQk&ab_channel=NaorTedgi"
    const { isShadowed, onElementMouseEnter, onElementMouseLeave } = props;
    let shouldShadow = isHovered ? '' : isShadowed
    const handleMouseEnter = () => {
        setIsHovered(true);
        onElementMouseEnter()
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onElementMouseLeave()
    };

    return (
        <div className={`youtube-container ${isHovered ? 'hovered' : ''} ${shouldShadow ? 'shedowed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => { window.open(clickUrl, "_blank") }}
        >
            <div className='youtube-internal'>
                <div className='video-text-container'>
                    <div className='title'>"MALICIOUS SPI" SIMULATOR</div>
                    <div className='video-discription'>prototype of "Time of Check Time of use attack" on SPI Protocol 
                        <br>exploiting this weakness using BeagalBoard-X15  And beagle bone black</br>
                        </div>
                </div>
            </div>
        </div>

    )
}
