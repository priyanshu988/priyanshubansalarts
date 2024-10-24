import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const CartPage = () => {
    // Initialize cart items from localStorage or use default values if not present
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [step, setStep] = useState(1); // Controls the step in the process (1: Address, 2: Payment, 3: Final Bill)
    const [address, setAddress] = useState(localStorage.getItem('address') || ''); // Persist address
    const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem('paymentMethod') || '');
    const [couponCode, setCouponCode] = useState(''); // Store coupon code entered by the user
    const [discount, setDiscount] = useState(0); // Store the discount percentage
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Calculate total price of the cart items
    const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

    // Calculate discounted price after applying coupon
    const discountedPrice = totalPrice - (totalPrice * discount / 100);

    // Save cart to localStorage when cartItems change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Save address and payment method to localStorage
    useEffect(() => {
        localStorage.setItem('address', address);
        localStorage.setItem('paymentMethod', paymentMethod);
    }, [address, paymentMethod]);

    // Delete an item from the cart
    const deleteItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    // Handle step navigation
    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Final step: place the order
            setOrderPlaced(true);
            // Clear cart and address from localStorage after placing order
            localStorage.removeItem('cartItems');
            localStorage.removeItem('address');
            localStorage.removeItem('paymentMethod');
            setCartItems([]);
        }
    };

    // Handle address change
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    // Handle payment method change
    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    // Handle coupon code validation with backend
    const applyCoupon = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/coupons/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: couponCode, totalAmount: totalPrice }),
            });

            if (response.ok) {
                const data = await response.json();
                    let discount = (data.discountAmount/totalPrice)*100;

                    setDiscount(discount);
                    Swal.fire({
                        title: 'Coupon applied!',
                        text: `You get ${discount}% off.`,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    console.log(data)
            } else {
                alert('Error validating coupon. Please try again later.');
            }
        } catch (error) {
            console.error('Error applying coupon:', error);
            alert('Error applying coupon. Please try again later.');
        }
    };

    return (
        <>
            <Navbar/>
            <div className="container mt-4">
                <h2 className="text-center my-4">Your Cart</h2>

                {/* Progress Bar */}
                <div className="progress mb-4">
                    <div
                        className={`progress-bar ${step >= 1 ? 'bg-success' : ''}`}
                        role="progressbar"
                        style={{ width: `${(step / 3) * 100}%` }}
                    >
                        {step === 1 && 'Step 1: Address'}
                        {step === 2 && 'Step 2: Payment'}
                        {step === 3 && 'Step 3: Final Bill'}
                    </div>
                </div>

                {/* Step 1: Address */}
                {step === 1 && (
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-4">Step 1: Enter Address</h4>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={address}
                            onChange={handleAddressChange}
                            placeholder="Enter your shipping address"
                        ></textarea>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={handleNextStep}
                            disabled={!address} // Disable next button if no address
                        >
                            Continue to Payment
                        </button>
                    </div>
                )}

                {/* Step 2: Payment Method */}
                {step === 2 && (
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-4">Step 2: Select Payment Method</h4>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="Credit Card"
                                onChange={handlePaymentChange}
                                checked={paymentMethod === 'Credit Card'}
                            />
                            <label className="form-check-label">Credit Card</label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="UPI"
                                onChange={handlePaymentChange}
                                checked={paymentMethod === 'UPI'}
                            />
                            <label className="form-check-label">UPI</label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="Cash on Delivery"
                                onChange={handlePaymentChange}
                                checked={paymentMethod === 'Cash on Delivery'}
                            />
                            <label className="form-check-label">Cash on Delivery</label>
                        </div>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={handleNextStep}
                            disabled={!paymentMethod} // Disable next button if no payment method
                        >
                            Continue to Final Bill
                        </button>
                    </div>
                )}

                {/* Step 3: Final Bill with Coupon Code */}
                {step === 3 && (
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-4">Step 3: Final Bill</h4>

                        {/* Cart Items */}
                        <ul className="list-group mb-4">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.title}
                                    <span className="fw-bold">INR {item.discountedPrice}</span>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Coupon Code Section */}
                        <div className="mb-4">
                            <label htmlFor="couponCode" className="form-label">Have a coupon code?</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="couponCode"
                                    placeholder="Enter coupon code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button className="btn btn-outline-secondary" onClick={applyCoupon}>
                                    Apply
                                </button>
                            </div>
                            {discount > 0 && (
                                <p className="text-success mt-2">
                                    Coupon applied! You saved {discount}% on your order.
                                </p>
                            )}
                        </div>

                        {/* Total Price */}
                        <h5>
                            Total Price: <span className="text-success">INR {discount > 0 ? discountedPrice : totalPrice}</span>
                        </h5>
                        <button className="btn btn-success mt-3 w-100" onClick={handleNextStep}>
                            Place Order
                        </button>
                    </div>
                )}

                {/* Order Confirmation */}
                {orderPlaced && (
                    <div className="alert alert-success mt-4">
                        <h4 className="alert-heading">Order Confirmed!</h4>
                        <p>Your order has been placed successfully. Thank you for shopping with us!</p>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default CartPage;
