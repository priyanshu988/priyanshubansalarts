import React from 'react'

const FeaturedArtworks = () => {
    return (
        <div>
            <section className="featured-artworks" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Featured Artworks</h2>
                    <div className="row" style={{ marginTop: '30px' }}>
                        {/* Repeat for each artwork */}
                        <div className="col-md-4">
                            <div className="artwork-box" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <img src="path/to/artwork1.jpg" alt="Artwork 1" className="img-fluid" style={{ borderRadius: '10px' }} />
                                <h3 style={{ color: '#333', fontWeight: 'bold', marginTop: '10px' }}>Artwork Title</h3>
                            </div>
                        </div>
                        {/* Add more artworks similarly */}
                        <div className="col-md-4">
                            <div className="artwork-box" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <img src="path/to/artwork1.jpg" alt="Artwork 1" className="img-fluid" style={{ borderRadius: '10px' }} />
                                <h3 style={{ color: '#333', fontWeight: 'bold', marginTop: '10px' }}>Artwork Title</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="artwork-box" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <img src="path/to/artwork1.jpg" alt="Artwork 1" className="img-fluid" style={{ borderRadius: '10px' }} />
                                <h3 style={{ color: '#333', fontWeight: 'bold', marginTop: '10px' }}>Artwork Title</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedArtworks
