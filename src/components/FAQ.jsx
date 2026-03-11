import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: 'Do you offer home delivery?',
        answer: 'Yes, we offer home delivery through our primary partners Zomato and Swiggy. You can also order directly via our website.'
    },
    {
        question: 'Do you accept table reservations?',
        answer: 'Absolutely! We recommend reserving a table in advance, especially on weekends, to avoid waiting times.'
    },
    {
        question: 'What are your opening hours?',
        answer: 'We are open every day from 10:00 AM to 12:00 AM midnight.'
    },
    {
        question: 'Do you serve family meals?',
        answer: 'Yes, we have specially curated family platters and combo meals designed for groups and celebrations.'
    },
    {
        question: 'Is parking available?',
        answer: 'Yes, dedicated parking space is available for our customers near the restaurant premises.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section" id="faq">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Common <span className="accent-color">Questions</span></h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
