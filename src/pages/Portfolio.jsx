import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import artworks from "./output.json";


const Portfolio = () => {
    const [filter, setFilter] = useState("*");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Portfolio items data
  const portfolioItems = artworks;

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === filter);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li
                data-filter="*"
                className={filter === "*" ? "filter-active" : ""}
                onClick={() => handleFilterClick("*")}
              >
                All
              </li>
              <li
                data-filter=".filter-6-6"
                className={filter === "filter-6-6" ? "filter-active" : ""}
                onClick={() => handleFilterClick("filter-6-6")}
              >
                6 x 6
              </li>
              <li
                data-filter=".filter-6-8"
                className={filter === "filter-6-8" ? "filter-active" : ""}
                onClick={() => handleFilterClick("filter-6-8")}
              >
                6 x 8
              </li>
              <li
                data-filter=".filter-8-10"
                className={filter === "filter-8-10" ? "filter-active" : ""}
                onClick={() => handleFilterClick("filter-8-10")}
              >
                8 x 10
              </li>
              <li
                data-filter=".filter-10-12"
                className={filter === "filter-10-12" ? "filter-active" : ""}
                onClick={() => handleFilterClick("filter-10-12")}
              >
                10 x 12
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 portfolio-item ${item.filter}`}
            >
              <div className="portfolio-wrap">
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <div className="portfolio-links">
                    <a
                      href={`/artwork/${item.id}`}
                      data-gall="portfolioDetailsGallery"
                      data-vbtype="iframe"
                      className="venobox"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
