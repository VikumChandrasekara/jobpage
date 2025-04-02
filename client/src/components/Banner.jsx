import React from "react";
import banner from "../assets/banner.png"; // location
import '../css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img 
        src={banner} 
        alt="Banner"
      />  
    </div>
  );
};

export default Banner;
