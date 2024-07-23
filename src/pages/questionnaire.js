import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';


const TITLE = 'Questionnaire';

export default function Questionnaire() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="Questionnaire">
                <Header />
                <div>
                    
                </div>
                <Footer />
            </div>
        </>
    );
}