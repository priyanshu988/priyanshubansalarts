import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const artworksData = [
    {
        id: 1,
        title: 'Artwork 1',
        category: 'Landscape',
        dimensions: '24x36',
        price: 5000,         // Selling Price
        discountedPrice: 4000, // Discounted Price
        medium: 'Acrylic',
        image: 'https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=80&w=2393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        title: 'Artwork 2',
        category: 'Abstract',
        dimensions: '18x24',
        price: 3000,         // Selling Price
        discountedPrice: 2500, // Discounted Price
        medium: 'Oil',
        image: 'https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=80&w=2393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // Add more artworks
];

const Gallery = () => {
    const [filters, setFilters] = useState({
        category: '',
        dimensions: '',
        price: '',
        medium: ''
    });

    const [sortedArtworks, setSortedArtworks] = useState(artworksData);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const filterArtworks = () => {
        let filtered = artworksData.filter(artwork => {
            return (
                (filters.category === '' || artwork.category === filters.category) &&
                (filters.dimensions === '' || artwork.dimensions === filters.dimensions) &&
                (filters.price === '' || artwork.price <= parseInt(filters.price)) &&
                (filters.medium === '' || artwork.medium === filters.medium)
            );
        });
        setSortedArtworks(filtered);
    };

    const resetFilters = () => {
        setFilters({ category: '', dimensions: '', price: '', medium: '' });
        setSortedArtworks(artworksData);
    };

    return (
        <div>
            <Navbar />

            {/* Dark Background Banner Section */}
            <section className="banner-section" style={{ backgroundColor: '#333', padding: '60px 0', color: '#fff', textAlign: 'center' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Our Art Gallery</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Explore our exclusive collection of artworks</p>
            </section>

            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar for Filters */}
                    <div className="col-md-3">
                        <div className="filter-sidebar p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', position: 'sticky', top: '0', height: '100vh' }}>
                            <h4 className="mb-3" style={{ color: '#333' }}>Filter Artworks</h4>

                            {/* Filter by Category */}
                            <div className="mb-4">
                                <label className="form-label">Category</label>
                                <select className="form-select" name="category" value={filters.category} onChange={handleFilterChange}>
                                    <option value="">All</option>
                                    <option value="Landscape">Landscape</option>
                                    <option value="Abstract">Abstract</option>
                                    <option value="Portrait">Portrait</option>
                                </select>
                            </div>

                            {/* Filter by Dimensions */}
                            <div className="mb-4">
                                <label className="form-label">Dimensions</label>
                                <select className="form-select" name="dimensions" value={filters.dimensions} onChange={handleFilterChange}>
                                    <option value="">All</option>
                                    <option value="18x24">18x24</option>
                                    <option value="24x36">24x36</option>
                                    <option value="30x40">30x40</option>
                                </select>
                            </div>

                            {/* Filter by Price */}
                            <div className="mb-4">
                                <label className="form-label">Max Price (INR)</label>
                                <input type="number" className="form-control" name="price" value={filters.price} onChange={handleFilterChange} placeholder="Enter max price" />
                            </div>

                            {/* Filter by Medium */}
                            <div className="mb-4">
                                <label className="form-label">Medium</label>
                                <select className="form-select" name="medium" value={filters.medium} onChange={handleFilterChange}>
                                    <option value="">All</option>
                                    <option value="Acrylic">Acrylic</option>
                                    <option value="Oil">Oil</option>
                                    <option value="Watercolor">Watercolor</option>
                                </select>
                            </div>

                            <button className="btn btn-primary w-100" onClick={filterArtworks}>Apply Filters</button>
                            <button className="btn btn-secondary w-100 mt-3" onClick={resetFilters}>Reset Filters</button>
                        </div>
                    </div>

                    {/* Artwork Grid */}
                    <div className="col-md-9">
                        <div className="row" style={{ marginTop: '30px', height: '80vh', overflowY: 'scroll' }}>
                            {sortedArtworks.map(artwork => {
                                const discountPercent = Math.round(((artwork.price - artwork.discountedPrice) / artwork.price) * 100);
                                return (
                                    <div className="col-md-4 mb-4" key={artwork.id}>
                                        <div className="card" style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                            <img src={artwork.image} className="card-img-top" alt={artwork.title} style={{ borderRadius: '10px 10px 0 0' }} />
                                            <div className="card-body text-center">
                                                <h5 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>{artwork.title}</h5>
                                                
                                                {/* Eye-catching Price Design */}
                                                <p className="card-text" style={{
                                                    color: '#333',
                                                    fontSize: '1.2rem',
                                                    fontWeight: 'bold',
                                                }}>
                                                    <span style={{
                                                        textDecoration: 'line-through',
                                                        color: '#888',
                                                        marginRight: '10px',
                                                        fontSize: '1rem'
                                                    }}>
                                                        INR {artwork.price}
                                                    </span>
                                                    <span style={{ color: '#ff6347', fontSize: '1.5rem' }}>
                                                        INR {artwork.discountedPrice}
                                                    </span>
                                                </p>
                                                {/* Discount Percentage */}
                                                <p style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '10px' }}>
                                                    {discountPercent}% OFF
                                                </p>

                                                <p className="card-text" style={{ color: '#666' }}>Medium: {artwork.medium}</p>
                                                <p className="card-text" style={{ color: '#666' }}>Dimensions: {artwork.dimensions}</p>

                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-success">Add to Cart</button>
                                                    <button className="btn btn-primary">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
