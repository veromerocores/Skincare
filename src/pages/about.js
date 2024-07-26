import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

const TITLE = 'About';

export default function About() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <main className='aboutbackground'>
                <div className='aboutcontainer1'>
                    <Header />
                    <div className='top'>
                        <div className='whoandwhat'>
                            <h2>Who are we?</h2>
                            <p>We are a team of dedicated skincare enthusiasts and experts passionate about helping individuals achieve their best skin. With a deep understanding of dermatology and a commitment to personalized skincare solutions, we aim to provide guidance and recommendations tailored to your unique skin type and concerns.</p>
                            <p>We believe that everyone deserves to feel confident in their skin, and we strive to make effective skincare accessible and understandable for all. By combining our expertise with your specific needs, we create a path to healthier, more beautiful skin.</p>
                        </div>
                        <div class="aboutline"></div>
                        <img src='../assets/images/skincare-routine.jpeg' alt='woman smiling with a face mask on' className='maskpicture'/>
                    </div>
                </div>
                <div className='aboutcontainer2'>
                    <img src='../assets/images/products2.jpg' alt='showing products on a hand'className='handpic'/> 
                    <div class="aboutline"></div>
                    <div className='whoandwhat'>
                        <h2>What is SkinPlan?</h2>
                        <p>SkinPlan is a comprehensive skincare planner, questionnaire and recommendation tool designed to identify your skin’s needs and suggest the most effective ingredients and products for your routine. By analyzing your skin type, primary concerns, and lifestyle factors, SkinPlan tells you the ingredients you need to implement in your skincare routine and in which step, so you can GLOW.</p>
                        <p>SkinPlan uses a data-driven approach to deliver personalized skincare advice. Get the advice, search for the products you need and add them to your planner so you can follow every step and achieve your SKIN GOALS.</p>
                    </div>
                </div>
                <div className="about2">
                    <div className="about-form">
                        <h1>Want to be in touch?</h1>
                        <p className="paragraph">Send us a message or subscribe to our newsletter to get the positive phrase of the day, information about yoga poses, and much more information related to mindfulness!</p>
                        <form className="form-inputs">
                            <div className="names-input">
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
                            <div className="choice-input">
                                <input
                                    type="radio"
                                    id="subscribe-yes"
                                    name="subscribe"
                                    className="subscribe-input"
                                    value="Yes"
                                />
                                <label htmlFor="subscribe-yes" className="choices">Yes</label>
                                <input
                                    type="radio"
                                    id="subscribe-no"
                                    name="subscribe"
                                    className="subscribe-input"
                                    value="No"
                                />
                                <label htmlFor="subscribe-no" className="choices">No</label>
                            </div>
                            <div className="submit-form">
                                <input
                                    type="submit"
                                    name="Subscribe"
                                    className="about-form-button"
                                    value="Submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
