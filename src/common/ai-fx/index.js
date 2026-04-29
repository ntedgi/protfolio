import React, { useEffect, useState } from 'react';
import './ai-fx.scss';

export function AIBackground() {
    return (
        <div className="ai-bg" aria-hidden="true">
            <div className="ai-bg-grid" />
            <div className="ai-bg-aurora" />
            <div className="ai-bg-particles">
                {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i} className={`p p-${i}`} />
                ))}
            </div>
            <div className="ai-bg-scanline" />
        </div>
    );
}

export function AIStatusBadge({ label = 'AI Agent · Online' }) {
    return (
        <span className="ai-status-badge" title="Available for agentic collaborations">
            <span className="dot" />
            {label}
        </span>
    );
}

const DEFAULT_TAGS = [
    { label: 'Backend', cls: 'c-backend' },
    { label: 'Data', cls: 'c-data' },
    { label: 'Cybersecurity', cls: 'c-cyber' },
    { label: 'AI / LLMs', cls: 'c-ai' },
    { label: 'Agentic Systems', cls: 'c-agent' },
    { label: 'Distributed Systems', cls: 'c-backend' },
];

export function AIChips({ tags = DEFAULT_TAGS }) {
    return (
        <div className="ai-chip-row" role="list">
            {tags.map((t) => (
                <span key={t.label} role="listitem" className={`ai-chip ${t.cls || ''}`}>
                    {t.label}
                </span>
            ))}
        </div>
    );
}

export function AICaret() {
    return <span className="ai-caret" aria-hidden="true" />;
}

/**
 * Cycles through a list of phrases with a typewriter animation.
 * Used as a tagline below the job title to give an "agentic" feel.
 */
export function AITypewriter({
    phrases = [
        'Designing distributed backends.',
        'Cleaning up vibe code.',
        'Shipping data platforms.',
        'Hardening cybersecurity at scale.',
        'Wiring up agentic systems.',
    ],
    typingSpeed = 55,
    deletingSpeed = 28,
    pause = 1400,
}) {
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [text, setText] = useState('');
    const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

    useEffect(() => {
        const current = phrases[phraseIdx % phrases.length];
        let timeout;

        if (phase === 'typing') {
            if (text.length < current.length) {
                timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
            } else {
                timeout = setTimeout(() => setPhase('deleting'), pause);
            }
        } else if (phase === 'deleting') {
            if (text.length > 0) {
                timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
            } else {
                setPhraseIdx((i) => i + 1);
                setPhase('typing');
            }
        }

        return () => clearTimeout(timeout);
    }, [text, phase, phraseIdx, phrases, typingSpeed, deletingSpeed, pause]);

    return (
        <div className="ai-typewriter" aria-live="polite">
            <span className="ai-typewriter-prompt">$</span>
            <span className="ai-typewriter-text">{text}</span>
            <span className="ai-caret ai-caret-inline" aria-hidden="true" />
        </div>
    );
}
