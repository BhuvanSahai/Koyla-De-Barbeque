import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="cta-banner">
                <div className="container cta-content">
                    <h2>Ready for the Ultimate BBQ Experience?</h2>
                    <div className="cta-actions">
                        <Link to="/reserve" className="btn-primary">Reserve a Table</Link>
                        <a href="/#menu" className="btn-secondary">Order Online</a>
                    </div>
                </div>
            </div>

            <div className="section main-footer">
                <div className="container footer-grid">
                    <div className="footer-item">
                        <h2 className="logo">Koyla <span>De Barbeque</span></h2>
                        <p className="footer-desc">
                            Authentic charcoal grilled BBQ experience in the heart of Patna.
                            Authentic smoky flavors, affordable prices.
                        </p>
                        <div className="social-links">
                            <a href="#">Fb</a>
                            <a href="#">Ig</a>
                            <a href="#">Tw</a>
                        </div>
                    </div>

                    <div className="footer-item">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                        </ul>
                    </div>

                    <div className="footer-item">
                        <h3>Contact Us</h3>
                        <p>
                            📍 <a href="https://maps.app.goo.gl/Ac5yWJMR5jszxUXh9" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--bbq-orange)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                                Mahendra Lok Apartment, Near Rajendra Nagar Over Bridge, Kankarbagh, Patna, Bihar
                            </a>
                        </p>
                        <p>📞 <a href="tel:09955996020" style={{ color: 'inherit', textDecoration: 'none' }}>099559 96020</a></p>
                        <p>✉️ <a href="mailto:info@koyladebarbeque.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@koyladebarbeque.com</a></p>
                        <p>🕒 10 AM – 12 AM (Every day)</p>
                    </div>

                    <div className="footer-item">
                        <h3>Location</h3>
                        <div className="map-container" style={{ borderRadius: '8px', overflow: 'hidden', height: '200px' }}>
                            <a href="https://maps.app.goo.gl/Ac5yWJMR5jszxUXh9" target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%' }} title="Open in Google Maps">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.056027376742!2d85.1481144!3d25.6030588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585ab5ff8ce9%3A0xc3f345c26b2ee665!2sKoyla%20De%20Barbeque!5e0!3m2!1sen!2sin!4v1710161400000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, pointerEvents: 'none' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2024 Koyla De Barbeque. All Rights Reserved. Designed with Smoky Passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
