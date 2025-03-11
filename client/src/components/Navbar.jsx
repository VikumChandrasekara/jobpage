import React from 'react';
import '../css/Navbar.css';
import jobpagelogo from '../assets/job-page-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={jobpagelogo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#browse-jobs">Browse Jobs</a></li>
        <li><a href="#top-companies">Top Companies</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#pages">Pages</a></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button className="apply-btn">Apply for Job</button>
        <button className="post-btn">Post Vacancy</button>
      </div>
    </nav>
  );
};

export default Navbar;
