import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'Homepage';


export default function Home() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main className='homebackground'>
                <div className='slogan'>
                    <Header />
                    <h1>MANAGE YOUR SKINCARE</h1>
                    <img src="../assets/images/flechasblancas.gif" className="gifhome" alt=""/>
                    <img src="../assets/images/skincare-portada.jpg" className='homeimage' alt="various skincare white containers in different sizes" />
                </div>
                <div className='homecontainer'>
                    <div className='homecards'>
                        <p>Plan and manage your routine</p>
                    </div>
                    <div className='homecards'>
                        <p>Take the questionnaire to know what you need</p>
                    </div>
                    <div className='homecards'>
                        <p>Search products by ingredient</p>
                    </div>
                </div> 
            </main>     
            <Footer class="footerHome" />
        </>
    );
}



