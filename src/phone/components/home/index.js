import React, { useEffect, useState } from 'react';
import About from './about'
import "./app.scss"
import ScrollingView from '../scrolling-view';
export default function Phome() {

    const [listRef, setListRef] = useState(false);
    const [delta, setDelta] = useState(0)
    const [deltaCounter, setDeltaCounter] = useState(0)
    const [timer, setTimer] = useState(null)
    useEffect(() => {
        document.title = "Naor Tedgi";
    }, []);
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "scroll";
        };
    }, []);


    const handleKeyPress = (event) => {
        const { deltaY } = event;
        const list = listRef.current;
        if (!list) return;
        if (deltaY < 0)
            setDelta(delta - 50); // Adjust scroll up
        else
            setDelta(delta + 50); // Adjust scroll down
        setDeltaCounter(deltaCounter + 1)
        if (deltaCounter < 20) {
            clearTimeout(timer)
            let newTimer = setTimeout(() => {
                list.scrollTop = delta
                setDeltaCounter(0)
            }, 50)
            setTimer(newTimer)
        }

    }


    return (
        <div className='container'  >
            <div className="static-side" onWheel={handleKeyPress} >
                <About />
            </div>
            <div className="scrolling-side" >
                <ScrollingView setListRef={setListRef} />
            </div>
        </div>
    )
}
