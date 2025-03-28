import React, { useRef } from "react";
import f from "../assets/Newsletter.png"; // Image location
import "../css/F.css"; // Import CSS file
import { FaPaperPlane } from "react-icons/fa"; // Import send icon

const F = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="newsletter-container">
      <div>
      {/* Image */}
      <img src={f} alt="Newsletter" className="newsletter-image" />

      {/* Overlay Text */}
      <div className="newsletter-text">
        <h3>Sign up to get</h3>
        <h1>the latest jobs</h1>
      </div>

      {/* Email Input Box & Subscribe Button */}
      <div className="email-container">
        <input
          type="email"
          placeholder="your-email@gmail.com"
          className="email-input"
        />
        <button className="subscribe-button">
          Subscribe <FaPaperPlane />
        </button>
      </div>
      </div>
      {/* Image Slider */}
      <div className="image-slider-container">
        <button className="slider-button" onClick={scrollLeft}>‹</button>
        <div className="image-slider" ref={sliderRef}>
          <div className="slider-box"><img src=" image1.jpg" alt="Slide 1"/></div>
          <div className="slider-box"><img src="image2.jpg" alt="Slide 2" /></div>
          <div className="slider-box"><img src="image3.jpg" alt="Slide 3" /></div>
          <div className="slider-box"><img src="image4.jpg" alt="Slide 4" /></div>
          <div className="slider-box"><img src="image5.jpg" alt="Slide 5" /></div>
          <div className="slider-box"><img src="image6.jpg" alt="Slide 6" /></div>
          <div className="slider-box"><img src="image7.jpg" alt="Slide 7" /></div>
        </div>
        <button className="slider-button" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default F;
