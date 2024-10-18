import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div
                className="hero-section text-center py-5"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1688834396622-cc4aa8253e7c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ fontWeight: 'bold', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    About PB Art Studio
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '15px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                    Where creativity meets passion
                </p>
            </div>

            {/* About Content */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img
                            src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg"
                            alt="About PB Art Studio"
                            className="img-fluid"
                            style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 style={{ color: '#333', fontWeight: 'bold', marginBottom: '20px' }}>
                            Our Vision and Mission
                        </h2>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            At <strong>PB Art Studio</strong>, we believe that art has the power to transform and inspire
                            the soul. Founded by Priyanshu Bansal, our studio is committed to bringing stunning, original
                            pieces of art to enthusiasts around the world. Each painting reflects a deep connection
                            between creativity and emotion, providing a personal experience for every viewer.
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Our mission is simple: to make art accessible to everyone, while supporting and encouraging
                            budding artists. We offer a diverse collection of artworks that cater to various tastes,
                            from abstract to landscape, from acrylic to oil. At PB Art Studio, every stroke tells a
                            story.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Why Choose PB Art Studio?</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div
                            className="p-4 shadow-sm"
                            style={{ borderRadius: '10px', backgroundColor: '#f8f9fa' }}
                        >
                            <i
                                className="bi bi-palette-fill"
                                style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}
                            ></i>
                            <h4 style={{ color: '#333', fontWeight: 'bold' }}>Unique Artworks</h4>
                            <p style={{ color: '#666', fontSize: '1rem' }}>
                                Each piece is crafted with love and creativity, ensuring a one-of-a-kind experience.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="p-4 shadow-sm"
                            style={{ borderRadius: '10px', backgroundColor: '#f8f9fa' }}
                        >
                            <i
                                className="bi bi-brush-fill"
                                style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}
                            ></i>
                            <h4 style={{ color: '#333', fontWeight: 'bold' }}>Mastery of Mediums</h4>
                            <p style={{ color: '#666', fontSize: '1rem' }}>
                                From acrylic to oil and watercolor, our artists are experts in a wide range of styles.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div
                            className="p-4 shadow-sm"
                            style={{ borderRadius: '10px', backgroundColor: '#f8f9fa' }}
                        >
                            <i
                                className="bi bi-hand-thumbs-up-fill"
                                style={{ fontSize: '2rem', color: '#333', marginBottom: '15px' }}
                            ></i>
                            <h4 style={{ color: '#333', fontWeight: 'bold' }}>Customer Satisfaction</h4>
                            <p style={{ color: '#666', fontSize: '1rem' }}>
                                We prioritize our clients' happiness, ensuring a smooth and satisfying buying experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Join Us on Our Artistic Journey</h2>
                <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
                    Whether you're a collector or an artist, there's something for everyone at PB Art Studio.
                </p>
                <a href="/gallery" className="btn btn-primary btn-lg">
                    Explore Our Gallery
                </a>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutPage;
