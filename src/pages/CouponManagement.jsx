import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CouponManagement = () => {
    const [coupons, setCoupons] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch existing coupons from the API
        const fetchCoupons = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/coupons');
                setCoupons(response.data);
            } catch (error) {
                console.error('Error fetching coupons:', error);
                setMessage('Failed to load coupons. Please try again later.');
            }
        };

        fetchCoupons();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/coupons/${id}`);
            setCoupons(coupons.filter(coupon => coupon._id !== id));
            setMessage('Coupon deleted successfully!');
        } catch (error) {
            console.error('Error deleting coupon:', error);
            setMessage('Failed to delete coupon. Please try again.');
        }
    };

    return (
        <div className="container" style={{ padding: '50px 0' }}>
            <h2 className="text-center" style={{ color: '#333', fontWeight: 'bold' }}>Coupon Management</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Coupon Code</th>
                        <th>Discount Type</th>
                        <th>Discount Value</th>
                        <th>Max Discount</th>
                        <th>Min Purchase</th>
                        <th>Expiration Date</th>
                        <th>Usage Limit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.length > 0 ? (
                        coupons.map((coupon) => (
                            <tr key={coupon._id}>
                                <td>{coupon.code}</td>
                                <td>{coupon.discountType}</td>
                                <td>{coupon.discountValue}</td>
                                <td>{coupon.maxDiscount}</td>
                                <td>{coupon.minPurchase}</td>
                                <td>{new Date(coupon.expirationDate).toLocaleDateString()}</td>
                                <td>{coupon.usageLimit}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => handleDelete(coupon._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No coupons available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CouponManagement;
