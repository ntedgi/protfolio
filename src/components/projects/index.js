import React, { useEffect } from 'react';
import Layout from '../core/layout'
import { GithubProject } from './github-project'
import { OnlineDemo } from './online-demo'
import './projects.scss'

function ProjectsHeader() {
    return (
        <div className='project-header'>
            <div className='project-header-title'>
                <span>Projects</span>
            </div>
            <div className='info'>
                Open Source Project and Previously Project from Compenies i worked with.
            </div>
        </div>
    )
}

function ProjectsList() {
    return (
        <div className='projects'>
            <GithubProject name="node-efficientnet" npm={"https://www.npmjs.com/package/node-efficientnet"} />
            <GithubProject name="cld3-kotlin" />
            <GithubProject name="NLP-HashTag-Parser" />
            <GithubProject name="express-body-parser-error-handler" npm={"https://www.npmjs.com/package/express-body-parser-error-handler"} />
            <GithubProject name="albert-fine-tuning-squad-2.0" />
            <GithubProject name="mocha-parallel-tests" npm={"https://www.npmjs.com/package/mocha9-parallel-tests"} />
            <GithubProject name="data-stream-counter" />
            <GithubProject name="universal-sentence-encoder" />
        </div>
    )
}
export default function Projects() {
    useEffect(() => {
        document.title = "Naor Tedgi : Projects";
    }, ["Projects"]);
    return (
        <div className="projects-container">
            <Layout>
                <ProjectsHeader />
                <ProjectsList />
            </Layout>
        </div>
    )
}
