import React, { useState, useEffect } from 'react';
import './sof.scss'
import {
    setItemInCache,
    getItemFromCache,
    has
} from '../cache'
import SocialNetwork from '../../common/social-network'

import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import SOFChart from './chart';

function Badge(props) {
    const { count, color } = props;
    return (
        <div className={`badge ${color}`}>
            <div className='dot'></div>
            <div className='count'>{count}</div>
        </div>
    )
}
function Badges(props) {
    const { gold, silver, bronze } = props;
    return (
        <div className='badges-container'>
            <div className='title'>BADGES</div>
            <div className='badges'>
                <Badge count={gold} color='gold' />
                <Badge count={silver} color='silver' />
                <Badge count={bronze} color='bronze' />
            </div>
        </div>
    )
}
function Reputation(props) {
    const { reputation } = props
    return <div className='reputation-container'>
        <div className='title'>REPUTATION</div>
        <div className='reputation-count'>{reputation}</div>
        <SOFChart/>

    </div>
}
export default function SOFContainer(props) {
    const [state, setState] = useState(null)
    const [isHovered, setIsHovered] = useState(false);
    const clickUrl = "https://stackoverflow.com/users/4267015/naor-tedgi"
    const { isShadowed, onElementMouseEnter, onElementMouseLeave } = props;
    let shouldShadow = isHovered ? '' : isShadowed
    const cacheKey = `SOF_ME2`
    const URI = "https://api.stackexchange.com/2.3/users/4267015?site=stackoverflow"
    useEffect(
        () => {
            if (has(cacheKey)) {
                setState(getItemFromCache(cacheKey))
            }
            else {
                try {
                fetch(URI)
                    .then(res => res.json())
                    .then(data => {
                        const profile = data.items[0];
                        setState(profile)
                        setItemInCache(cacheKey, profile)
                    })
                }
                catch (e) {
                }
            }
        }, [cacheKey])

    if (state == null) {
        return (
            <div>No Data</div>
        )
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
        onElementMouseEnter()
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onElementMouseLeave()
    };

    return (
        <div className={`sof-container ${isHovered ? 'hovered' : ''} ${shouldShadow ? 'shedowed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => { window.open(clickUrl, "_blank") }}
        >
            <div className='sof-internal'>
            <SocialNetwork size="x-large" icon={faStackOverflow} title="StackOverflow" uri={`https://stackoverflow.com/users/4267015/naor-tedgi`} />

                <div>
                    <Reputation reputation={state.reputation} />
                    <Badges {...state.badge_counts} />
                </div>
            </div>
        </div>

    )
}




