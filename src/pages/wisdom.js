import React from 'react';
import './wisdom.css';
import Header from '../components/header';

export default function About(){
    return(
        <>
            <Header />
            <div>
                <header class="header">
                    <p onclick="window.location.href = 'index.html';">FroGa</p>
                    <label class="switch">
                        <input type="checkbox" id="toggleSwitch"/>
                        <span class="slider round"></span>
                    </label>
                    {/* <!--Burger menu component--> */}
                </header>

                <div class="pictures">
                    <img class="wisfrog" src="../assets/images/Frog Wisdom.jpg" alt="This is the frog of wisdom, dressed like a hermit with a large wisdom stick in her hands"/>
                    <div class="bocadillo"></div>
                    <img class="greenbit" src="../assets/images/wisgreenbit.png" alt="green wavy element, looks like a big mountain at the left and a smaller one at the right"/>
                    <div class="explica">   
                        <p class="title">Frog Wisdom</p>
                        <p class="texto"> The wise frog hops not to please your ears, but to nourish your soul with the truths you need.</p>
                        <p class="texto">Embrace her sass with a splash of pond water ;)</p>
                    </div>
                </div>

                <footer>
                    <div class="line"></div>
                    <div class="footcontent">
                        <div class="footlists">
                            <div>
                                <ul class="lista" onclick="window.location.href = 'about.html';">About</ul>
                                <ul class="lista" onclick="window.location.href = 'about.html';">Get in touch</ul>
                                <ul class="lista" onclick="window.location.href = 'about.html';">Newsletter</ul>
                            </div>
                            <div>
                                <ul class="lista" onclick="window.location.href = 'homepage.html';">Yoga poses</ul>
                                <ul class="lista" onclick="window.location.href = 'wisdom.html';">Wisdom</ul>
                                <ul class="lista" onclick="window.location.href = 'meditation.html';">Meditation(beta)</ul>
                            </div>
                            <div>
                                <ul class="lista" onclick="window.location.href = 'homepage.html';">Search</ul>
                                <ul class="lista" onclick="window.location.href = 'about.html';">Careers</ul>
                                <ul class="lista" onclick="window.location.href = 'index.html';">Get started</ul>
                            </div>
                        </div>
                        <p>FroGa</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
