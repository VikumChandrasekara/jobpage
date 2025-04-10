import React, { useState } from 'react';
import JobCard from './JobCard';
import '../css/JobBoard.css';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faBriefcase, 
  faBuilding, 
  faChartLine, 
  faDollarSign,
  faFilter,
  faBell
} from '@fortawesome/free-solid-svg-icons';

const JobBoard = ({ jobs }) => {
  // Take the first job separately for the first component
  const firstJob = jobs[0];
  const remainingJobs = jobs.slice(1);

  // For salary range
  const [salaryRange, setSalaryRange] = useState([1200, 60000]);
  const [sliderValues, setSliderValues] = useState([20, 60]); // Percentage values for slider

  const handleSalaryInputChange = (e, index) => {
    const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
    const newRange = [...salaryRange];
    newRange[index] = value;
    setSalaryRange(newRange);
    
    // Update slider positions based on input values
    const minValue = 0;
    const maxValue = 100000;
    const range = maxValue - minValue;
    
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = ((value - minValue) / range) * 100;
    setSliderValues(newSliderValues);
  };

  const handleSliderChange = (e, index) => {
    const value = parseInt(e.target.value);
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = value;
    setSliderValues(newSliderValues);
    
    // Update salary input values based on slider positions
    const minValue = 0;
    const maxValue = 100000;
    const range = maxValue - minValue;
    
    const newSalaryRange = [...salaryRange];
    newSalaryRange[index] = Math.round((value / 100) * range) + minValue;
    setSalaryRange(newSalaryRange);
  };

  const resetFilters = () => {
    setSalaryRange([1200, 60000]);
    setSliderValues([20, 60]);
    // Reset other filters as needed
  };

  return (
    <div className="job-board-container">
      <div className="filters-sidebar">
        <div className="filter-section">
          <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</h3>
          <div className="location-search">
            <input 
              type="text" 
              placeholder="Search location..." 
              className="location-input"
            />
          </div>
          <div className="filter-option">
            <input type="checkbox" id="loc-remote" />
            <label htmlFor="loc-remote">Remote</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="loc-onsite" />
            <label htmlFor="loc-onsite">On-site</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="loc-hybrid" />
            <label htmlFor="loc-hybrid">Hybrid</label>
          </div>
        </div>
        
        <div className="filter-section">
          <h3><FontAwesomeIcon icon={faBuilding} /> Category</h3>
          <div className="category-search">
            <input 
              type="text" 
              placeholder="Search category..." 
              className="category-input"
            />
          </div>
          <div className="filter-option">
            <input type="checkbox" id="cat-tech" />
            <label htmlFor="cat-tech">Technology</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="cat-design" />
            <label htmlFor="cat-design">Design</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="cat-marketing" />
            <label htmlFor="cat-marketing">Marketing</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="cat-finance" />
            <label htmlFor="cat-finance">Finance</label>
          </div>
        </div>
        
        <div className="filter-section">
          <h3><FontAwesomeIcon icon={faBriefcase} /> Job type</h3>
          <div className="filter-option">
            <input type="checkbox" id="full-time" />
            <label htmlFor="full-time">Full time</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="part-time" />
            <label htmlFor="part-time">Part time</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="remote" />
            <label htmlFor="remote">Remote</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="internship" />
            <label htmlFor="internship">Internship</label>
          </div>
        </div>
        
        <div className="filter-section">
          <h3><FontAwesomeIcon icon={faChartLine} /> Experience Level</h3>
          <div className="filter-option">
            <input type="checkbox" id="exp-entry" />
            <label htmlFor="exp-entry">Entry Level</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="exp-mid" />
            <label htmlFor="exp-mid">Mid Level</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="exp-senior" />
            <label htmlFor="exp-senior">Senior Level</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="exp-manager" />
            <label htmlFor="exp-manager">Manager</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="exp-executive" />
            <label htmlFor="exp-executive">Executive</label>
          </div>
        </div>
        
        <div className="filter-section salary-range-section">
          <h3><FontAwesomeIcon icon={faDollarSign} /> Salary Range</h3>
          
          <div className="salary-slider-container">
            <div className="salary-slider-track">
              <div 
                className="salary-slider-progress" 
                style={{
                  left: `${sliderValues[0]}%`,
                  width: `${sliderValues[1] - sliderValues[0]}%`
                }}
              ></div>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderValues[0]} 
              onChange={(e) => handleSliderChange(e, 0)}
              className="salary-range-input min-value"
            />
            
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderValues[1]} 
              onChange={(e) => handleSliderChange(e, 1)}
              className="salary-range-input max-value"
            />
          </div>
          
          <div className="salary-labels">
            <div>From</div>
            <div>To</div>
          </div>
          
          <div className="salary-input-fields">
            <input 
              type="text" 
              value={salaryRange[0].toLocaleString()}
              onChange={(e) => handleSalaryInputChange(e, 0)}
              className="salary-text-input"
            />
            <div className="salary-separator">-</div>
            <input 
              type="text" 
              value={salaryRange[1].toLocaleString()}
              onChange={(e) => handleSalaryInputChange(e, 1)}
              className="salary-text-input"
            />
          </div>
          
          <div className="salary-filter-buttons">
            <button className="apply-filter-button">Apply Filter</button>
            <button className="reset-filter-button" onClick={resetFilters}>Reset filter</button>
          </div>
        </div>
        
        <div className="job-alert-section">
          <h3><FontAwesomeIcon icon={faBell} /> Job Reminder</h3>
          <p>Set job reminder to get notifications about jobs</p>
          <button className="set-alert-button">Set Job Reminder</button>
        </div>
      </div>
      
      <div className="job-listings">
        <div className="job-search-header">
          <div>Showing {jobs.length} out of 68 Job</div>
          <div className="sort-options">
            <select className="sort-select">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="salary_high">Highest Salary</option>
              <option value="salary_low">Lowest Salary</option>
            </select>
          </div>
        </div>
        
        <div className="job-grid">
          {/* First job card as individual component */}
          <JobCard 
            hot={firstJob.hot}
            image={firstJob.image}
            logo={firstJob.logo}
            company={firstJob.company}
            position={firstJob.position}
            location={firstJob.location}
            workTime={firstJob.workTime}
            salary={firstJob.salary}
            postedTime={firstJob.postedTime}
            views={firstJob.views}
          />
          
          {/* Remaining job cards */}
          {remainingJobs.map((job, index) => (
            <JobCard 
              key={index}
              hot={job.hot}
              image={job.image}
              logo={job.logo}
              company={job.company}
              position={job.position}
              location={job.location}
              workTime={job.workTime}
              salary={job.salary}
              postedTime={job.postedTime}
              views={job.views}
            />
          ))}
        </div>
        
        
      </div>
     
    </div>

    
  );

};

export default JobBoard;