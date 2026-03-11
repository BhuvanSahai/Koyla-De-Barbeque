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
                        <button className="btn-secondary theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ marginRight: '1rem', padding: '8px 16px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {theme === 'dark' ? (
                                <>☀️ Light Mode</>
                            ) : (
                                <>🌙 Dark Mode</>
                            )}
                        </button>
                        <Link to="/#menu" className="btn-secondary" onClick={(e) => handleLinkClick(e, 'menu')}>Order Online</Link>
                        <Link to="/reserve" className="btn-primary" onClick={() => setMenuOpen(false)}>Reserve Table</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
