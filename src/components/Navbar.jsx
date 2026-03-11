import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, targetId) => {
        setMenuOpen(false);
        if (location.pathname !== '/') {
            // If not on home page, navigation will happen via Link to "/" and then we need to handle scroll
            // React Router Link will handle navigation to "/"
        } else if (targetId) {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80; // height of navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
                    Koyla <span>De Barbeque</span>
                </Link>

                <button
                    className="mobile-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/#about" onClick={(e) => handleLinkClick(e, 'about')}>About</Link></li>
                        <li><Link to="/#menu" onClick={(e) => handleLinkClick(e, 'menu')}>Menu</Link></li>
                        <li><Link to="/#gallery" onClick={(e) => handleLinkClick(e, 'gallery')}>Gallery</Link></li>
                        <li><Link to="/#reviews" onClick={(e) => handleLinkClick(e, 'reviews')}>Reviews</Link></li>
                        <li><Link to="/#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</Link></li>
                    </ul>
                    <div className="nav-actions">
                        <label className="theme-switch" aria-label="Toggle theme">
                            <input
                                type="checkbox"
                                checked={theme === 'light'}
                                onChange={toggleTheme}
                            />
                            <div className="slider-wrapper">
                                <div className="theme-bg"></div>
                                <div className="celestial-body">
                                    <div className="craters">
                                        <div className="crater crater-1"></div>
                                        <div className="crater crater-2"></div>
                                        <div className="crater crater-3"></div>
                                    </div>
                                </div>
                                <div className="decorations">
                                    <div className="cloud cloud-1"></div>
                                    <div className="cloud cloud-2"></div>
                                    <div className="cloud cloud-3"></div>
                                    <div className="cloud cloud-4"></div>

                                    <div className="star star-1">✦</div>
                                    <div className="star star-2">✦</div>
                                    <div className="star star-3">✦</div>
                                    <div className="star star-4">✦</div>
                                    <div className="star star-5">✦</div>
                                </div>
                            </div>
                        </label>
                        <Link to="/#menu" className="btn-secondary" onClick={(e) => handleLinkClick(e, 'menu')}>Order Online</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
