import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";

const Testimonial = () => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [testimonials, setTestimonials] = useState([]);
    const scrollContainer = useRef(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`${REACT_APP_BACKEND_URI}/api/testimonial`);
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };
        fetchTestimonials();
    }, []);

    const handleScroll = () => {
        const container = scrollContainer.current;
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(container.scrollLeft + container.offsetWidth < container.scrollWidth);
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
                        {testimonials.length > 0 ? (
                            testimonials.map((testimonial) => (
                                <div
                                    key={testimonial._id}
                                    className="col-md-4 col-9 mb-4"
                                    style={{
                                        flex: '0 0 auto',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div
                                        className="testimonial-box"
                                        style={{
                                            padding: '20px',
                                            backgroundColor: '#fff',
                                            borderRadius: '10px',
                                            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                            height: '200px', // Set equal height
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between', // Distribute content
                                        }}
                                    >
                                        <p style={{ color: '#666', fontSize: '1rem', flex: 1 }}>"{testimonial.feedback}"</p>
                                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— {testimonial.name}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading testimonials...</p>
                        )}
                    </div>
                </div>
            </section>

            {showLeftArrow && (
                <div
                    style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    onClick={scrollLeft}
                >
                    <FaArrowLeft size={30} color="#333" />
                </div>
            )}

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
};

export default Testimonial;
