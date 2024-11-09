import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start" style={{ marginTop: '50px', padding: '10px', backgroundColor: '#f8f9fa' }}>
      <div className="container p-1">
        <p className="text-muted">© 2024 Priyanshu Bansal - All Rights Reserved</p>
        <div className="footer-links" style={{ marginTop: '10px' }}>
          <Link to="/privacy-policy" className="text-muted mx-3">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="text-muted mx-3">Terms and Conditions</Link>
          <Link to="/cancellation-refund" className="text-muted mx-3">Cancellation & Refund</Link>
          <Link to="/shipping-and-delivery" className="text-muted mx-3">Shipping and Delivery</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
