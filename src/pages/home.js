import React, { useRef } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'Homepage';

export default function Home() {
    // Create a ref for the section you want to scroll to
    const targetSectionRef = useRef(null);

    // Function to scroll to the target section
    const scrollToSection = () => {
        if (targetSectionRef.current) {
            targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main className='homebackground'>
                <div className='slogan'>
                    <Header />
                    <h1>MANAGE YOUR SKINCARE</h1>
                    <img 
                        src="../assets/images/flechasblancas.gif" 
                        className="gifhome" 
                        alt="white arrows pointing downwards" 
                        onClick={scrollToSection}
                    />
                    <img 
                        src="../assets/images/skincare-portada.jpg" 
                        className='homeimage' 
                        alt="various skincare white containers in different sizes" 
                    />
                </div>
                <div className='homecontainer' ref={targetSectionRef}> {}
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
