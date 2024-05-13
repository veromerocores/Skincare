import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
        <>
            <Header />
            <div>
                <div class="about-page">
                    <img src="../assets/images/coupleyoga.avif" alt='' class="backImage" />
                    <div class="about1">
                        <h1>About Us</h1>
                        <p>Welcome to FroGa, where we blend the joy of yoga with the playful spirit of frogs! 🐸</p>

                        <p>At FroGa, we're all about making yoga accessible, enjoyable, and beneficial for everyone. Our website combines traditional poses with a touch of whimsy, inviting you to leap into wellness with a smile on your face.</p>

                        <p>FroGa is more than just physical movement; it's also about feeling like you belong to a movement of people that want to improve their physical and mental health. Join us on the lily pad of self-discovery, where every ribbit is a reminder to embrace the present moment with grace and intention. Check the frog's wisdom for inspiring words to uplift your spirits and nourish your soul.</p>
                        <p>Namaste 🌿🐸</p>
                    </div>
                    <div class="about2">
                        <div class="about-form">
                            <h1>Want to be in touch?</h1>
                            <p>Send us a message or subscribe to our newsletter to get the positive phrase of the day, information about yoga poses, and much more information related to mindfulness!</p>
                            <form class="form-inputs">
                                <div class="names-input">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="first-name-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="last-name-input"
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="Email address"
                                    placeholder="Email address"
                                    className="email-input"
                                    required
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                />
                                <input
                                    type="text"
                                    placeholder="Message"
                                    className="message-input"
                                />
                                <p>Do you want to subscribe to our Newsletter?</p>
                                <div class="choice-input">
                                    <input 
                                        type="radio"
                                        className="subscribe-input"
                                        value="Yes"
                                    />
                                    <label for="Yes" class="choices">Yes</label>
                                    <input 
                                        type="radio"
                                        className="subscribe-input"
                                        value="No"
                                    />
                                    <label for="No" class="choices">No</label>
                                </div>
                                <div class="submit-form">
                                    <input
                                        type="submit"
                                        name="Subscribe"
                                        class="about-form-button"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
