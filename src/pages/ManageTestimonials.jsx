import React, { useState, useEffect } from 'react';
// import Axios or use fetch API directly
// import axios from 'axios';


let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";


const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch existing testimonials
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`${REACT_APP_BACKEND_URI}/api/testimonial`);
                const data = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError('Error fetching testimonials');
            }
        };
        fetchTestimonials();
    }, []);

    // Add new testimonial
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !feedback) {
            setError('Please enter both name and feedback.');
            return;
        }

        const newTestimonial = {
            name,
            feedback,
        };

        try {
            setLoading(true);
            const response = await fetch('http://localhost:8000/api/testimonial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTestimonial),
            });

            const result = await response.json();

            if (response.ok) {
                setTestimonials([...testimonials, result]);
                setName('');
                setFeedback('');
                setError('');
            } else {
                setError(result.error || 'Failed to add testimonial.');
            }
        } catch (error) {
            setError('Error saving testimonial');
        } finally {
            setLoading(false);
        }
    };

    // Optionally, add delete functionality (you need to create the delete route)
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8000/api/testimonial/${id}`, { method: 'DELETE' });
            setTestimonials(testimonials.filter(testimonial => testimonial._id !== id));
        } catch (err) {
            setError('Error deleting testimonial');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Manage Testimonials</h2>

            {/* Error display */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Testimonial Form */}
            <form onSubmit={handleSubmit} className="mb-5">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name" 
                    />
                </div>
                <div className="form-group">
                    <label>Feedback</label>
                    <textarea 
                        className="form-control" 
                        value={feedback} 
                        onChange={(e) => setFeedback(e.target.value)} 
                        placeholder="Enter your feedback"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
                    {loading ? 'Saving...' : 'Submit'}
                </button>
            </form>

            {/* List of Testimonials */}
            <h3>Testimonials</h3>
            <ul className="list-group">
                {testimonials.map((testimonial) => (
                    <li key={testimonial._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{testimonial.name}</strong>
                            <p>{testimonial.feedback}</p>
                            {testimonial.profileImage && (
                                <img 
                                    src={testimonial.profileImage} 
                                    alt={testimonial.name} 
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                                />
                            )}
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(testimonial._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageTestimonials;
