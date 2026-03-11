import React, { useState } from 'react';
import './FoodGallery.css';
import ImageModal from './ImageModal';
import heroBg from '../assets/hero_bg_1773130739110.png';
import aboutImg from '../assets/about_bbq_1773130757705.png';
import tandooriImg from '../assets/tandoori_chicken_1773130774500.png';
import banjaraImg from '../assets/banjara_kebab_1773130850999.png';
import biryaniImg from '../assets/biryani_1773130868327.png';
import lollipopImg from '../assets/chicken_lollipop_1773130884297.png';

const images = [
    heroBg,
    aboutImg,
    tandooriImg,
    banjaraImg,
    biryaniImg,
    lollipopImg
];

const FoodGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPreview = (img) => {
        setSelectedImg(img);
        setIsModalOpen(true);
    };

    return (
        <section className="section" id="gallery">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Our <span className="accent-color">Food Gallery</span></h2>
                    <p className="section-subtitle">A glimpse into our smoky BBQ world</p>
                </div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div
                            className="gallery-item"
                            key={index}
                            onClick={() => openPreview(img)}
                        >
                            <img src={img} alt={`Gallery ${index}`} />
                            <div className="gallery-overlay">
                                <span>View Large</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                image={selectedImg}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default FoodGallery;
