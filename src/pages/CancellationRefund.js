import React from 'react';

const CancellationRefund = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center mb-4">Cancellation and Refund Policy</h1>
            <div className="card p-4 shadow-sm">
                <h3>Order Cancellations</h3>
                <p>
                    You may cancel your order at any time before it has been shipped. Once an order is shipped, it cannot be canceled. 
                    To cancel an order, please contact our support team at <a href="mailto:support@pbarts.com">support@pbarts.com</a> with your order details.
                </p>

                <h3>Refund Eligibility</h3>
                <p>
                    We offer refunds for items that are defective, damaged, or not as described. To be eligible for a refund, please notify us within 7 days of receiving the item. 
                    Our team will review your request and, if eligible, we will initiate a refund. Refunds are processed within 5-7 business days after approval.
                </p>

                <h3>Non-Refundable Items</h3>
                <p>
                    Certain items are not eligible for refund, including:
                    <ul>
                        <li>Custom or personalized orders</li>
                        <li>Items on sale or promotional discounts</li>
                        <li>Digital products (if applicable)</li>
                    </ul>
                </p>

                <h3>Return Process</h3>
                <p>
                    If you need to return an item, please follow these steps:
                    <ol>
                        <li>Contact our support team at <a href="mailto:support@pbarts.com">support@pbarts.com</a> with your order ID and reason for return.</li>
                        <li>Our team will provide instructions for the return, if eligible.</li>
                        <li>Once we receive and inspect the returned item, we will process the refund if applicable.</li>
                    </ol>
                </p>

                <h3>Refund Processing Time</h3>
                <p>
                    Refunds are processed to the original payment method. Once approved, please allow 5-7 business days for the funds to appear in your account, 
                    depending on your bank or card issuer.
                </p>

                <h3>Contact Us</h3>
                <p>
                    If you have any questions or concerns about our Cancellation and Refund Policy, please reach out to us at <a href="mailto:support@pbarts.com">support@pbarts.com</a>.
                </p>
            </div>
        </div>
    );
};

export default CancellationRefund;
