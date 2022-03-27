import React, { useEffect, useState } from 'react';
import './github-project.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"
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
    useEffect(
        () => {
            fetch(`https://api.github.com/repos/ntedgi/${props.name}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    debugger
                    const { stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url } = data
                    setState({ stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url })
                })
        }, [])

    return (
        <div>
            <div className='card-header'>
                <div className='project-icon'>
                    <div className='btn' onClick={() => { window.open(state.html_url, "_blank") }}>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    {props.npm && <div className='btn' onClick={() => { window.open(props.npm, "_blank") }}>
                        <FontAwesomeIcon icon={faNpm} />
                    </div>}
                </div>
                <div className='stats'>
                    <Wrap count={state.forks_count} icon={faCodeBranch} />
                    <div className='star'>
                        <Wrap count={state.stargazers_count} icon={faStar} />
                    </div>
                </div>
            </div>
            <div className='project-name' onClick={() => { window.open(state.html_url, "_blank") }}>
                {state.full_name && state.full_name.length > 0 && state.full_name.split('/')[1]}
            </div>
            <div className='project-description'>
                {state.description}
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
            {Object.keys(percentage).map(key => <div className='language' key={key}>{`${key}`}</div>)}
        </div>
    )
}

function Languages(props) {
    const [state, setState] = useState({})
    useEffect(
        () => {
            fetch(`https://api.github.com/repos/ntedgi/${props.name}/languages`)
                .then(res => res.json())
                .then(data => {
                    setState(data)
                })
        }, [])

    if (Object.keys(state).length > 0) {
        return (
            <LanguageRepresentation languages={state} />
        )
    }
    return <div>No Languages</div>

}

export function GithubProject(props) {
    return (
        <div className='project-container'>
            <Name name={props.name} npm={props.npm} />
            <Languages name={props.name} />
        </div>

    )
}
