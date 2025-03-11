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
            <button className="find-button">Find now</button>
        </div>
    </div>
  );
};

export default SearchArea;
