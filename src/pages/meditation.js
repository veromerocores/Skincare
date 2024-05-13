import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About(){
    return(
        <>
            <Header />
            <div>
                <div class="frog">
                    <div class="start">
                        <p>Start</p>
                    </div>
                    <img src="../assets/images/medifroga.png" alt="A frog's head that will lead the meditation"/>
                    <div class="count">
                        <p>7</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
