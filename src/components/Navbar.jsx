import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: '#333', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        PB Art Studio
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/" style={{ color: '#333', fontWeight: 'bold' }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" style={{ color: '#333', fontWeight: 'bold' }}>
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery" style={{ color: '#333', fontWeight: 'bold' }}>
                                    Gallery
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact" style={{ color: '#333', fontWeight: 'bold' }}>
                                    Contact
                                </a>
                            </li>
                            {/* Cart Icon */}
                            <li className="nav-item">
                                <a className="nav-link" href="/cart" style={{ color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                    <FaShoppingCart style={{ marginRight: '8px' }} /> Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
