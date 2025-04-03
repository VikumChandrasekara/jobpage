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

function App() {
  return (
    <div className="App">
      <>
      <Router>
          <Routes>
            <Route path="/" element={<><Navbar /><SearchArea /><NewJobs /><Banner /><NewsLetter/><SocialMediaFeeds /><Footer /></>} />
            <Route path="/job-details" element={<><Navbar /><JobDetails /><Banner /><Footer /></>} />
            <Route path="/job-details-dis" element={<><Navbar /><JobDetailsDis /><Banner /><Footer /></>} />
            <Route path="/contact-us" element={<><Navbar /><br></br><br></br><br></br><ContactUs /><NewsLetter /><Footer /></>} />
          </Routes>
      </Router>

      </>
    </div>
  );
}

export default App;