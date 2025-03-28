import './App.css';
import Banner from './components/Banner';
import F from './components/F';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import SocialMediaFeeds from './components/SocialMediaFeeds'; // Import the new component

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <SearchArea />
        <Banner/>
        
        <F/>
        <SocialMediaFeeds /> 
      </>
    </div>
  );
}

export default App;