import React, { useState, useRef, useEffect } from 'react';
import SOFContainer from './sof'
import YouTubeContainer from './youtube'
import { GithubProject } from './github-project'
import './projects.scss'

function GithubProjectPlaceHolder() {
  return <div className='github-placeholder'>Design By....</div>
}
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
      <GithubProject name="cld3-kotlin" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="node-efficientnet" npm={"https://www.npmjs.com/package/node-efficientnet"} isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="node" auther="nodejs" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <div className='flex'>
        <SOFContainer isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
        <YouTubeContainer isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      </div>
      <GithubProject name="express-slow-down" auther="express-rate-limit" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="kube-argocd-helm-workshop" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="Crowlerito" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="nestjs-status-monitor" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
     
      <GithubProject name="infra-meetings" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="NLP-HashTag-Parser" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="express-body-parser-error-handler" npm={"https://www.npmjs.com/package/express-body-parser-error-handler"} isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="albert-fine-tuning-squad-2.0" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="mocha-parallel-tests" npm={"https://www.npmjs.com/package/mocha9-parallel-tests"} isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="data-stream-counter" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProject name="universal-sentence-encoder" isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
      <GithubProjectPlaceHolder isShadowed={isShadowed} onElementMouseEnter={onElementMouseEnter} onElementMouseLeave={onElementMouseLeave} />
    </div>
  )
}

export default function ScrollingView(props) {
  const { setListRef } = props;
  const listRef = useRef(null);
  useEffect(() => {

    const handleKeyPress = (event) => {
      const { keyCode } = event;
      const list = listRef.current;
      setListRef(listRef)

      if (!list) return;

      switch (keyCode) {
        case 38:
          list.scrollTop -= 50;
          break;
        case 40:
          list.scrollTop += 50;
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setListRef]);

  return (
    <div className="projects-container" ref={listRef} >
      <ProjectsList />
    </div>
  )
}
