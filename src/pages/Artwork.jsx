import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import artworks from "./output.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtworkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artworks.find((art) => art.id === (id));
  console.log(artwork);
  const [mainImage, setMainImage] = useState(artwork.images[0]);

  if (!artwork) {
    return <h2>Artwork not found</h2>;
  }

  // Calculate discounted price
  const discountedPrice = (parseInt(artwork.price) - parseInt(artwork.discount)).toFixed(2);

  return (
    <div className="artwork-details">
      {/* Navbar */}
      <nav className="navbar bg-light shadow-sm mb-4">
        <div className="container">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/#portfolio")}
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
              maxHeight: "480px",
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
                }}
              >
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="img-thumbnail"
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
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
            <h1 className="mb-4">
              <strong>{artwork.title}</strong>
            </h1>
            <p className="text-muted" style={{ fontSize: "0.9em" }}>
              <strong>Artwork ID:</strong> {artwork.id}
            </p>
            <p>
              <strong>Category:</strong> {artwork.category}
            </p>
            <p>
              <strong>Description:</strong> {artwork.description}
            </p>
            <div className="price-section mb-3">
              <p>
                <strong>Price (Inclusive of delivery):</strong>{" "}
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  ₹{parseInt(artwork.price).toFixed(2)}
                </span>{" "}
                <span style={{ color: "green", fontSize: "1.2em" }}>
                  ₹{discountedPrice}
                </span>
              </p>
              <p>
                <small>You save ₹{parseInt(artwork.discount).toFixed(2)}!</small>
              </p>
            </div>
            <div className="features mb-4">
              <ul>
                <li>
                  <strong>100% Original:</strong> This artwork is handcrafted and
                  authentic.
                </li>
                <li>
                  <strong>Not Returnable:</strong> Please make your purchase
                  carefully.
                </li>
              </ul>
            </div>

            <hr />

            <div className="art-prints">
              <h5><strong>Art Prints Available:</strong></h5>
              <p>
                Art prints of this artwork are available on a glossy sheet with 
                the following pricing:
              </p>
              <ul>
                <li>A4 or A5 size: ₹500</li>
                <li>A3 size: ₹800</li>
              </ul>
              <p>
                <strong>Delivery Charge for Prints:</strong> ₹100 (all over India)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetails;
