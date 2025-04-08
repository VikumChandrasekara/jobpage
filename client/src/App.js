import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import SearchArea from './components/SearchArea';
import SocialMediaFeeds from './components/SocialMediaFeeds';
import JobDetails from './components/JobDetails';
import NewJobs from './components/NewJobs';
import JobDetailsDis from './components/JobDetailsDis';
import ContactUs from './components/ContactUs';
import BrowseJobs from './components/BrowseJobs';
import AdminLogin from './components/AdminLogin';
import JobBoard from './components/JobBoard';
import AdminPanel from './components/AdminPanel';
import { useState } from 'react';

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
    }
  ];

  const [jobs, setJobs] = useState(initialJobs);

  const handleJobPost = (newJob) => {
    setJobs([newJob, ...jobs]);
    alert("Job posted successfully!");
  };

  return (
    <div className="App">
      <>
      <Router>
          <Routes>
            <Route path="/" element={<><Navbar /><br></br><br></br><br></br><SearchArea /><Footer /></>} />
            <Route path="/job-details" element={<><Navbar /><JobDetails /><Banner /><Footer /></>} />
            <Route path="/job-details-dis" element={<><Navbar /><JobDetailsDis /><Banner /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><br></br><br></br><br></br><ContactUs /><NewsLetter /><Footer /></>} />
            <Route path="/browse" element={<><Navbar /><br></br><br></br><br></br><SearchArea /><BrowseJobs /><Footer /></>} />

            {/* New Job Board Routes */}
            <Route path="/job-board" element={<>
              <Navbar />
              <br></br><br></br><br></br>
              <JobBoard jobs={jobs} />
              <Banner />
              <Footer />
            </>} />

            {/* admin */}
            <Route path="/jp-admin" element={<><AdminLogin /></>} />
            <Route path="/jp-admin/dashboard" element={<>
              <AdminPanel onJobPost={handleJobPost} />
            </>} />
          </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;