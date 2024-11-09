import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center text-lg-start py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p className="small" >
              PB Arts offers unique and creative art pieces that inspire and elevate your living spaces. Our passion is to bring your artistic visions to life.
            </p>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <div className="footer-links d-flex justify-content-center">
              <Link to="/privacy-policy" className="text-light mx-2"><i className="fas fa-user-secret"></i> Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-light mx-2"><i className="fas fa-file-contract"></i> Terms & Conditions</Link>
              <Link to="/cancellation-refund" className="text-light mx-2"><i className="fas fa-undo-alt"></i> Cancellation & Refund</Link>
              <Link to="/shipping-and-delivery" className="text-light mx-2"><i className="fas fa-shipping-fast"></i> Shipping & Delivery</Link>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://www.facebook.com" className="text-light mx-2"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.instagram.com" className="text-light mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.twitter.com" className="text-light mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com" className="text-light mx-2"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        
        <p className="text small m-0" >© 2024 Priyanshu Bansal - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
