import React from 'react';
import './about.css';
import Header from '../components/header';
import Footer from '../components/footer';

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

                {/* <!--About-->
                <!--Form-->*/}  
            </div>
            <Footer />
        </>
    );
}
