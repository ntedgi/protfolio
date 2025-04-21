import React from 'react';
import { GithubProject } from './github-project'
import './projects.scss'

function ProjectsList() {
  return (
    <div className='s-projects' >
      <GithubProject name="cld3-kotlin" />
      <GithubProject name="node-efficientnet" />
      <GithubProject name="kube-argocd-helm-workshop" />
      <GithubProject name="loss-context-with-async-local-storage" />
      <GithubProject name="monaorepo" />
      <GithubProject name="Crowlerito" />
      <GithubProject name="node" auther="nodejs" />
      <GithubProject name="infra-meetings" />
      <GithubProject name="nestjs-status-monitor"/>
      <GithubProject name="NLP-HashTag-Parser" />
      <GithubProject name="express-body-parser-error-handler" />
      <GithubProject name="albert-fine-tuning-squad-2.0" />
      <GithubProject name="mocha-parallel-tests" />
      <GithubProject name="data-stream-counter" />
      <GithubProject name="universal-sentence-encoder" />
      <GithubProject name="node-libinjection"/>
    </div>
  )
}

export default function ScrollingView() {
  return (
    <div>
    <span className='s-projects-container-header'>PROJECTS</span>
      <div className="s-projects-container"  >
        <ProjectsList />
      </div>
    </div>
  )
}
