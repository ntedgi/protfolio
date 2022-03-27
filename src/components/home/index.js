import React, { useEffect } from 'react';
import Layout from '../core/layout'
import About from './about'
import Description from './description'
export default function Home() {

    useEffect(() => {
        document.title = "Naor Tedgi : Home Page";
    }, ["Home Page"]);

    return (
        <div>
            <Layout>
                <About />
                <Description />
            </Layout>
        </div>
    )
}
