import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mb-4">Terms and Conditions</h1>
                
                <section className="mb-4">
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to PB Arts. These terms and conditions outline the rules and regulations for the use of our website.
                        By accessing this website, we assume you accept these terms and conditions. Do not continue to use PB Arts if you
                        do not agree to all of the terms and conditions stated on this page.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>2. Account and Registration</h2>
                    <p>
                        To make purchases through PB Arts, you may need to create an account. You are responsible for ensuring that the
                        information provided is accurate and up-to-date. Please keep your login credentials confidential, as you are
                        responsible for any activities under your account.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>3. Ordering and Payment</h2>
                    <p>
                        All orders placed through PB Arts are subject to product availability and confirmation of the order price.
                        Payment can be made through our supported payment gateways. If there are any issues with processing your order,
                        we will notify you as soon as possible.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>4. Return and Refund Policy</h2>
                    <p>
                        Our return and refund policy provides guidelines on how returns and refunds are processed. Please review our
                        <a href="/return-policy" className="text-primary"> Return Policy</a> for more details.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>5. Intellectual Property</h2>
                    <p>
                        All content on PB Arts, including images, designs, and artwork, is the property of PB Arts and is protected
                        by intellectual property laws. Unauthorized use of our content is strictly prohibited.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>6. Limitation of Liability</h2>
                    <p>
                        PB Arts shall not be held liable for any damages arising from the use or inability to use the website. This
                        includes any incidental, indirect, or consequential damages.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>7. Changes to Terms</h2>
                    <p>
                        PB Arts reserves the right to modify or replace these terms at any time. Any changes will be posted on this
                        page, and it is your responsibility to review the terms regularly. Continued use of the website after any
                        changes constitutes acceptance of the new terms.
                    </p>
                </section>

                <section className="mb-4">
                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about our Terms and Conditions, please contact us at
                        <a href="mailto:support@pbarts.com" className="text-primary"> support@pbarts.com</a>.
                    </p>
                </section>

                <div className="text-center">
                    <p>Last updated: November 7, 2024</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditionsPage;
