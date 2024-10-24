import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Main Content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
            </div>
          </div>

          {/* Sales Overview */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Sales</h5>
                  <p className="card-text">₹50,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">120</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <h2>Recent Orders</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Artwork</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Priyanshu</td>
                  <td>Abstract Art</td>
                  <td>₹4000</td>
                  <td>Shipped</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rahul</td>
                  <td>Modern Landscape</td>
                  <td>₹3500</td>
                  <td>Processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
