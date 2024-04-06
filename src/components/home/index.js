import React, { useEffect } from 'react';
import About from './about'
import "./app.scss"
import Projects from '../projects';
export default function Home() {

    useEffect(() => {
        document.title = "Naor Tedgi";
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "scroll";
        };
    }, []);


    return (
        <div className='container' >
            <div className="static-side">

                <About />
            </div>
            <div className="scrolling-side" >
                <Projects />
            </div>
        </div>
    )
}
