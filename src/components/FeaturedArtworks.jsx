import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturedArtworks = () => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainer = useRef(null);

    const handleScroll = () => {
        const container = scrollContainer.current;
        if (container.scrollLeft > 0) {
            setShowLeftArrow(true);
        } else {
            setShowLeftArrow(false);
        }

        if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
            setShowRightArrow(true);
        } else {
            setShowRightArrow(false);
        }
    };

    useEffect(() => {
        const container = scrollContainer.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div style={{ position: 'relative' }}>
            <section className="featured-artworks" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Featured Artworks</h2>
                    {/* Scrollable Row */}
                    <div
                        className="row flex-row flex-nowrap overflow-auto"
                        style={{ marginTop: '30px', scrollBehavior: 'smooth', position: 'relative' }}
                        ref={scrollContainer}
                    >
                        {/* Repeat for each artwork */}
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=80&w=2393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Artwork 1"
                                    className="card-img-top"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>
                                        Artwork Title
                                    </h3>
                                    {/* Pricing Info */}
                                    <p style={{ color: '#333' }}>
                                        <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>₹5000</span>
                                        <span style={{ color: '#dc3545', marginRight: '10px' }}>20% Off</span>
                                        <strong style={{ color: '#007bff' }}>₹4000</strong>
                                    </p>
                                    {/* Buttons */}
                                    <div className="buttons mt-3">
                                        <button
                                            className="btn btn-primary"
                                            style={{ marginRight: '10px', backgroundColor: '#007bff', border: 'none' }}
                                        >
                                            Buy Now
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add more artworks similarly */}
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=80&w=2393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Artwork 2"
                                    className="card-img-top"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>
                                        Artwork Title
                                    </h3>
                                    {/* Pricing Info */}
                                    <p style={{ color: '#333' }}>
                                        <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>₹6000</span>
                                        <span style={{ color: '#dc3545', marginRight: '10px' }}>15% Off</span>
                                        <strong style={{ color: '#007bff' }}>₹5100</strong>
                                    </p>
                                    {/* Buttons */}
                                    <div className="buttons mt-3">
                                        <button
                                            className="btn btn-primary"
                                            style={{ marginRight: '10px', backgroundColor: '#007bff', border: 'none' }}
                                        >
                                            Buy Now
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=80&w=2393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Artwork 3"
                                    className="card-img-top"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>
                                        Artwork Title
                                    </h3>
                                    {/* Pricing Info */}
                                    <p style={{ color: '#333' }}>
                                        <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>₹8000</span>
                                        <span style={{ color: '#dc3545', marginRight: '10px' }}>10% Off</span>
                                        <strong style={{ color: '#007bff' }}>₹7200</strong>
                                    </p>
                                    {/* Buttons */}
                                    <div className="buttons mt-3">
                                        <button
                                            className="btn btn-primary"
                                            style={{ marginRight: '10px', backgroundColor: '#007bff', border: 'none' }}
                                        >
                                            Buy Now
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* More artworks can be added here */}
                    </div>
                </div>
            </section>

            {/* Left Scroll Arrow */}
            {showLeftArrow && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                    }}
                    onClick={scrollLeft}
                >
                    <FaArrowLeft size={30} color="#333" />
                </div>
            )}

            {/* Right Scroll Arrow */}
            {showRightArrow && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                    }}
                    onClick={scrollRight}
                >
                    <FaArrowRight size={30} color="#333" />
                </div>
            )}
        </div>
    );
};

export default FeaturedArtworks;
