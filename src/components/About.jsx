import React from 'react';
import './About.css';
import aboutImg from '../assets/about_bbq_1773130757705.png';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container about-grid">
                <div className="about-image">
                    <img src={aboutImg} alt="Sizzling BBQ" />
                    <div className="image-accent"></div>
                </div>
                <div className="about-content">
                    <h2 className="section-title">Where Smoke <span className="accent-color">Meets Flavor</span></h2>
                    <p>
                        Koyla De Barbeque is one of Patna’s favorite hangout spots for authentic charcoal grilled food.
                        We believe in the power of traditional grilling methods to bring out the most robust flavors.
                    </p>
                    <p>
                        From sizzling kebabs to aromatic biryani, every dish is prepared with fresh ingredients and
                        traditional spices to deliver a rich and unforgettable BBQ experience.
                    </p>
                    <p>
                        Whether you're dining with family or hanging out with friends, Koyla De Barbeque
                        is the perfect place for great food and great memories.
                    </p>
                    <button className="btn-primary" style={{ marginTop: '1rem' }}>Learn Our Story</button>
                </div>
            </div>
        </section>
    );
};

export default About;
