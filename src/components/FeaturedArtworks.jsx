import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';  // Import SweetAlert2


let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";

const FeaturedArtworks = () => {
    const [artworks, setArtworks] = useState([]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainer = useRef(null);

    // Fetch random artworks from the backend
    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axios.get(`${REACT_APP_BACKEND_URI}/api/artworks?limit=5`);
                setArtworks(response.data); // Assuming the API response contains an array of artworks
            } catch (error) {
                console.error('Error fetching featured artworks:', error);
            }
        };

        fetchArtworks();
    }, []);

    const handleScroll = () => {
        const container = scrollContainer.current;
        if (container.scrollLeft > 0) {
            setShowLeftArrow(true);
        } else {
            setShowLeftArrow(false);
        }

        if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
            setShowRightArrow(true);
        } else {
            setShowRightArrow(false);
        }
    };

    useEffect(() => {
        const container = scrollContainer.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    // Function to add artwork to the cart and store it in localStorage
    const addToCart = (artwork) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemInCart = cartItems.find(item => item.id === artwork.id);

        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            cartItems.push({ ...artwork, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // SweetAlert2 notification for adding to cart
        Swal.fire({
            title: 'Added to Cart!',
            text: `${artwork.title} has been added to your cart.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    // Function for Buy Now button: Move selected item to cart and remove others
    const buyNow = (artwork) => {
        // Clear the cart and add only the selected artwork
        const newCartItem = [{ ...artwork, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(newCartItem));

        // SweetAlert2 notification for buy now
        Swal.fire({
            title: 'Buy Now Successful!',
            text: `${artwork.title} is now in your cart! Proceed to checkout.`,
            icon: 'success',
            confirmButtonText: 'Proceed to Checkout'
        }).then((result) => {
            if (result.isConfirmed) {
                // Optional: Navigate to the checkout page
                window.location.href = '/cart';  // Example: Redirect to checkout page
            }
        });
    };

    return (
        <div style={{ position: 'relative' }}>
            <section className="featured-artworks" style={{ padding: '50px 0', backgroundColor: '#e2e6ea' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Featured Artworks</h2>
                    {/* Scrollable Row */}
                    <div
                        className="row flex-row flex-nowrap overflow-auto"
                        style={{ marginTop: '30px', scrollBehavior: 'smooth', position: 'relative' }}
                        ref={scrollContainer}
                    >
                        {artworks.length === 0 ? (
                            <p>Loading artworks...</p>
                        ) : (
                            artworks.map((artwork) => {
                                const discountPercentage = ((artwork.price - artwork.discountedPrice) / artwork.price) * 100;
                                return (
                                    <div className="col-md-4 col-9 mb-4" style={{ flex: '0 0 auto' }} key={artwork.id}>
                                        <div className="card" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                            <img
                                                src={artwork.image}
                                                alt={artwork.title}
                                                className="card-img-top"
                                                style={{ borderRadius: '10px 10px 0 0' }}
                                            />
                                            <div className="card-body">
                                                <h3 className="card-title" style={{ color: '#333', fontWeight: 'bold' }}>
                                                    {artwork.title}
                                                </h3>
                                                {/* Pricing Info */}
                                                <p style={{ color: '#333', marginBottom: '5px' }}>
                                                    <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
                                                        ₹{artwork.price}
                                                    </span>
                                                    <strong style={{ color: '#007bff' }}>₹{artwork.discountedPrice}</strong>
                                                </p>
                                                <p style={{ color: '#dc3545', fontWeight: 'bold' }}>
                                                    {Math.round(discountPercentage)}% Off
                                                </p>
                                                {/* Buttons */}
                                                <div className="buttons mt-3">
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ marginRight: '10px', backgroundColor: '#007bff', border: 'none' }}
                                                        onClick={() => buyNow(artwork)}
                                                    >
                                                        Buy Now
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        onClick={() => addToCart(artwork)}
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </section>

            {/* Left Scroll Arrow */}
            {showLeftArrow && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                    }}
                    onClick={scrollLeft}
                >
                    <FaArrowLeft size={30} color="#333" />
                </div>
            )}

            {/* Right Scroll Arrow */}
            {showRightArrow && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                    }}
                    onClick={scrollRight}
                >
                    <FaArrowRight size={30} color="#333" />
                </div>
            )}
        </div>
    );
};

export default FeaturedArtworks;
