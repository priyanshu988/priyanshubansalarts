// ManageArtworks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageArtworks = () => {
    const [artworks, setArtworks] = useState([]);
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        category: '',
        length: '',
        width: '',
        originalPrice: '',
        discountedPrice: '',
        medium: '',
    });
    const [imageFile, setImageFile] = useState(null);

    // Fetch existing artworks from the backend
    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/artworks');
                setArtworks(response.data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        fetchArtworks();
    }, []);

    // Handle form changes
    const handleChange = (e) => {
        setNewArtwork({
            ...newArtwork,
            [e.target.name]: e.target.value,
        });
    };

    // Handle image file selection
    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]); // Store the selected image file in state
    };

    // Handle form submit to add new artwork
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Prepare form data
            const formData = new FormData();
            formData.append('title', newArtwork.title);
            formData.append('category', newArtwork.category);
            formData.append('length', newArtwork.length);
            formData.append('width', newArtwork.width);
            formData.append('originalPrice', newArtwork.originalPrice);
            formData.append('discountedPrice', newArtwork.discountedPrice);
            formData.append('medium', newArtwork.medium);
            if (imageFile) {
                formData.append('image', imageFile); // Append the image file to the form data
            }

            // Send the form data to the backend
            const response = await axios.post('http://localhost:8000/api/artworks', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setArtworks([...artworks, response.data]); // Add new artwork to list
            setNewArtwork({
                title: '',
                category: '',
                dimensions: '',
                originalPrice: '',
                discountedPrice: '',
                medium: '',
            }); // Reset form
            setImageFile(null); // Clear image file
        } catch (error) {
            console.error('Error adding artwork:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Manage Artworks</h2>

            {/* Form to add a new artwork */}
            <form onSubmit={handleSubmit} className="mb-5" encType="multipart/form-data">
                {/* Other form fields */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={newArtwork.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            name="category"
                            value={newArtwork.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="dimensions">Dimensions (Length x Width)</label>
                        <div className="form-row">
                            {/* Length Input */}
                            <div className="col">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="length"
                                        name="length"
                                        value={newArtwork.length}
                                        onChange={handleChange}
                                        placeholder="Length"
                                        required
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">cm</span> {/* You can change 'cm' to 'inch' */}
                                    </div>
                                </div>
                            </div>

                            {/* Width Input */}
                            <div className="col mt-1">
                                <div className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="width"
                                        name="width"
                                        value={newArtwork.width}
                                        onChange={handleChange}
                                        placeholder="Width"
                                        required
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text">cm</span> {/* You can change 'cm' to 'inch' */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="originalPrice">Original Price</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">₹</span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="originalPrice"
                                name="originalPrice"
                                value={newArtwork.originalPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="discountedPrice">Discounted Price</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">₹</span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="discountedPrice"
                                name="discountedPrice"
                                value={newArtwork.discountedPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="medium">Medium</label>
                        <input
                            type="text"
                            className="form-control"
                            id="medium"
                            name="medium"
                            value={newArtwork.medium}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="image">Upload Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <div className="form-group col-md-6 mt-2">
                    <button type="submit" className="form-control btn btn-primary">Add Artwork</button>
                </div>
            </form>

            {/* List of existing artworks */}
            <h3>Existing Artworks</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Dimensions</th>
                        <th>Original Price</th>
                        <th>Discounted Price</th>
                        <th>Medium</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {artworks.map((artwork) => (
                        <tr key={artwork._id}>
                            <td>{artwork.title}</td>
                            <td>{artwork.category}</td>
                            <td>{artwork.dimensions}</td>
                            <td>{artwork.originalPrice}</td>
                            <td>{artwork.discountedPrice}</td>
                            <td>{artwork.medium}</td>
                            <td>
                                <img src={artwork.imageUrl} alt={artwork.title} style={{ width: '50px' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageArtworks;
