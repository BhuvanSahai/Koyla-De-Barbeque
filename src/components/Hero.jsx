import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Authentic Charcoal BBQ in Patna</h1>
                <p className="hero-subtitle">
                    From smoky tandoori to juicy kebabs — experience the true taste of barbecue at Koyla De Barbeque.
                </p>
                <div className="hero-actions">
                    <Link to="/reserve" className="btn-primary">Reserve a Table</Link>
                </div>

                <div className="hero-quick-info">
                    <div className="info-card">
                        <span className="icon">⭐</span>
                        <div>
                            <h3>4.0 Rating</h3>
                            <p>Loved by locals</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <span className="icon">🍗</span>
                        <div>
                            <h3>BBQ Specials</h3>
                            <p>Tandoori & Kebabs</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <span className="icon">📍</span>
                        <div>
                            <h3>Kankarbagh</h3>
                            <p>Patna, Bihar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
