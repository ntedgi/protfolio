import React, { useEffect, useRef } from 'react';
import About from './about'
import "./app.scss"
import Projects from '../projects';
export default function Home(props) {

    useEffect(() => {
        document.title = "Naor Tedgi";
    }, []);

    useEffect(() => {
        document.body.style.overflow = "auto";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);

    const componentRef = useRef(null);
    useEffect(() => {
        function handleScroll(event) {
            const component = componentRef.current;

            if (component) {
                const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
                const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
                component.scrollTop = scrollPercentage * (component.scrollHeight - component.clientHeight);
            }

            else {
                event.preventDefoult()
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='container' >
            <div className="static-side" ref={componentRef} >
                <About />
            </div>
            <div className="scrolling-side" ref={componentRef} >
                <Projects />
            </div>
        </div>
    )
}
