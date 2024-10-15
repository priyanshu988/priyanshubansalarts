import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
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
            <section className="blog-news" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Blogs</h2>
                    {/* Scrollable Row */}
                    <div 
                        className="row flex-row flex-nowrap overflow-auto" 
                        style={{ marginTop: '30px', scrollBehavior: 'smooth', position: 'relative' }}
                        ref={scrollContainer}
                    >
                        {/* Blog Post */}
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                    <a href="/blog" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* Repeat for more blog posts */}
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                    <a href="/blog" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                    <a href="/blog" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                            <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                    <a href="/blog" className="btn btn-secondary">Read More</a>
                                </div>
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

export default Blog;
