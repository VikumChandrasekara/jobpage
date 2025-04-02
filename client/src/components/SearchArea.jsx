import React, { useState } from "react";
import '../css/SearchArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBriefcase, faCircleXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SearchArea = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobType, setJobType] = useState("Full time");
    const [location, setLocation] = useState("Colombo");
    const [showSalaryDropdown, setShowSalaryDropdown] = useState(false);
    const [minSalary, setMinSalary] = useState("500");
    const [maxSalary, setMaxSalary] = useState("1000");
    const [displayedSalary, setDisplayedSalary] = useState("Salary range");
    const [selectedFilters, setSelectedFilters] = useState(["UI/UX Designing"]);

    // Sri Lankan Districts
    const districts = [
        "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo",
        "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara",
        "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar",
        "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya",
        "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
    ];

    const handleRemoveFilter = (filter) => {
        setSelectedFilters(selectedFilters.filter(item => item !== filter));
    };

    const handleSalaryUpdate = () => {
        const salaryText = `${minSalary} - ${maxSalary}`;
        setDisplayedSalary(salaryText);
        setShowSalaryDropdown(false);
    };

    return (
        <div className="SearchArea">
            <h1 className="job-title">There Are 65,866 Jobs <br /> Here For You!</h1>
            <p className="job-subtitle">Discover your next career move, freelance gig, or internship</p>
            <div className="job-search-box">
                <div className="search-input">
                    <span className="search-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#AAA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.75 15.75L12.75 12.75" stroke="#AAA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="UI Designer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>

                <div className="select-wrapper job-type">
                    <FontAwesomeIcon icon={faBriefcase} className="select-icon" />
                    <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="Full time">Full time job</option>
                        <option value="Part time">Part time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                    <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                </div>

                <div className="select-wrapper location">
                    <FontAwesomeIcon icon={faLocationDot} className="select-icon" />
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        {districts.map(district => (
                            <option key={district} value={district}>{district}</option>
                        ))}
                    </select>
                    <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                </div>

                <div className="salary-section">
                    <button
                        className="salary-toggle"
                        onClick={() => setShowSalaryDropdown(!showSalaryDropdown)}
                    >
                        <span className="salary-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5.25V12.75" stroke="#AAA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.75 9H5.25" stroke="#AAA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.25 3.75H3.75C3.33579 3.75 3 4.08579 3 4.5V13.5C3 13.9142 3.33579 14.25 3.75 14.25H14.25C14.6642 14.25 15 13.9142 15 13.5V4.5C15 4.08579 14.6642 3.75 14.25 3.75Z" stroke="#AAA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        {displayedSalary}
                        <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                    </button>
                    {showSalaryDropdown && (
                        <div className="salary-dropdown">
                            <div className="salary-options">
                                <div className="salary-input">
                                    <label>Min Salary</label>
                                    <div className="input-with-spinner">
                                        <input
                                            type="number"
                                            value={minSalary}
                                            onChange={(e) => setMinSalary(e.target.value)}
                                        />
                                        <div className="spinner-buttons">
                                            <button 
                                                onClick={() => setMinSalary((prev) => (parseInt(prev) + 100).toString())}
                                                className="spinner-up"
                                            >
                                                ▲
                                            </button>
                                            <button 
                                                onClick={() => setMinSalary((prev) => Math.max(0, parseInt(prev) - 100).toString())}
                                                className="spinner-down"
                                            >
                                                ▼
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="salary-input">
                                    <label>Max Salary</label>
                                    <div className="input-with-spinner">
                                        <input
                                            type="number"
                                            value={maxSalary}
                                            onChange={(e) => setMaxSalary(e.target.value)}
                                        />
                                        <div className="spinner-buttons">
                                            <button 
                                                onClick={() => setMaxSalary((prev) => (parseInt(prev) + 100).toString())}
                                                className="spinner-up"
                                            >
                                                ▲
                                            </button>
                                            <button 
                                                onClick={() => setMaxSalary((prev) => Math.max(0, parseInt(prev) - 100).toString())}
                                                className="spinner-down"
                                            >
                                                ▼
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="update-button"
                                onClick={handleSalaryUpdate}
                            >
                                Update
                            </button>
                        </div>
                    )}
                </div>

                <button className="find-button">Find now</button>
            </div>

            {selectedFilters.length > 0 && (
                <div className="selected-filters">
                    {selectedFilters.map(filter => (
                        <div key={filter} className="filter-tag">
                            {filter}
                            <FontAwesomeIcon 
                                icon={faCircleXmark} 
                                className="remove-icon" 
                                onClick={() => handleRemoveFilter(filter)} 
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchArea;