import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <Navbar />

            {/* Dark Banner Section */}
            <section className="banner-section" style={{ backgroundColor: '#333', padding: '60px 0', color: '#fff', textAlign: 'center' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Contact Us</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>We'd love to hear from you!</p>
            </section>

            <div className="container my-5">
                <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-6">
                        <h3 className="mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Get in Touch</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-6">
                        <h3 className="mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Contact Information</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#ff6347', marginRight: '10px' }} />
                                <strong>Address:</strong> 123 Art Street, Creativity City, 123456
                            </li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ff6347', marginRight: '10px' }} />
                                <strong>Email:</strong> info@artstore.com
                            </li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#ff6347', marginRight: '10px' }} />
                                <strong>Phone:</strong> +91-9876543210
                            </li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faClock} style={{ color: '#ff6347', marginRight: '10px' }} />
                                <strong>Working Hours:</strong> Mon-Fri, 9 AM - 6 PM
                            </li>
                        </ul>
                        <h4 className="mb-3" style={{ fontWeight: 'bold', color: '#333' }}>Follow Us</h4>
                        <div>
                            <a href="https://www.facebook.com/" className="text-decoration-none" style={{ color: '#ff6347', marginRight: '15px' }}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://x.com/" className="text-decoration-none" style={{ color: '#ff6347', marginRight: '15px' }}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/" className="text-decoration-none" style={{ color: '#ff6347', marginRight: '15px' }}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/" className="text-decoration-none" style={{ color: '#ff6347', marginRight: '15px' }}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
