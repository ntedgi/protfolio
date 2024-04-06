import React, { useState } from 'react';

import { GithubProject } from './github-project'
import './projects.scss'

function ProjectsList() {
    const [isShadowed, setIsShadowed] = useState(false);
    const onElementMouseEnter = () => {
        setIsShadowed(true);
    };

    const onElementMouseLeave = () => {
        setIsShadowed(false);
    };

    return (
        <div className='projects' >
            <GithubProject name="node-efficientnet" npm={"https://www.npmjs.com/package/node-efficientnet"} isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="infra-meetings" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="kube-argocd-helm-workshop" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="cld3-kotlin" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="NLP-HashTag-Parser" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="express-body-parser-error-handler" npm={"https://www.npmjs.com/package/express-body-parser-error-handler"} isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="albert-fine-tuning-squad-2.0" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="mocha-parallel-tests" npm={"https://www.npmjs.com/package/mocha9-parallel-tests"} isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="data-stream-counter" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
            <GithubProject name="universal-sentence-encoder" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
        </div>
    )
}
export default function Projects() {
    return (
        <div className="projects-container" >
            <ProjectsList />
        </div>
    )
}
