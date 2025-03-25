import React from "react";
import banner from "../assets/banner.png"; // location

const Banner = () => {
  return (
    <img 
      src={banner} 
      alt="Banner" 
      style={{ display: "block", margin: "0 auto" }} 
    />
  );
};

export default Banner;
