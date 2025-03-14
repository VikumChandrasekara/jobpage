import React, { useState } from "react";
import '../css/SearchArea.css'

const SearchArea = () => {
    const [search, setSearch] = useState("");
  return (
    <div className="SearchArea">
         <h2 className="job-title">There Are 65,866 Jobs <br /> Here For You!</h2>
         <p className="job-subtitle">Discover your next career move, freelance gig, or internship</p>

        <div className="job-search-box">
            <div className="search-input">
                <input
                    type="text"
                    placeholder="UI Designer"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                
            </div>
            <div className="search-input">
                <input
                    type="text"
                    placeholder="UI/UX Designing"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                
            </div>

            <div className="search-input flex items-center bg-white px-3 py-2 rounded-lg shadow-md">
              <input
                  type="text"
                  placeholder="Full time job"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border-none focus:ring-0"
              />
              <select
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="ml-2 p-2 border rounded-lg bg-white"
              >
                  <option value="Full time job">Full Time</option>
                  <option value="Part time job">Part Time</option>
              </select>
            </div>


            <div className="search-input">
                <input
                    type="text"
                    placeholder="New York,USA"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                
            </div>

            <div className="search-input">
                <input
                    type="text"
                    placeholder="Salary Range"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                
            </div>

            <button className="find-button">Find now</button>
        </div>
    </div>
  );
};

export default SearchArea;
