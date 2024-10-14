import React from 'react'

const NewsletterSubscription = () => {
    return (
        <div>
            <section className="newsletter" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Stay Updated!</h2>
                    <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '20px' }}>
                        Subscribe to our newsletter for exclusive offers and updates on new artworks.
                    </p>
                    <form>
                        <input type="email" placeholder="Enter your email" style={{ padding: '10px', width: '300px', marginRight: '10px' }} required />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default NewsletterSubscription
