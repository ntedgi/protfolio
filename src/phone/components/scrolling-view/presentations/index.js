import React from 'react';
import './presentations.scss';

const presentations = [
  {
    title: "Case Study: Node.js on Kubernetes Transition",
    date: "May 5, 2024",
    description: "A real-world case study on transitioning a Node.js application to Kubernetes, focusing on benchmarking and performance.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Node%20on%20Kubernetes",
    event: "Unity Tech Talks",
    tags: ["Node.js", "Kubernetes", "Case Study", "Performance"]
  },
  {
    title: "MySQL Aurora Write Forwarding Insights",
    date: "August 8, 2024",
    description: "An in-depth analysis of MySQL Aurora's write-forwarding capabilities and benchmarking insights.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main//Write%20Forwarding%20Benchmarking%20Insights",
    event: "Unity Backend Guild",
    tags: ["MySQL", "Aurora", "Database", "Performance"]
  },
  {
    title: "Effortless Efficiency: GitHub Codespaces",
    date: "February 3, 2025",
    description: "Explore how GitHub Codespaces and templates can streamline development while embracing the YAGNI principle.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Effortless%20Efficiency",
    event: "Unity Tech Talks",
    tags: ["GitHub", "Codespaces", "YAGNI", "Productivity"]
  },
  {
    title: "Introduction to GitHub Actions",
    date: "January 25, 2021",
    description: "A beginner-friendly introduction to GitHub Actions, showcasing how to automate workflows directly from your repository.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Github%20Actions",
    event: "Unity Tech Talks",
    tags: ["GitHub", "CI/CD", "Automation"]
  },
  {
    title: "Node.js: What's New in Version 14",
    date: "March 16, 2021",
    description: "Discover the latest features and updates in Node.js version 14, including performance improvements and new APIs.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Node%2014%20new%20features",
    event: "Unity Backend Guild",
    tags: ["Node.js", "JavaScript", "Performance"]
  },
  {
    title: "JavaScript Compilation and V8 Optimizations",
    date: "August 31, 2021",
    description: "Explore the inner workings of the JIT compiler and V8 optimizations to better understand JavaScript execution.",
    link: "https://github.com/ntedgi/node-v8-optimization",
    event: "Unity Tech Talks",
    tags: ["JavaScript", "V8", "Performance", "JIT"]
  },
  {
    title: "Async Controllers and Improving Require Performance",
    date: "December 6, 2021",
    description: "Learn how to optimize your Node.js application with async controllers and techniques to improve require performance.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Async%20Controller%20and%20Slow%20Require",
    event: "Unity Backend Guild",
    tags: ["Node.js", "Async", "Performance", "Optimization"]
  },
  {
    title: "Streams and Async Generators",
    date: "May 8, 2022",
    description: "An overview of Node.js streams and async generators, highlighting their practical applications in modern development.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Streams%20%26%20Async%20Genrators",
    event: "Unity Tech Talks",
    tags: ["Node.js", "Streams", "Async", "Generators"]
  },
  {
    title: "Seed Stream Algorithm for CSV Downloads",
    date: "June 11, 2022",
    description: "Dive into the Seed Stream algorithm, a technique for efficient CSV downloads.",
    link: "https://github.com/ntedgi/Demand-TechTalks/blob/main/Seed%20Stream.pptx",
    event: "Unity Backend Guild",
    tags: ["Algorithms", "CSV", "Streaming", "Performance"]
  },
  {
    title: "Node.js Version Migration: 14.15 to 18.4",
    date: "August 14, 2022",
    description: "A guide to migrating from Node.js 14.15 to 18.4, covering breaking changes and compatibility tips.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/from%20Node14%20to%2018_4",
    event: "Unity Tech Talks",
    tags: ["Node.js", "Migration", "JavaScript", "Compatibility"]
  },
  {
    title: "Understanding HTTP Headers",
    date: "September 18, 2022",
    description: "A comprehensive explanation of HTTP headers, their structure, and usage in web development.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/from%20Node14%20to%2018_4",
    event: "Unity Backend Guild",
    tags: ["HTTP", "Web", "Networking", "Security"]
  },
  {
    title: "Memory Leaks in Kafka Producers and GC Optimization",
    date: "December 11, 2022",
    description: "Identify and resolve memory leaks in Kafka producers while optimizing garbage collection in Node.js applications.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/GC%26memLeaks",
    event: "Unity Tech Talks",
    tags: ["Kafka", "Memory Leaks", "GC", "Node.js", "Performance"]
  },
  {
    title: "Deep Dive into node_modules",
    date: "January 8, 2023",
    description: "Unpack the mysteries of node_modules, exploring its structure, dependencies, and optimization strategies.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/node-modules",
    event: "Unity Backend Guild",
    tags: ["Node.js", "Dependencies", "npm", "Performance"]
  },
  {
    title: "iAds Platform Group - Telepresence Overview",
    date: "August 30, 2023",
    description: "An overview of the iAds Platform Group's telepresence system, its capabilities, and integration within the platform.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/iAds%20Platform%20Telepresence",
    event: "Unity Tech Talks",
    tags: ["iAds", "Telepresence", "Platform", "Integration"]
  },
  {
    title: "Move to Kubernetes - UAT Environments",
    date: "March 31, 2024",
    description: "A discussion on moving to Kubernetes and setting up User Acceptance Testing (UAT) environments efficiently.",
    link: "https://github.com/ntedgi/Demand-TechTalks/tree/main/Move%20to%20Kubernetes%20UAT",
    event: "Unity Backend Guild",
    tags: ["Kubernetes", "UAT", "DevOps", "Testing"]
  }
];

const PresentationCard = ({ presentation }) => {
  const { event = "Unity Tech Talk" } = presentation;
  
  return (
    <a href={presentation.link} target="_blank" rel="noopener noreferrer" className="presentation-card">
      <div className="event-details">
        <span className="event-name">{event}</span>
        <span className="event-date">{presentation.date}</span>
      </div>
      
      <h3 className="presentation-title">{presentation.title}</h3>
      
      <p className="presentation-description">{presentation.description}</p>

      <div className="presentation-tags">
        {presentation.tags.map((tag, index) => (
          <span key={index} className="presentation-tag">{tag}</span>
        ))}
      </div>
    </a>
  );
};

const Presentations = () => {
  return (
    <div className="presentations-container">
      <div className="presentations-grid">
        {presentations.map((presentation, index) => (
          <PresentationCard key={index} presentation={presentation} />
        ))}
      </div>
    </div>
  );
};

export default Presentations; 