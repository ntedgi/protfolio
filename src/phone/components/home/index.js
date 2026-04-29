import React from 'react';
import About from './about'
import "./app.scss"
import ScrollingView from '../scrolling-view';
import { AIBackground } from '../../../common/ai-fx';
export default function Phome() {
    return (
        <div className='s-container'  >
            <AIBackground />
            <div className="s-static-side"  >
                <About />
            </div>
            <div className="s-scrolling-side" >
                <ScrollingView  />
            </div>
        </div>
    )
}
