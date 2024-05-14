import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default function Home(){
    return(
        <>
            <Header />
            <div  class="background"> 
                <img src="../assets/images/indexpic.jpg" alt=''class="a woman doing a seated position yoga in green workout clothes"/>
                <div class="top">
                    <div class="texto">
                        <p>Immerse yourself in the transformative world of frog-inspired yoga, strongly 
                    associated with the water element. Just as the frog effortlessly navigates water, 
                    our practice connects us with the world of emotions and feminine energies. 
                    Experience the cleansing power of each pose, whether it's physical, emotional, 
                    or spiritual, as you leap towards wellness with FroGa. Join our inclusive 
                    community and let the symbolism of the frog guide you on a journey of renewal 
                    and inner peace.
                        </p>
                        <p>Choose FroGa for a relaxed and fun yoga practice, and the Yoga Poses pages to search for a more informative workout.</p>
                        <div className="action" role='button' tabIndex={0}><a href="/yoga">Let's yoga!</a></div>
                    </div>
                </div>
            </div>
            <Footer class="footerHome"/>
        </>
    );
}



