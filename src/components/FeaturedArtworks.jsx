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
                                <img src="path/to/artwork1.jpg" alt="Artwork 1" className="card-img-top" style={{ borderRadius: '10px 10px 0 0' }} />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Artwork Title</h3>
                                </div>
                            </div>
                        </div>
                        {/* Add more artworks similarly */}
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <img src="path/to/artwork2.jpg" alt="Artwork 2" className="card-img-top" style={{ borderRadius: '10px 10px 0 0' }} />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Artwork Title</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <img src="path/to/artwork3.jpg" alt="Artwork 3" className="card-img-top" style={{ borderRadius: '10px 10px 0 0' }} />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Artwork Title</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <img src="path/to/artwork3.jpg" alt="Artwork 3" className="card-img-top" style={{ borderRadius: '10px 10px 0 0' }} />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Artwork Title</h3>
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
                    style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    onClick={scrollLeft}
                >
                    <FaArrowLeft size={30} color="#333" />
                </div>
            )}

            {/* Right Scroll Arrow */}
            {showRightArrow && (
                <div 
                    style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    onClick={scrollRight}
                >
                    <FaArrowRight size={30} color="#333" />
                </div>
            )}

            {/* Right gradient to hint more content
            {showRightArrow && (
                <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '50px',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
                }} />
            )} */}
        </div>
    );
}

export default FeaturedArtworks;
