import React from 'react'

const PromotionalOffers = () => {
    return (
        <div>
            <section className="promotional-offers" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Limited Time Offers!</h2>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '20px' }}>
                        Get 20% off on your first purchase! Use code: FIRSTART
                    </p>
                    <a href="/shop" className="btn btn-primary" style={{ marginTop: '20px' }}>Shop Now</a>
                </div>
            </section>

        </div>
    )
}

export default PromotionalOffers
