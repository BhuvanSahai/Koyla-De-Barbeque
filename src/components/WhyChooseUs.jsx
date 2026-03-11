import React from 'react';
import './WhyChooseUs.css';

const features = [
    {
        icon: '🔥',
        title: 'Authentic Charcoal BBQ',
        description: 'Cooked on traditional charcoal grills for that perfect smoky flavor.'
    },
    {
        icon: '💰',
        title: 'Affordable Prices',
        description: 'Delicious premium meals starting at just ₹200.'
    },
    {
        icon: '🤝',
        title: 'Perfect Hangout Spot',
        description: 'A great atmosphere for friends and family gatherings.'
    },
    {
        icon: '🥦',
        title: 'Fresh Ingredients',
        description: 'Every dish is made fresh with locally sourced rich spices.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section why-choose">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Why <span className="accent-color">Koyla De Barbeque?</span></h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
