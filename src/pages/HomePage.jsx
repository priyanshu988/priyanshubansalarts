import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import FeaturedArtworks from '../components/FeaturedArtworks';
import PromotionalOffers from '../components/PromotionalOffers';
import Blog from '../components/Blog';
import NewsletterSubscription from '../components/NewsletterSubscription';


// let REACT_APP_BACKEND_URI = "https://backend-pbarts.onrender.com";


function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <Banner />


      {/* About Me Section */}
      <section className="about-me" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
        <div className="container text-center">
          <h2 style={{ color: '#333', fontWeight: 'bold' }}>About Me</h2>
          <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '20px' }}>
            Hi, I’m Priyanshu Bansal, a full-time Software Development Engineer and a part-time artist. Welcome to my art store where I showcase and sell my handmade paintings. Each piece is crafted with passion and creativity to bring out the essence of art in everyday life.
          </p>
        </div>
      </section>
      {/* Featured Artworks Section */}
      <FeaturedArtworks />

      {/* Promotional Offers Section */}
      <PromotionalOffers />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Blog Section */}
      <Blog />

      {/* Newsletter Subscription Section */}
      <NewsletterSubscription />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
