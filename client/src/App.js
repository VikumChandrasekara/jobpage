import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import SearchArea from './components/SearchArea';
import SocialMediaFeeds from './components/SocialMediaFeeds';
import JobDetails from './components/JobDetails';
import NewJobs from './components/NewJobs';

function App() {
  return (
    <div className="App">
      <>
      <Router>
          <Routes>
            <Route path="/" element={<><Navbar /><SearchArea /><NewJobs /><Banner /><NewsLetter/><SocialMediaFeeds /></>} />
            <Route path="/job-details" element={<><Navbar /><JobDetails /></>} />
          </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;