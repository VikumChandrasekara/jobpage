import React, { useState } from "react";
import '../css/SearchArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
// import { FaTimes } from "react-icons/fa"; // Import close icon

const SearchArea = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobType, setJobType] = useState("Full time");
    const [location, setLocation] = useState("Colombo");
    const [showSalaryDropdown, setShowSalaryDropdown] = useState(false);
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");

    // Sri Lankan Districts
    const districts = [
        "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo",
        "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara",
        "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar",
        "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya",
        "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
    ];

    const handleSalaryUpdate = () => {
        // Handle salary filter update here
        console.log("Salary Range:", minSalary, "-", maxSalary);
        setShowSalaryDropdown(false); // Close the dropdown after updating
    };

    return (
        <div className="SearchArea">
            <h2 className="job-title">There Are 65,866 Jobs <br /> Here For You!</h2>
            <p className="job-subtitle">Discover your next career move, freelance gig, or internship</p>

            <div className="job-search-box">
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="UI Designer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>

                <div className="select-wrapper">
                <FontAwesomeIcon icon={faCircleDown} />
                    <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="Full time">Full time</option>
                        <option value="Part time">Part time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                </div>

                <div className="select-wrapper">
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        {districts.map(district => (
                            <option key={district} value={district}>{district}</option>
                        ))}
                    </select>
                </div>

                <div className="salary-section">
                    <button
                        className="salary-toggle"
                        onClick={() => setShowSalaryDropdown(!showSalaryDropdown)}
                    >
                        Salary
                    </button>
                    {showSalaryDropdown && (
                        <div className="salary-dropdown">
                            <button
                                className="close-button"
                                onClick={() => setShowSalaryDropdown(false)}
                            >
                                {/* <FaTimes /> */}
                            </button>
                            <div className="salary-options">
                                <div className="salary-input">
                                    <label>Min Salary</label>
                                    <input
                                        type="number"
                                        placeholder="e.g., 10000"
                                        value={minSalary}
                                        onChange={(e) => setMinSalary(e.target.value)}
                                    />
                                </div>
                                <div className="salary-input">
                                    <label>Max Salary</label>
                                    <input
                                        type="number"
                                        placeholder="e.g., 50000"
                                        value={maxSalary}
                                        onChange={(e) => setMaxSalary(e.target.value)}
                                    />
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
        </div>
    );
};

export default SearchArea;