import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'Local Guide',
        content: 'Best place to hangout with friends and family. Great food and excellent service. The smoky flavor of the tandoori is unmatched!',
        rating: 5
    },
    {
        name: 'Priya Singh',
        role: 'Food Blogger',
        content: 'Amazing BBQ taste and very affordable. Highly recommended for anyone looking for authentic charcoal grilled dishes in Patna.',
        rating: 5
    },
    {
        name: 'Ankit Kumar',
        role: 'Regular Customer',
        content: 'Delicious biryani and kebabs. The smoky flavor is incredible. Clean environment and friendly staff. Love the vibe!',
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="section bg-darker" id="reviews">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">What Our <span className="accent-color">Guests Say</span></h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
