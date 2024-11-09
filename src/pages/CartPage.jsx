import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";

const CartPage = () => {
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState(localStorage.getItem('address') || '');
    const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem('paymentMethod') || '');
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
    const discountedPrice = totalPrice - (totalPrice * discount / 100);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('address', address);
        localStorage.setItem('paymentMethod', paymentMethod);
    }, [address, paymentMethod]);

    const deleteItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            if (paymentMethod === 'Razorpay') {
                handlePayment();
            } else {
                completeOrder();
            }
        }
    };

    const handleAddressChange = (e) => setAddress(e.target.value);
    const handlePaymentChange = (e) => setPaymentMethod(e.target.value);

    const applyCoupon = async () => {
        try {
            const response = await fetch(`${REACT_APP_BACKEND_URI}/api/coupons/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: couponCode, totalAmount: totalPrice }),
            });
            if (response.ok) {
                const data = await response.json();
                let discount = (data.discountAmount / totalPrice) * 100;
                setDiscount(discount);
                Swal.fire({
                    title: 'Coupon applied!',
                    text: `You get ${discount}% off.`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                alert('Error validating coupon. Please try again later.');
            }
        } catch (error) {
            console.error('Error applying coupon:', error);
            alert('Error applying coupon. Please try again later.');
        }
    };

    const handlePayment = () => {
        const options = {
            key: "rzp_live_g4rIjQso3bHB0c",
            amount: discountedPrice * 100, // Convert to paisa
            currency: 'INR',
            name: 'PB Arts',
            description: 'Order Payment',
            handler: function (response) {
                Swal.fire({
                    title: 'Payment Successful!',
                    text: 'Your payment was successful.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                completeOrder();
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#3399cc'
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
            Swal.fire({
                title: 'Payment Failed',
                text: 'There was an error with your payment. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
        rzp.open();
    };

    const completeOrder = async () => {
        const orderData = {
            userId: "customer-id-placeholder", // Replace with actual user ID if you have user authentication
            items: cartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.discountedPrice,
            })),
            totalAmount: discountedPrice,
            address,
            paymentMethod,
        };

        try {
            const response = await fetch(`${REACT_APP_BACKEND_URI}/api/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                setOrderPlaced(true);
                Swal.fire({
                    title: 'Order Confirmed!',
                    text: 'Your order has been placed successfully. Thank you for shopping with us!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                localStorage.removeItem('cartItems');
                localStorage.removeItem('address');
                localStorage.removeItem('paymentMethod');
                setCartItems([]);
            } else {
                throw new Error('Failed to place order');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            Swal.fire({
                title: 'Order Failed',
                text: 'There was an issue placing your order. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h2 className="text-center my-4">Your Cart</h2>

                <div className="progress mb-4">
                    <div className={`progress-bar ${step >= 1 ? 'bg-success' : ''}`} role="progressbar" style={{ width: `${(step / 3) * 100}%` }}>
                        {step === 1 && 'Step 1: Address'}
                        {step === 2 && 'Step 2: Payment'}
                        {step === 3 && 'Step 3: Final Bill'}
                    </div>
                </div>

                {step === 1 && (
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-4">Step 1: Enter Address</h4>
                        <textarea className="form-control" rows="3" value={address} onChange={handleAddressChange} placeholder="Enter your shipping address"></textarea>
                        <button className="btn btn-primary mt-3" onClick={handleNextStep} disabled={!address}>
                            Continue to Payment
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-4">Step 2: Select Payment Method</h4>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="paymentMethod" value="Razorpay" onChange={handlePaymentChange} checked={paymentMethod === 'Razorpay'} />
                            <label className="form-check-label">Razorpay</label>
                        </div>
                        <button className="btn btn-primary mt-3" onClick={handleNextStep} disabled={!paymentMethod}>
                            Continue to Final Bill
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="card p-4 shadow-sm">
                        <h4 className="mb-4">Step 3: Final Bill</h4>
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
                        <div className="mb-4">
                            <label htmlFor="couponCode" className="form-label">Have a coupon code?</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="couponCode" placeholder="Enter coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                                <button className="btn btn-outline-secondary" onClick={applyCoupon}>Apply</button>
                            </div>
                            {discount > 0 && <p className="text-success mt-2">Coupon applied! You saved {discount}% on your order.</p>}
                        </div>
                        <h5>Total Price: <span className="text-success">INR {discount > 0 ? discountedPrice : totalPrice}</span></h5>
                        <button className="btn btn-success mt-3 w-100" onClick={handleNextStep}>
                            Place Order
                        </button>
                    </div>
                )}

                {orderPlaced && (
                    <div className="alert alert-success mt-4">
                        <h4 className="alert-heading">Order Confirmed!</h4>
                        <p>Your order has been placed successfully. Thank you for shopping with us!</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CartPage;
