import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'Search';

export default function Search() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />
            <main>
                <div>
                 
                </div>

                <Footer />
            </main>
        </>
    );
}
