import React from 'react';
import JobBoard from './components/JobBoard';
import '../css/App.css';

function App() {
  // Sample data for jobs
  const jobsData = [
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
    {
      hot: false,
      image: "/api/placeholder/400/140",
      logo: "/api/placeholder/28/28",
      company: "Microsoft",
      position: "Senior Full Stack Engineer, Creative Success Full Time",
      location: "Seattle, USA",
      workTime: "Full Time",
      salary: "130",
      postedTime: "3 days ago",
      views: "165"
    },
    {
      hot: true,
      image: "/api/placeholder/400/140",
      logo: "/api/placeholder/28/28",
      company: "Facebook",
      position: "Senior Full Stack Engineer, Creative Success Full Time",
      location: "Menlo Park, USA",
      workTime: "Full Time",
      salary: "140",
      postedTime: "1 day ago",
      views: "218"
    },
    {
      hot: false,
      image: "/api/placeholder/400/140",
      logo: "/api/placeholder/28/28",
      company: "Amazon",
      position: "Senior Full Stack Engineer, Creative Success Full Time",
      location: "Seattle, USA",
      workTime: "Full Time",
      salary: "125",
      postedTime: "2 days ago",
      views: "192"
    },
    {
      hot: true,
      image: "/api/placeholder/400/140",
      logo: "/api/placeholder/28/28",
      company: "Netflix",
      position: "Senior Full Stack Engineer, Creative Success Full Time",
      location: "Los Angeles, USA",
      workTime: "Full Time",
      salary: "135",
      postedTime: "4 days ago",
      views: "157"
    }
  ];

  return (
    <div className="app">
      <JobBoard jobs={jobsData} />
    </div>
  );
}

export default App;