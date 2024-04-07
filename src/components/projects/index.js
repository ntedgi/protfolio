import React, { useState,useRef,useEffect } from 'react';

import { GithubProject } from './github-project'
import './projects.scss'


function GithubProjectPlaceHolder(){
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
            <GithubProjectPlaceHolder/>
        </div>
    )
}
export default function Projects() {
    const listRef = useRef(null);

    useEffect(() => {
      // Add event listener to the document
      const handleKeyPress = (event) => {
        const { keyCode } = event;
        const list = listRef.current;
  
        if (!list) return;
  
        switch (keyCode) {
          case 38: // Up arrow
            list.scrollTop -= 50; // Adjust scroll up
            break;
          case 40: // Down arrow
            list.scrollTop += 50; // Adjust scroll down
            break;
          default:
            break;
        }
      };
  
      document.addEventListener('keydown', handleKeyPress);
  
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
  
    return (
        <div className="projects-container" ref={listRef} >
            <ProjectsList/>
        </div>
    )
}
