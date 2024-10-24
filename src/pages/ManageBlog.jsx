import React, { useState } from 'react';

const ManageBlog = () => {
  const [blogData, setBlogData] = useState({
    wallpaper: '',
    title: '',
    shortDescription: '',
    readMoreUrl: ''
  });

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
      });

      if (response.ok) {
        const result = await response.json();
        alert('Blog added successfully!');
        // Optionally reset the form or redirect after submission
        setBlogData({
          wallpaper: '',
          title: '',
          shortDescription: '',
          readMoreUrl: ''
        });
      } else {
        alert('Failed to add blog');
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      alert('An error occurred while adding the blog.');
    }
  };

  return (
    <div className="container">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="wallpaper">Blog Wallpaper URL</label>
          <input
            type="text"
            className="form-control"
            id="wallpaper"
            name="wallpaper"
            value={blogData.wallpaper}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="shortDescription">Short Description</label>
          <textarea
            className="form-control"
            id="shortDescription"
            name="shortDescription"
            value={blogData.shortDescription}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="readMoreUrl">Read More URL</label>
          <input
            type="text"
            className="form-control"
            id="readMoreUrl"
            name="readMoreUrl"
            value={blogData.readMoreUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default ManageBlog;
