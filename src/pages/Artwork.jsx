import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import artworks from "./portfolio.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtworkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artworks.find((art) => art.id === parseInt(id));
  const [mainImage, setMainImage] = useState(artwork.images[0]);

  if (!artwork) {
    return <h2>Artwork not found</h2>;
  }

  return (
    <div className="artwork-details">
      {/* Navbar */}
      <nav className="navbar bg-light shadow-sm mb-4">
        <div className="container">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="row">       
          {/* Left Column: Small Preview Images */}
          <div
            className="col-lg-1"
            style={{
              maxHeight: "10%", // Limit the height for scrolling
              overflowY: "auto",
              border: "1px solid #ddd",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {artwork.images.map((image, index) => (
              <div
                key={index}
                className="preview-image mb-2"
                onClick={() => setMainImage(image)}
                style={{
                  cursor: "pointer",
                  border: image === mainImage ? "2px solid blue" : "1px solid #ddd",
                  borderRadius: "5px",
                  borderStyle:"none"
                }}
              >
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height:"100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="col-lg-6">
            <img
              src={mainImage}
              className="img-fluid border"
              alt="Main artwork"
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
          </div>

          {/* Right Column: Artwork Details */}
          <div className="col-lg-4">
            <h1 className="mb-4"><strong>{artwork.title}</strong></h1>
            <p>
              <strong>Category:</strong> {artwork.category}
            </p>
            <p>{artwork.description}</p>
            <button className="btn btn-success mt-3">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;
