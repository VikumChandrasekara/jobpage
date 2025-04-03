import React from "react";
import "../css/JobDetailsDis.css";
import jobdetails from "../assets/jobdetails.png"; // location


const JobDetailsDis = () => {
  return (
    <div className="job-details-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Job Title Section */}
      <section className="job-title-section">
        <h1>Senior UI / UX Designer</h1>
        <div className="breadcrumb">
          <a href="#">Home</a> / <a href="#">Jobs</a> / <span>Details</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <div className="job-listing-container">
          {/* Featured Job */}
          <section className="job-featured">
            <h2>Office Assistant - R.M.D Consultants (Pvt) Ltd Job Vacancies 2023</h2>
            <div className="breadcrumb">
              <a href="#">Home</a> / <a href="#">Latest Jobs</a>
            </div>
            
            <div className="company-image">
              <img src={jobdetails} alt="Office meeting with diverse professionals" />
            </div>
            
            <h3 className="job-section-title">The AliStudio Team</h3>
            
            <div className="job-description">
              <p>The <b>AliStudiO Design</b> team has a vision to estab"sh a trusted platform that enables productive and healthy
enterprises in a world of digital aruß remote everything. constantly changing work patterns and norms, and the need
for organizational resiliency.
The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for
illustrative design and typography. This candidate will have experiences in working Wth numerous different design
platforms such as digital and print forms.</p>
            </div>

            <h3 className="job-section-title">Essential Knowledge, Skills, and Experience</h3>

            <div className="job-description">
              <p>
                <li>A portfolio demonstrating thought through and polished end to end custorner journeys</li>
                <li>A portfolio demonstrating thought through and polished end to end custorner journeys</li>
                <li>A portfolio demonstrating thought through and polished end to end custorner journeys</li>
                <li>A portfolio demonstrating thought through and polished end to end custorner journeys</li>
                <li>A portfolio demonstrating thought through and polished end to end custorner journeys</li>
                <li>A portfolio demonstrating thought through and polished end to end custorner journeys</li>
             </p>
            </div>
            
            <div className="share-buttons">
              <button className="btn-share">Save Job</button>
              <div className="social-share">
                <button className="btn-facebook">Facebook</button>
                <button className="btn-whatsapp">WhatsApp</button>
                <button className="btn-twitter">Twitter</button>
                <button className="btn-pinterest">Pinterest</button>
              </div>
            </div>
          </section>
          <br></br>
          <h1>Related Jobs</h1>
          
        </div>
        
        {/* Sidebar */}
        <aside className="job-sidebar">
          <div className="job-details-card">
            <ul className="job-meta">
              <li>
                <i className="icon-job-type"></i>
                <div>
                  <strong>Job Type</strong>
                  <p>Full-time / Remote</p>
                </div>
              </li>
              
              <li>
                <i className="icon-location"></i>
                <div>
                  <strong>Location</strong>
                  <p>Dallas, Texas</p>
                  <p>Remote Friendly</p>
                </div>
              </li>
              
              <li>
                <i className="icon-salary"></i>
                <div>
                  <strong>Salary</strong>
                  <p>$35k - $45k</p>
                </div>
              </li>
              
              <li>
                <i className="icon-posted"></i>
                <div>
                  <strong>Date posted</strong>
                  <p>1 hours ago</p>
                </div>
              </li>
              
              <li>
                <i className="icon-expiration"></i>
                <div>
                  <strong>Expiration date</strong>
                  <p>April 06, 2023</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="follow-section">
            <h3>FOLLOW US</h3>
            <div className="social-grid">
              <a href="#" className="social-item facebook">
                <span className="count">8.5k</span>
                <span className="label">Fans</span>
              </a>
              <a href="#" className="social-item youtube">
                <span className="count">8.7k</span>
                <span className="label">Subscribers</span>
              </a>
              <a href="#" className="social-item twitter">
                <span className="count">5.2k</span>
                <span className="label">Followers</span>
              </a>
              <a href="#" className="social-item website">
                <span className="label">Visit Website</span>
              </a>
              <a href="#" className="social-item whatsapp">
                <span className="label">WhatsApp</span>
              </a>
              <a href="#" className="social-item instagram">
                <span className="label">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="apply-widget">
            <h3>Apply for any job</h3>
            <button className="btn-apply-any">Apply for any job</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JobDetailsDis;