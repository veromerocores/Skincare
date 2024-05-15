import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RandomQuote from '../components/RandomQuote';
import { Helmet } from 'react-helmet';

const TITLE = 'Wisdom';

export default function Wisdom() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />
            <main>
                <div className="bubble">
                    <RandomQuote />
                </div>
                <div className="pictures">

                    <img className="wisfrog" src="../assets/images/Frog Wisdom.png" alt="the frog of wisdom, dressed like a hermit with a large wisdom stick in her hands" />
                    <div className="explain">
                        <p className="title">Frog Wisdom</p>
                        <p className="text"> The wise frog hops not to please your ears, but to nourish your soul with the truths you need.</p>
                        <p className="text">Embrace her sass with a splash of pond water ;)</p>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
