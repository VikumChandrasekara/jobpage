import React, { useState } from 'react';
import JobBoard from './components/JobBoard';
import AdminPanel from './components/AdminPanel';
import '../css/App.css';

function App() {
  // Initial sample data for jobs
  const initialJobs = [
    {
      hot: true,
      image: "/api/placeholder/400/140",
      logo: "/api/placeholder/28/28",
      company: "Google Inc",
      position: "Senior Full Stack Engineer, Creative Success Full Time",
      location: "New York, USA",
      workTime: "Full Time",
      salary: "120",
      postedTime: "1 day ago",
      views: "204"
    },
    {
      hot: true,
      image: "/api/placeholder/400/140",
      logo: "/api/placeholder/28/28",
      company: "Apple Inc",
      position: "Senior Full Stack Engineer, Creative Success Full Time",
      location: "San Francisco, USA",
      workTime: "Full Time",
      salary: "150",
      postedTime: "2 days ago",
      views: "186"
    },
    // More initial jobs...
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleJobPost = (newJob) => {
    setJobs([newJob, ...jobs]);
    alert("Job posted successfully!");
    setShowAdmin(false); // Optionally hide admin panel after posting
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Job Board</h1>
        <button 
          className="admin-toggle-button"
          onClick={() => setShowAdmin(!showAdmin)}
        >
          {showAdmin ? "View Jobs" : "Post New Job"}
        </button>
      </header>

      {showAdmin ? (
        <AdminPanel onJobPost={handleJobPost} />
      ) : (
        <JobBoard jobs={jobs} />
      )}
    </div>
  );
}

export default App;