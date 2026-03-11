import React, { useState } from 'react';
import './SignatureDishes.css';

const fullMenu = [
    // Starters
    { category: 'Starters', name: 'Tandoori Chicken', description: 'Tandoor cooked chicken with spices', price: 'Half ₹195 / Full ₹385', image: '/src/assets/tandoori_chicken_1773130774500.png' },
    { category: 'Starters', name: 'Chicken Tikka', description: 'All time favourite delicacy', price: '₹235', image: '/src/assets/tandoori_chicken_1773130774500.png' },
    { category: 'Starters', name: 'Chicken Banjara Kebab', description: 'Tender chicken pieces with a unique herbaceous marinade.', price: '₹320', image: '/src/assets/banjara_kebab_1773130850999.png' },
    { category: 'Starters', name: 'Chicken Lollipop', description: 'Crispy fried chicken wings glazed with spicy Schezwan sauce.', price: '₹240', image: '/src/assets/chicken_lollipop_1773130884297.png' },
    { category: 'Starters', name: 'Paneer Tikka', description: 'Cubes of cottage cheese marinated in spiced yogurt and grilled.', price: '₹220', image: '/src/assets/paneer_tikka.png' },
    { category: 'Starters', name: 'Mutton Seekh Kebab', description: 'Minced mutton with roasted spices, grilled on skewers.', price: '₹360', image: '/src/assets/banjara_kebab_1773130850999.png' },

    // Main Course
    { category: 'Main Course', name: 'Hyderabadi Dum Biryani', description: 'Aromatic basmati rice cooked with succulent chicken and spices.', price: '₹340', image: '/src/assets/biryani_1773130868327.png' },
    { category: 'Main Course', name: 'Mutton Rogan Josh', description: 'Classic aromatic mutton curry from Kashmir.', price: '₹420', image: '/src/assets/mutton_curry.png' },
    { category: 'Main Course', name: 'Dal Maharani', description: 'Black lentils cooked overnight with cream and butter.', price: '₹185', image: '/src/assets/dal_makhani.png' },
    { category: 'Main Course', name: 'Butter Chicken', description: 'Chicken tikka cooked in a smooth buttery and creamy tomato gravy.', price: '₹360', image: '/src/assets/mutton_curry.png' },
    { category: 'Main Course', name: 'Afghani Chicken', description: 'Creamy and mild chicken roast flavored with cashew paste.', price: '₹300', image: '/src/assets/chicken_lollipop_1773130884297.png' },

    // Breads
    { category: 'Breads', name: 'Garlic Naan', description: 'Tandoor baked flatbread topped with minced garlic and butter.', price: '₹60', image: '/src/assets/garlic_naan.png' },
    { category: 'Breads', name: 'Butter Naan', description: 'Soft and fluffy tandoori bread brushed with butter.', price: '₹50', image: '/src/assets/garlic_naan.png' },
    { category: 'Breads', name: 'Tandoori Roti', description: 'Whole wheat bread baked in a clay oven.', price: '₹30', image: '/src/assets/biryani_1773130868327.png' }
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
