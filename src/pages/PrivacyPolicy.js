import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
    return (
        <>
        <Navbar />
        <div className="container my-5">
        
            <h1 className="text-center mb-4">Privacy Policy</h1>

            <p>At Artistry by Priyanshu, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website and use our services.</p>

            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information from you:</p>
            <ul>
                <li><strong>Personal Information</strong>: This includes your name, email address, shipping address, and payment details when you make a purchase or subscribe to our newsletter.</li>
                <li><strong>Usage Data</strong>: We collect information on how you use our site, including IP address, browser type, pages visited, and other usage statistics to improve your user experience.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
                <li>To process your orders and deliver our products to you.</li>
                <li>To send updates, promotions, and newsletters if you have subscribed.</li>
                <li>To improve our website, products, and services by analyzing user behavior.</li>
            </ul>

            <h3>3. Sharing Your Information</h3>
            <p>We do not sell or share your personal information with third parties, except:</p>
            <ul>
                <li>To comply with legal obligations or protect our rights.</li>
                <li>With service providers who assist us in operating our website, processing payments, or delivering products, and who adhere to strict data privacy agreements.</li>
            </ul>

            <h3>4. Security of Your Information</h3>
            <p>We implement security measures to protect your personal information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

            <h3>5. Your Choices</h3>
            <p>You may choose to unsubscribe from our communications at any time. You can also request access, correction, or deletion of your personal information by contacting us.</p>

            <h3>6. Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy periodically. Any changes will be posted on this page, and we encourage you to review it regularly.</p>

            <h3>Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:priyanahuabansal94@gmail.com">support@artistrybypriyanshu.com</a>.</p>
        </div>
        <Footer/>
        </>
    );
};

export default PrivacyPolicy;
