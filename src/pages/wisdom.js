import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RandomQuote from '../components/RandomQuote';

export default function Wisdom(){
    return(
        <>
            <Header />
            <div>
                <form class="formBlock">
                    <input
                        type="text"
                        placeholder="Search for quote by author"
                        className="author-search"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
                <div class="pictures">
                    <img class="wisfrog" src="../assets/images/Frog Wisdom.jpg" alt="This is the frog of wisdom, dressed like a hermit with a large wisdom stick in her hands"/>
                    <div class="bubble">
                        <RandomQuote />
                        {console.log(RandomQuote)}
                    </div>
                    <div class="explain">   
                        <p class="title">Frog Wisdom</p>
                        <p class="text"> The wise frog hops not to please your ears, but to nourish your soul with the truths you need.</p>
                        <p class="text">Embrace her sass with a splash of pond water ;)</p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
