import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <section className="testimonials" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Testimonials</h2>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-md-4">
                            <div className="testimonial-box" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    "Priyanshu's artwork is simply stunning. The quality and detail are remarkable. I love how his paintings bring life to my living room."
                                </p>
                                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Customer A</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial-box" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    "Fantastic customer service and truly one-of-a-kind pieces. I’ll definitely be purchasing more from this store."
                                </p>
                                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Customer B</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial-box" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    "The artwork from Priyanshu’s store is unique and adds elegance to my office space. Highly recommended!"
                                </p>
                                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Customer C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
