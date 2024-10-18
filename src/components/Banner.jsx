import React from 'react';

const Banner = () => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1682124010167-fa54b4c36140?q=80&w=2777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          position: 'relative',
        }}
      >
        {/* Dark overlay */}
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
          }}
        ></div>

        {/* Banner content */}
        <div
          className="banner-content text-center"
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative', // Keep the content above the overlay
            zIndex: 1, // Make sure the text stays on top
          }}
        >
          <h1 style={{ color: '#fff', fontSize: '7rem', fontWeight: 'bold' }}>Discover My Art</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
