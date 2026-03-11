import React, { useState } from 'react';
import './SignatureDishes.css';
import tandooriImg from '../assets/tandoori_chicken_1773130774500.png';
import banjaraImg from '../assets/banjara_kebab_1773130850999.png';
import biryaniImg from '../assets/biryani_1773130868327.png';
import lollipopImg from '../assets/chicken_lollipop_1773130884297.png';
import paneerImg from '../assets/paneer_tikka.png';
import muttonImg from '../assets/mutton_curry.png';
import dalImg from '../assets/dal_makhani.png';
import naanImg from '../assets/garlic_naan.png';

const fullMenu = [
    // Starters
    { category: 'Starters', name: 'Tandoori Chicken', description: 'Tandoor cooked chicken with spices', price: 'Half ₹195 / Full ₹385', image: tandooriImg },
    { category: 'Starters', name: 'Chicken Tikka', description: 'All time favourite delicacy', price: '₹235', image: tandooriImg },
    { category: 'Starters', name: 'Chicken Banjara Kebab', description: 'Tender chicken pieces with a unique herbaceous marinade.', price: '₹320', image: banjaraImg },
    { category: 'Starters', name: 'Chicken Lollipop', description: 'Crispy fried chicken wings glazed with spicy Schezwan sauce.', price: '₹240', image: lollipopImg },
    { category: 'Starters', name: 'Paneer Tikka', description: 'Cubes of cottage cheese marinated in spiced yogurt and grilled.', price: '₹220', image: paneerImg },
    { category: 'Starters', name: 'Mutton Seekh Kebab', description: 'Minced mutton with roasted spices, grilled on skewers.', price: '₹360', image: banjaraImg },

    // Main Course
    { category: 'Main Course', name: 'Hyderabadi Dum Biryani', description: 'Aromatic basmati rice cooked with succulent chicken and spices.', price: '₹340', image: biryaniImg },
    { category: 'Main Course', name: 'Mutton Rogan Josh', description: 'Classic aromatic mutton curry from Kashmir.', price: '₹420', image: muttonImg },
    { category: 'Main Course', name: 'Dal Maharani', description: 'Black lentils cooked overnight with cream and butter.', price: '₹185', image: dalImg },
    { category: 'Main Course', name: 'Butter Chicken', description: 'Chicken tikka cooked in a smooth buttery and creamy tomato gravy.', price: '₹360', image: muttonImg },
    { category: 'Main Course', name: 'Afghani Chicken', description: 'Creamy and mild chicken roast flavored with cashew paste.', price: '₹300', image: lollipopImg },

    // Breads
    { category: 'Breads', name: 'Garlic Naan', description: 'Tandoor baked flatbread topped with minced garlic and butter.', price: '₹60', image: naanImg },
    { category: 'Breads', name: 'Butter Naan', description: 'Soft and fluffy tandoori bread brushed with butter.', price: '₹50', image: naanImg },
    { category: 'Breads', name: 'Tandoori Roti', description: 'Whole wheat bread baked in a clay oven.', price: '₹30', image: biryaniImg }
];

const SignatureDishes = () => {
    const [showFullMenu, setShowFullMenu] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Starters', 'Main Course', 'Breads'];

    // Filter by category
    const filteredDishes = activeCategory === 'All'
        ? fullMenu
        : fullMenu.filter(dish => dish.category === activeCategory);

    // If not showing full menu, only show first 4 items from Starters/Main
    const displayedDishes = showFullMenu ? filteredDishes : fullMenu.slice(0, 4);

    return (
        <section className="section bg-darker" id="menu">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">Our <span className="accent-color">{showFullMenu ? 'Full Menu' : 'Signature Dishes'}</span></h2>
                    <p className="section-subtitle">Handcrafted flavors that sizzle with every bite</p>
                </div>

                {showFullMenu && (
                    <div className="menu-tabs">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`menu-tab ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                <div className="dishes-grid">
                    {displayedDishes.map((dish, index) => (
                        <div className="dish-card" key={index}>
                            <div className="dish-image">
                                <img src={dish.image} alt={dish.name} />
                                <div className="dish-price">{dish.price}</div>
                            </div>
                            <div className="dish-info">
                                <h3>{dish.name}</h3>
                                <p>{dish.description}</p>
                                <button className="btn-text">Order Now →</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button
                        className="btn-secondary"
                        onClick={() => {
                            setShowFullMenu(!showFullMenu);
                            if (showFullMenu) setActiveCategory('All');
                        }}
                    >
                        {showFullMenu ? 'Show Less' : 'View Full Menu'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
