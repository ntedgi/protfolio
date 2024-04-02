import React from 'react'
import Header from '../header'
import Footer from '../footer'
import "./layout.scss"
export default function Layout(props) {

    return (
        <div>
            <Header />
            <div className='content-container' >
            {props.children}
            </div>
            <Footer />
        </div>
    )
}
