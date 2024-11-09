import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShippingAndDeliveryPage = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mb-4">Shipping and Delivery</h1>
                
                {/* Shipping Methods */}
                <section className="mb-5">
                    <h3>Shipping Methods</h3>
                    <p>
                        We offer several shipping options to meet your needs. Once your order is placed, you will receive a confirmation email with tracking information and delivery estimates.
                    </p>
                    <ul>
                        <li><strong>Standard Shipping:</strong> Delivered within 5-7 business days.</li>
                        <li><strong>Express Shipping:</strong> Delivered within 2-3 business days.</li>
                        <li><strong>Overnight Shipping:</strong> Delivered by the next business day (additional fees apply).</li>
                    </ul>
                </section>
                
                {/* Estimated Delivery Times */}
                <section className="mb-5">
                    <h3>Estimated Delivery Times</h3>
                    <p>
                        Estimated delivery times vary based on location and chosen shipping method. Please note that delivery times may be affected by holidays, weather conditions, or other unexpected events.
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Region</th>
                                <th>Standard Delivery</th>
                                <th>Express Delivery</th>
                                <th>Overnight Delivery</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Within India</td>
                                <td>5-7 days</td>
                                <td>2-3 days</td>
                                <td>1 day</td>
                            </tr>
                            <tr>
                                <td>International</td>
                                <td>10-15 days</td>
                                <td>5-7 days</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Shipping Charges */}
                <section className="mb-5">
                    <h3>Shipping Charges</h3>
                    <p>
                        Shipping charges are calculated at checkout and are based on the weight and destination of your order. Orders over INR 2000 qualify for free standard shipping within India.
                    </p>
                    <ul>
                        <li><strong>Standard Shipping:</strong> INR 50 (within India), calculated at checkout for international orders.</li>
                        <li><strong>Express Shipping:</strong> Additional charges apply based on location.</li>
                        <li><strong>Overnight Shipping:</strong> Additional charges apply and vary based on location.</li>
                    </ul>
                </section>

                {/* Order Tracking */}
                <section className="mb-5">
                    <h3>Order Tracking</h3>
                    <p>
                        Once your order has shipped, you will receive an email with tracking information. You can use this information to track your package online. If you have any questions about your order status, please contact our customer support.
                    </p>
                    <p><strong>Customer Support Email:</strong> support@pbarts.com</p>
                    <p><strong>Phone:</strong> +91 1234567890</p>
                </section>
                
                {/* Additional Information */}
                <section className="mb-5">
                    <h3>Additional Information</h3>
                    <p>
                        Please ensure your shipping address is correct at checkout. We cannot change shipping addresses once an order has been processed. In case of delivery issues, please reach out to our support team within 5 days of the expected delivery date.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default ShippingAndDeliveryPage;
