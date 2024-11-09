// PasswordPopup.js
import React, { useState } from 'react';

const PasswordPopup = ({ onPasswordSubmit }) => {
    const [inputPassword, setInputPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onPasswordSubmit(inputPassword);
        setInputPassword(''); // Clear input field after submission
    };

    return (
        <div className="password-popup">
            <div className="popup-overlay">
                <div className="popup-content">
                    <h4>Enter Admin Password</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
            <style jsx>{`
                .password-popup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                }
                .popup-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                }
                .popup-content {
                    background: white;
                    padding: 20px;
                    border-radius: 5px;
                    z-index: 1001;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default PasswordPopup;
