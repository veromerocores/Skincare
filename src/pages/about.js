import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'About';

export default function About() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main>
                <Header />
                <div className='aboutcontainer'>
                    <div className='try'>
                        <h2>Who are we?</h2>
                        <p>Good question, I do not know yet</p>
                    </div>
                    <div class="aboutline"></div>
                    <img src='../assets/images/texture.jpg' alt='just trying for now'/>
                </div>
                <div className='aboutcontainer'>
                    <img src='../assets/images/texture.jpg' alt='just trying for now'/> 
                    <div class="aboutline"></div>
                    <div className='try'>
                        <h2>What do we do?</h2>
                        <p>Good question, I do not know yet</p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
