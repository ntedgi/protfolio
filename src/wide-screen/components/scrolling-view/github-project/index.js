import React, { useEffect, useState } from 'react';
import './github-project.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"
import {
    setItemInCache,
    getItemFromCache,
    has,
    validateData
} from '../cache'

function Wrap(props) {
    const { count, icon } = props;
    return (
        < div className='wrapper' >
            <FontAwesomeIcon icon={icon} />
            <div className='count'>{count}</div>
        </div >)
}


function Name(props) {
    const [state, setState] = useState({})
    const genKey = (item) => `PROG_${item}`

    useEffect(
        () => {
            const { name, auther } = props;
            const key = genKey(name)
            if (has(key)) setState(getItemFromCache(key))
            else {
                fetch(`https://api.github.com/repos/${auther}/${name}`)
                    .then(res => res.json())
                    .then(data => {
                        data = validateData(key, data)
                        const { stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url } = data
                        setState({ stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url })
                        setItemInCache(key, { stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url })
                    })
            }
        }, [props])
    return (
        <div>
            <div className='project-line'>
                <div className='project-name' onClick={() => { window.open(state.html_url, "_blank") }}>
                    {state.full_name && state.full_name.length > 0 && state.full_name.split('/')[1]}
                </div>
                <div className='project-icon'>
                    <div className='btn' onClick={() => { window.open(state.html_url, "_blank") }}>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    {props.npm && <div className='btn npm' onClick={() => { window.open(props.npm, "_blank") }}>
                        <FontAwesomeIcon icon={faNpm} />
                    </div>}
                </div>
            </div>
            <div className='project-description'>
                {state.description}
            </div>
            <div className='card-header'>
                <div className='stats'>
                    <Wrap count={state.forks_count} icon={faCodeBranch} />
                    <div className='star'>
                        <Wrap count={state.stargazers_count} icon={faStar} />
                    </div>
                </div>


            </div>
        </div>)

}

function LanguageRepresentation(props) {
    const { languages } = props
    const total = Object.values(languages).reduce((a, b) => a + b, 0);
    const percentage = {};
    Object.keys(languages).forEach(key => {
        percentage[key] = languages[key] / total * 100;
    })
    return (
        <div className='languages'>
            {Object.keys(percentage).map(key => <div className='language' key={key}>{`${key.toLocaleUpperCase()}`}</div>)}
        </div>
    )
}

function Languages(props) {
    const [state, setState] = useState({})
    const genKey = (item) => `LANG_${item}`
    const { name, auther } = props;
    useEffect(
        () => {
            const key = genKey(name)
            if (has(key)) setState(getItemFromCache(key))
            else {
                fetch(`https://api.github.com/repos/${auther}/${name}/languages`)
                    .then(res => res.json())
                    .then(data => {
                        data = validateData(key, data)
                        setState(data)
                        setItemInCache(key, data)
                    })
            }
        }, [name, auther])

    if (Object.keys(state).length > 0) {
        return (
            <LanguageRepresentation languages={state} />
        )
    }
    return <div>No Languages</div>
}

export function GithubProject(props) {
    const [isHovered, setIsHovered] = useState(false);
    const { isShadowed, onElementMouseEnter, onElementMouseLeave } = props;
    let shouldShadow = isHovered ? '' : isShadowed
    const owner = props.auther || 'ntedgi'
    const handleMouseEnter = () => {
        setIsHovered(true);
        onElementMouseEnter()
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onElementMouseLeave()
    };

    return (
        <div className={`gh-project-container ${isHovered ? 'hovered' : ''} ${shouldShadow ? 'shedowed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                window.open(`https://github.com/${owner}/${props.name}`, "_blank")
            }}
        >
            <Languages name={props.name} auther={owner} />
            <Name name={props.name} npm={props.npm} auther={owner} />
        </div>

    )
}
