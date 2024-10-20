import React from 'react';
import './Homepage.css';
import { FaShoppingCart } from 'react-icons/fa';
import logoImage from '../assets/logo.png';
import cake1Image from '../assets/cake1.png';
import cake2Image from '../assets/cake2.png';
import cake3Image from '../assets/cake3.png';

const Homepage = () => {
    const featuredCakes = [
        {
            image: cake1Image,
            title: 'Chocolate Cake',
            description: 'Rich and moist chocolate cake topped with chocolate ganache.',
        },
        {
            image: cake2Image,
            title: 'Vanilla Cake',
            description: 'Classic vanilla cake with a creamy vanilla frosting.',
        },
        {
            image: cake3Image,
            title: 'Red Velvet Cake',
            description: 'Delicious red velvet cake with cream cheese frosting.',
        },
    ];

    return (
        <div className="homepage">
            <header className="header">
                <div className="top-bar"></div>
                <nav className="navbar">
                    <div className="logo">
                        <h1 className="cake-text">Alicious Delicious Cakes</h1>
                        <img src={logoImage} alt="Logo" className="navbar-logo" />
                    </div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#pages">About</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#cart"><FaShoppingCart /></a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <section className="hero-section">
                    <h2>Delicious Cakes For You</h2>
                    <p>Sweet Bakery offers the best cakes for you.</p>
                    <button className="shop-button">Shop Now</button>
                </section>

                <section className="featured-cakes">
                    <div className="cards-container">
                        {featuredCakes.map((cake, index) => (
                            <div key={index} className="card">
                                <img src={cake.image} className="card-img-top" alt={cake.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{cake.title}</h5>
                                    <p className="card-text">{cake.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section">
                    <h3>Only Fresh Cakes</h3>
                    <p>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
                </section>
            </main>
            <footer className="footer">
                <p>Contact us: info@aliciousdeliciouscakes.com</p>
            </footer>
        </div>
    );
};

export default Homepage;
