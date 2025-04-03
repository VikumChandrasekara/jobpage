import React from "react";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="header-section">
        <h1 className="welcome-heading">You are always welcome to visit our little den</h1>
      </div>

      <div className="locations-section">
        <div className="location-card">
          <h2>Office</h2>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@evara.com</p>
          <button className="view-map-btn">View map</button>
        </div>

        <div className="location-card">
          <h2>Studio</h2>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@evara.com</p>
          <button className="view-map-btn">View map</button>
        </div>

        <div className="location-card">
          <h2>Shop</h2>
          <p>205 North Michigan Avenue, Suite 810</p>
          <p>Chicago, 60601, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@evara.com</p>
          <button className="view-map-btn">View map</button>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="contact-heading">Drop Us a Line</h2>
        <p className="contact-subheading">Your email address will not be published. Required fields are marked *</p>

        <div className="contact-info">
          <div className="info-card">
            <div className="icon-container">
              <div className="icon phone-icon"></div>
            </div>
            <h3>Phone</h3>
            <p>+48 654-430-309</p>
            <p>+1 532-430-309</p>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <div className="icon email-icon"></div>
            </div>
            <h3>Email</h3>
            <p>contact@jobhub.com</p>
            <p>sales@jobhub.com</p>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <div className="icon address-icon"></div>
            </div>
            <h3>Address</h3>
            <p>11567 E Broadway Dr</p>
            <p>Colorado(CO), 80117</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Your name *" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email *" className="form-control" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="tel" placeholder="Phone number *" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject *" className="form-control" required />
            </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Message *" className="form-control message-area" required></textarea>
          </div>
          <button type="submit" className="send-message-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;