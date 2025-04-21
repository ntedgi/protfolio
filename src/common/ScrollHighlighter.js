import React, { useState, useEffect } from 'react';
import './ScrollHighlighter.scss';

const ScrollHighlighter = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if the section is in view
          if (scrollPosition >= elementTop - windowHeight * 0.3 && 
              scrollPosition <= elementBottom - windowHeight * 0.3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-highlighter">
      <ul className="scroll-highlighter-list">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`scroll-highlighter-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleItemClick(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollHighlighter; 