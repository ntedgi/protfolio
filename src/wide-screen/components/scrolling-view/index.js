import React, { useState } from "react";
import YouTubeContainer from "./youtube";
import { GithubProject } from "./github-project";
import "./projects.scss";
import WhichDev from "../../../common/markdown";
import Resume from "./resume";
import Presentations from "./presentations";
import { FaDownload } from "react-icons/fa";

function GithubProjectPlaceHolder() {
  return <div className="github-placeholder">.....</div>;
}

function SectionHeader({ title, children }) {
  return (
    <div className="section-header">
      <div className="header-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ProjectsList() {
  const [isShadowed, setIsShadowed] = useState(false);
  const onElementMouseEnter = () => {
    setIsShadowed(true);
  };

  const onElementMouseLeave = () => {
    setIsShadowed(false);
  };

  const handleDownload = () => {
    window.open('/resume.md', '_blank');
  };

  return (
    <div className="projects">
      <section id="github-projects">
        <SectionHeader title="Open Source" />
        <GithubProject
          name="cld3-kotlin"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
          jitpack={"https://jitpack.io/#ntedgi/cld3-kotlin"}
        />
        <GithubProject
          name="node-efficientnet"
          npm={"https://www.npmjs.com/package/node-efficientnet"}
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="node"
          auther="nodejs"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="loss-context-with-async-local-storage"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="monaorepo"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="kube-argocd-helm-workshop"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="express-slow-down"
          auther="express-rate-limit"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="Crowlerito"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="nestjs-status-monitor"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="node-libinjection"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="infra-meetings"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="NLP-HashTag-Parser"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="express-body-parser-error-handler"
          npm={"https://www.npmjs.com/package/express-body-parser-error-handler"}
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="albert-fine-tuning-squad-2.0"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="mocha-parallel-tests"
          npm={"https://www.npmjs.com/package/mocha9-parallel-tests"}
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="data-stream-counter"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="universal-sentence-encoder"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
        <GithubProject
          name="SPI_slave_driver_implementation"
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
      </section>

      <section id="presentations">
        <SectionHeader title="Presentations" />
        <Presentations />
      </section>

      <section id="videos">
        <SectionHeader title="Videos" />
        <YouTubeContainer
          isShadowed={isShadowed}
          onElementMouseEnter={onElementMouseEnter}
          onElementMouseLeave={onElementMouseLeave}
        />
      </section>

      <section id="resume">
        <SectionHeader title="Resume">
          <button 
            className="download-button" 
            onClick={handleDownload}
            title="Download Resume"
          >
            <FaDownload />
          </button>
        </SectionHeader>
        <Resume />
      </section>

      <GithubProjectPlaceHolder
        isShadowed={isShadowed}
        onElementMouseEnter={onElementMouseEnter}
        onElementMouseLeave={onElementMouseLeave}
      />
    </div>
  );
}

export default function ScrollingView() {
  return (
    <div className="projects-container">
      <ProjectsList />
    </div>
  );
}
