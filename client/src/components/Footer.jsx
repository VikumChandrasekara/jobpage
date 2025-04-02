import React from 'react';
import '../css/Footer.css';
import jobhubLogo from '../assets/job-page-logo.png'; // Assuming you'll use the same logo
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Changed FaTwitter to FaTiktok

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-brand">
          <div className="logo">
            <img src={jobhubLogo} alt="JobHub Logo" />
          </div>
          <p className="footer-description">
            JobHub is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          {/* Company Column */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li><a href="/features">Feature</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/credit">Credit</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Download Column */}
          <div className="footer-column">
            <h3>Download</h3>
            <ul>
              <li><a href="/ios">iOS</a></li>
              <li><a href="/android">Android</a></li>
              <li><a href="/microsoft">Microsoft</a></li>
              <li><a href="/desktop">Desktop</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/help">Help</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="footer-bottom">
        <div className="copyright">
          <p>Copyright ©2021 <a href="/">Jobhub</a>. All Rights Reserved</p>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://tiktok.com" aria-label="TikTok"><FaTiktok /></a> {/* Changed to TikTok */}
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;