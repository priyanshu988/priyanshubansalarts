import React, { useState } from 'react';
import axios from 'axios';

let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";


const CreateCoupon = () => {
    const [code, setCode] = useState('');
    const [discountType, setDiscountType] = useState('percentage');
    const [discountValue, setDiscountValue] = useState('');
    const [maxDiscount, setMaxDiscount] = useState('');
    const [minPurchase, setMinPurchase] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [usageLimit, setUsageLimit] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        try {
            const response = await axios.post(`${REACT_APP_BACKEND_URI}/api/coupons/create`, {
                code,
                discountType,
                discountValue,
                maxDiscount,
                minPurchase,
                expirationDate,
                usageLimit,
            });

            if (response.status === 201) {
                setMessage('Coupon created successfully!');
                // Clear form fields after success
                setCode('');
                setDiscountValue('');
                setMaxDiscount('');
                setMinPurchase('');
                setExpirationDate('');
                setUsageLimit('');
            }
        } catch (error) {
            console.error('Error creating coupon:', error);
            setMessage('Failed to create coupon. Please check your input.');
        }
    };

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            <h2 className="text-center" style={{ color: '#333', fontWeight: 'bold' }}>Create Coupon</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="mb-3">
                    <label className="form-label">Coupon Code</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={code} 
                        onChange={(e) => setCode(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount Type</label>
                    <select 
                        className="form-select" 
                        value={discountType} 
                        onChange={(e) => setDiscountType(e.target.value)} 
                    >
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed Amount</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount Value</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={discountValue} 
                        onChange={(e) => setDiscountValue(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Max Discount (Optional)</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={maxDiscount} 
                        onChange={(e) => setMaxDiscount(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Minimum Purchase (Optional)</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={minPurchase} 
                        onChange={(e) => setMinPurchase(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Expiration Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={expirationDate} 
                        onChange={(e) => setExpirationDate(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Usage Limit (Optional)</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={usageLimit} 
                        onChange={(e) => setUsageLimit(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Coupon</button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
};

export default CreateCoupon;
