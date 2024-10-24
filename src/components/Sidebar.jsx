// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Admin Menu</span>
        </h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/admin">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-artworks">
              Manage Artworks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/management-coupon">
              Coupon Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/create-coupon">
              Create Coupon
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-blogs">
              Manage Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-testimonials">
              Manage Testimonial
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
