import React, { useEffect, useState } from 'react';
import './github-project.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"
import {
    setItemInCache,
    getItemFromCache,
    has
} from '../cache'

function Wrap(props) {
    const { count, icon } = props;
    return (
        < div className='s-wrapper' >
            <FontAwesomeIcon icon={icon} />
            <div className='s-count'>{count}</div>
        </div >)
}


function Name(props) {
    const [state, setState] = useState({})
    const genKey = (item) => `PROG_${item}`

    useEffect(
        () => {
            const { setClickUrl } = props;
            const { name, auther } = props;
            let owner = auther || 'ntedgi'
            const key = genKey(name)
            if (has(key)) setState(getItemFromCache(key))
            else {
                fetch(`https://api.github.com/repos/${owner}/${name}`)
                    .then(res => res.json())
                    .then(data => {
                        const { stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url } = data
                        setState({ stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url })
                        setItemInCache(key, { stargazers_count, watchers_count, forks_count, description, full_name, license, topics, html_url })
                        setClickUrl(html_url)
                    })
            }
        }, [props])
    return (
        <div>
            <div className='s-project-line'>
                <div className='s-project-name' onClick={() => { window.open(state.html_url, "_blank") }}>
                    {state.full_name && state.full_name.length > 0 && state.full_name.split('/')[1]}
                </div>

            </div>
            <div className='s-project-description'>
                {state.description}
            </div>
            <div className='s-card-header'>
                <div className='s-stats'>
                    <Wrap count={state.forks_count} icon={faCodeBranch} />
                    <div className='s-star'>
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
        <div className='s-languages'>
            {Object.keys(percentage).slice(0, 5).map(key => <div className='s-language' key={key}>{`${key.toLocaleUpperCase()}`}</div>)}
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
                        setState(data)
                        setItemInCache(key, data)
                    })
            }
        }, [auther,name])

    if (Object.keys(state).length > 0) {
        return (
            <LanguageRepresentation languages={state} />
        )
    }
    return <div>No Languages</div>
}

export function GithubProject(props) {
    const owner = props.auther || 'ntedgi'

    return (
        <div className={`s-gh-project-container`}
            onClick={() => {
                window.open(`https://github.com/${owner}/${props.name}`, "_blank")
            }}
        >
            <Languages name={props.name} />
            <Name name={props.name} npm={props.npm} auther={props.auther} />
        </div>

    )
}
