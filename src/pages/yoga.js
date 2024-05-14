import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YogaComponent from '../components/YogaAPI';

export default function Yoga() {
    return (
        <>
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
