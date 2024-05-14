import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';
import Footer from '../components/footer';

export default function FroGa() {
    return (
        <>
            <div className="body-yoga">
                <Header />
                <div className='green-div'>
                    <div className='froga-text'>
                        <p>This is a space to relax, so if you don't want to search and scroll through multiple yoga poses just come here! Our friend The Frog will lead you and show you just enough poses for a chill workout</p>
                    </div>
                    <div className="content">
                        <Grid />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}