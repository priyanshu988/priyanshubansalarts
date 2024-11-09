import React, { useState } from 'react';
let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            const response = await fetch(`${REACT_APP_BACKEND_URI}/api/newsletter/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);  // Success message from the backend
                setEmail(''); // Clear the email field
            } else {
                setMessage(data.message || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <section className="newsletter" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Stay Updated!</h2>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '20px' }}>
                        Subscribe to our newsletter for exclusive offers and updates on new artworks.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                            required
                        />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                    {message && (
                        <p style={{ marginTop: '20px', color: message.includes('success') ? 'green' : 'red' }}>
                            {message}
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default NewsletterSubscription;
