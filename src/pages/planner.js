import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'Planner';

export default function Planner() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div>
                <Header />
                <div className="planner">

                </div>
                <Footer />
            </div>
        </>
    );
}
