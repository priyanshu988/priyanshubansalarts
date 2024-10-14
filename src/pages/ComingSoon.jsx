import React from 'react';

const ComingSoon = () => {
    return (
        <div style={{ backgroundColor: '#e2e6ea', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', color: '#333' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Coming Soon!</h1>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>We are working hard to bring this page to you.</p>
            <p style={{ fontSize: '1rem', marginTop: '10px' }}>Stay tuned for updates!</p>
            <a href="/" className="btn btn-primary" style={{ marginTop: '30px' }}>Back to Home</a>
        </div>
    );
};

export default ComingSoon;
