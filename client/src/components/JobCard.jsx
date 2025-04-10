import React from 'react';
import '../css/JobCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faEye } from '@fortawesome/free-solid-svg-icons';

const JobCard = ({ 
  hot,
  image,
  logo,
  company,
  position,
  location,
  salary,
  workTime,
  postedTime,
  views
}) => {
  return (
    <div className="job-card">
      {hot && <div className="hot-tag">URGENT</div>}
      
      <div className="job-card-image">
        <img src={image} alt={position} />
      </div>
      
      <div className="job-card-content">
        <div className="company-info">
          <div className="company-name">{company}</div>
        </div>
        
        <h3 className="job-title">{position}</h3>
        
        <div className="job-meta">
          <div className="job-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            {location}
          </div>
          <div className="job-time">
            <FontAwesomeIcon icon={faClock} className="icon" />
            {workTime}
          </div>
        </div>
        
        <div className="job-footer">
          <div className="job-salary">${salary}K</div>
          <div className="job-stats">
            <span className="time-posted">{postedTime}</span>
            <span className="view-count">
              <FontAwesomeIcon icon={faEye} className="icon-small" />
              {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;