import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FoodGallery from './components/FoodGallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import { ThemeProvider } from './context/ThemeContext';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
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
    }, [pathname, hash]);

    return null;
};

const Home = () => (
    <>
        <Hero />
        <About />
        <SignatureDishes />
        <WhyChooseUs />
        <Testimonials />
        <FoodGallery />
        <FAQ />
    </>
);

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <div className="app">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/reserve" element={<Reservation />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
