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
            <Link className="nav-link" to="/admin/customers">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/sales-reports">
              Sales Reports
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
