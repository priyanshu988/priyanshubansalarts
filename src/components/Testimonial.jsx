import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonial = () => {
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
            <section className="testimonials" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Testimonials</h2>
                    <div 
                        className="row flex-row flex-nowrap overflow-auto" 
                        style={{ marginTop: '30px', scrollBehavior: 'smooth', position: 'relative' }}
                        ref={scrollContainer}
                    >
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="testimonial-box" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    "Priyanshu's artwork is simply stunning. The quality and detail are remarkable. I love how his paintings bring life to my living room."
                                </p>
                                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Customer A</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="testimonial-box" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    "Fantastic customer service and truly one-of-a-kind pieces. I’ll definitely be purchasing more from this store."
                                </p>
                                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Customer B</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="testimonial-box" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    "The artwork from Priyanshu’s store is unique and adds elegance to my office space. Highly recommended!"
                                </p>
                                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Customer C</p>
                            </div>
                        </div>
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

            
        </div>
    );
}

export default Testimonial;
