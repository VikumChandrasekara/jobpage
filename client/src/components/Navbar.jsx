import React, { useState } from 'react';
import '../css/Navbar.css';
import jobpagelogo from '../assets/job-page-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        {/* Logo */}
        <div className="logo">
          <img src={jobpagelogo} alt="Logo" />
        </div>

        {/* Hamburger Menu */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links and Buttons */}
        <div className={`navbar-collapse ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#browse-jobs" onClick={() => setIsMenuOpen(false)}>Browse Jobs</a></li>
            <li><a href="#top-companies" onClick={() => setIsMenuOpen(false)}>Top Companies</a></li>
            <li><a href="#blogs" onClick={() => setIsMenuOpen(false)}>Blogs</a></li>
            <li><a href="#pages" onClick={() => setIsMenuOpen(false)}>Pages</a></li>
          </ul>

          <div className="nav-buttons">
            <button className="apply-btn" onClick={() => setIsMenuOpen(false)}>Apply for Job</button>
            <button className="post-btn" onClick={() => setIsMenuOpen(false)}>Post Vacancy</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;