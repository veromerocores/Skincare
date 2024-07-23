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
            <Header />
            <main>
            </main>

            <Footer />
        </>
    );
}
