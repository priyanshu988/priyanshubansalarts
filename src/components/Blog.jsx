import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainer = useRef(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/blog');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

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

    // Helper function to truncate text
    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    return (
        <div style={{ position: 'relative' }}>
            <section className="blog-news" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Blogs</h2>
                    <div
                        className="row flex-row flex-nowrap overflow-auto"
                        style={{ marginTop: '30px', scrollBehavior: 'smooth', position: 'relative' }}
                        ref={scrollContainer}
                    >
                        {blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <div key={blog._id} className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }}>
                                    <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                        <img 
                                            src={blog.wallpaper} 
                                            alt={blog.title} 
                                            className="card-img-top" 
                                            style={{ borderRadius: '10px 10px 0 0' }} 
                                        />
                                        <div className="card-body">
                                            <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>{blog.title}</h3>
                                            <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                                {truncateText(blog.shortDescription, 100)}
                                            </p>
                                            <a href={blog.readMoreUrl} className="btn btn-secondary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading blogs...</p>
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

export default Blog;
