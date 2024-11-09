// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ManageArtworks from './pages/ManageArtworks';
import Sidebar from './components/Sidebar';
import ManageBlog from './pages/ManageBlog';
import ManageTestimonials from './pages/ManageTestimonials';
import CreateCoupon from './pages/CreateCoupon';
import CouponManagement from './pages/CouponManagement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CancellationRefund from './pages/CancellationRefund';
import ShippingAndDeliveryPage from './pages/ShippingAndDeliveryPage';
import { useState } from 'react';
import PasswordPopup from './components/PasswordPopup';

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const hardcodedPassword = '127';

  const handlePasswordSubmit = (enteredPassword) => {
      if (enteredPassword === hardcodedPassword) {
          setIsAuthenticated(true);
      } else {
          alert("Incorrect password. Please try again.");
      }
  };

  if (!isAuthenticated) {
      return <PasswordPopup onPasswordSubmit={handlePasswordSubmit} />;
  }

  return (
      <div className="container-fluid">
          <div className="row">
              <Sidebar />
              <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                  <Routes>
                      <Route path="" element={<Dashboard />} />
                      <Route path="manage-artworks" element={<ManageArtworks />} />
                      <Route path="manage-blogs" element={<ManageBlog />} />
                      <Route path="manage-testimonials" element={<ManageTestimonials />} />
                      <Route path="create-coupon" element={<CreateCoupon />} />
                      <Route path="management-coupon" element={<CouponManagement />} />
                  </Routes>
              </main>
          </div>
      </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping-and-delivery" element={<ShippingAndDeliveryPage />} />

          {/* Admin route with nested routes */}
          <Route path='/admin/*' element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
