import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, image, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-close" onClick={onClose} aria-label="Close preview">
                    &times;
                </button>
                <div className="image-modal-body">
                    <img src={image} alt="Enlarged view" />
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
