import React from 'react';
import './home.css';
import Header from '../components/header';
import Footer from '../components/footer';


export default function Home(){
    return(
        <>
            <Header />
            <div>
                <div class="texto">
                    <p>Immerse yourself in the transformative world of frog-inspired yoga, strongly 
                associated with the water element. Just as the frog effortlessly navigates water, 
                our practice connects us with the world of emotions and feminine energies. 
                Experience the cleansing power of each pose, whether it's physical, emotional, 
                or spiritual, as you leap towards wellness with Froga. Join our inclusive 
                community and let the symbolism of the frog guide you on a journey of renewal 
                and inner peace.
                    </p>
                    <div class="action" onclick="window.location.href = 'homepage.html';">
                        <p>Let's yoga!</p>
                    </div>
                </div>

                <img src="../images/greenbit.png" alt="green wavy element, looks like a big mountain at the left and a smaller one at the right" class="greenbit"/>
            </div>
            <Footer />
        </>
    );
}



