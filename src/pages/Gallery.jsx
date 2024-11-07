import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';  // Import SweetAlert2


let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";

const Gallery = () => {
    const [artworks, setArtworks] = useState([]);
    const [sortedArtworks, setSortedArtworks] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        dimensions: '',
        price: '',
        medium: ''
    });
    const [filterOptions, setFilterOptions] = useState({
        categories: [],
        dimensions: [],
        mediums: []
    });

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await fetch(`${REACT_APP_BACKEND_URI}/api/artworks`);
                const data = await response.json();
                setArtworks(data);
                setSortedArtworks(data);

                const categories = [...new Set(data.map(artwork => artwork.category))];
                const dimensions = [...new Set(data.map(artwork => `${artwork.length}x${artwork.width}`))];
                const mediums = [...new Set(data.map(artwork => artwork.medium))];

                setFilterOptions({ categories, dimensions, mediums });
            } catch (error) {
                console.error("Error fetching artworks: ", error);
            }
        };

        fetchArtworks();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const filterArtworks = () => {
        let filtered = artworks.filter(artwork => {
            return (
                (filters.category === '' || artwork.category === filters.category) &&
                (filters.dimensions === '' || `${artwork.length}x${artwork.width}` === filters.dimensions) &&
                (filters.price === '' || artwork.discountedPrice <= parseInt(filters.price)) &&
                (filters.medium === '' || artwork.medium === filters.medium)
            );
        });
        setSortedArtworks(filtered);
    };

    const resetFilters = () => {
        setFilters({ category: '', dimensions: '', price: '', medium: '' });
        setSortedArtworks(artworks);
    };

    const addToCart = (artwork) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemInCart = cartItems.find(item => item.id === artwork.id);

        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            cartItems.push({ ...artwork, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        Swal.fire({
            title: 'Added to Cart!',
            text: `${artwork.title} has been added to your cart.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const buyNow = (artwork) => {
        const newCartItem = [{ ...artwork, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(newCartItem));

        Swal.fire({
            title: 'Buy Now Successful!',
            text: `${artwork.title} is now in your cart! Proceed to checkout.`,
            icon: 'success',
            confirmButtonText: 'Proceed to Checkout'
        }).then((result) => {
            if (result.isConfirmed) {
                // Optional: Redirect to the checkout page
                window.location.href = '/cart';
            }
        });
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
                        <div className="d-md-none mb-4">
                            <button className="btn btn-secondary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filterSidebar" aria-expanded="false" aria-controls="filterSidebar">
                                Filter Artworks
                            </button>
                        </div>
                        <div className="collapse d-md-block" id="filterSidebar">
                            <div className="filter-sidebar p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', position: 'sticky', top: '0', height: '100vh' }}>
                                <h4 className="mb-3" style={{ color: '#333' }}>Filter Artworks</h4>

                                {/* Filter by Category */}
                                <div className="mb-4">
                                    <label className="form-label">Category</label>
                                    <select className="form-select" name="category" value={filters.category} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {filterOptions.categories.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Filter by Dimensions */}
                                <div className="mb-4">
                                    <label className="form-label">Dimensions (cm)</label>
                                    <select className="form-select" name="dimensions" value={filters.dimensions} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {filterOptions.dimensions.map((dimension, index) => (
                                            <option key={index} value={dimension}>{dimension}</option>
                                        ))}
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
                                        {filterOptions.mediums.map((medium, index) => (
                                            <option key={index} value={medium}>{medium}</option>
                                        ))}
                                    </select>
                                </div>

                                <button className="btn btn-primary w-100" onClick={filterArtworks}>Apply Filters</button>
                                <button className="btn btn-secondary w-100 mt-3" onClick={resetFilters}>Reset Filters</button>
                            </div>
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
                                                <p style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '10px' }}>
                                                    {discountPercent}% OFF
                                                </p>

                                                <p className="card-text" style={{ color: '#666' }}>Medium: {artwork.medium}</p>
                                                <p className="card-text" style={{ color: '#666' }}>Dimensions: {artwork.length}x{artwork.width}</p>

                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-success" onClick={() => addToCart(artwork)}>Add to Cart</button>
                                                    <button className="btn btn-primary" onClick={() => buyNow(artwork)}>Buy Now</button>
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
            <Footer />
        </div>
    );
};

export default Gallery;
