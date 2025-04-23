import React from 'react';
import ReactMarkdown from 'react-markdown';
import './resume.scss';

export default function Resume() {
    const [markdown, setMarkdown] = React.useState('');

    React.useEffect(() => {
        fetch('/resume.md')
            .then(response => response.text())
            .then(text => setMarkdown(text));
    }, []);

    return (
        <div className="resume-container">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
} 