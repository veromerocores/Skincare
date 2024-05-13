import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';
import Footer from '../components/footer';

export default function About() {
    return (
        <>
            <div className="body-yoga">
                <Header />
                <div className="content">
                    <Grid />
                </div>
                <Footer />
            </div>
        </>
    );
}
