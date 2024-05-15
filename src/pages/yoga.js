import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YogaComponent from '../components/YogaAPI';
import { Helmet } from 'react-helmet';

const TITLE = 'Yoga';

export default function Yoga() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div>
                <Header />
                <div className="yoga-search">
                    <YogaComponent />
                </div>
                <Footer />
            </div>
        </>
    );
}
