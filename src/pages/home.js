import React, { useRef } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'Homepage';

export default function Home() {
    // Create a ref for the section to scroll to
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
                <div className='homecontainer' ref={targetSectionRef}>
                    <div className='homecards'>
                        <div className='image-container'>
                            <img src="../assets/images/skin-plan.jpg" className="fitcards" alt="skincare product containers in different colours and shapes" />
                            <div className='ovalhome'>
                                <a href="/planner" className="links">Plan and manage your routine</a>
                            </div>
                        </div>
                    </div>
                    <div className='homecards'>
                        <div className='image-container'>
                            <img src="../assets/images/skin-types.jpeg" className="fitcards" alt="faces of four different women" />
                            <div className='ovalhome'>
                                <a href="/questionnaire" className="links">Take our quiz to know your needs</a>
                            </div>
                        </div>
                    </div>
                    <div className='homecards'>
                        <div className='image-container'>
                            <img src="../assets/images/ingredients-skin.jpg" className="fitcards" alt="various ingredients in Petri dishes" />
                            <div className='ovalhome'>
                                <a href="/search" className="links">Search products by ingredient</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer className="footerHome" />
        </>
    );
}
