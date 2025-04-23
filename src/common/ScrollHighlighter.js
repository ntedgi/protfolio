import React, { useState, useEffect } from 'react';
import './ScrollHighlighter.scss';

const ScrollHighlighter = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [clickedSection, setClickedSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-30% 0px -30% 0px', // Trigger when section is 30% in view
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Simulate click animation when scrolling to a section
          setClickedSection(entry.target.id);
          setTimeout(() => setClickedSection(null), 300); // Remove animation after 300ms
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setClickedSection(id);
      setTimeout(() => setClickedSection(null), 300); // Remove animation after 300ms
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-highlighter">
      <ul className="scroll-highlighter-list">
        {sections.map((section, index) => (
          <li
            key={section.id}
            className={`scroll-highlighter-item ${activeSection === section.id ? 'active' : ''} ${clickedSection === section.id ? 'clicked' : ''}`}
            onClick={() => handleItemClick(section.id)}
          >
            <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="section-line"></span>
            <span className="section-title">{section.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollHighlighter; 