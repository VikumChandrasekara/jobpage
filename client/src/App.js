import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import SearchArea from './components/SearchArea';
import SocialMediaFeeds from './components/SocialMediaFeeds'; // Import the new component

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <SearchArea />
        <Banner/>
        
        <NewsLetter/>
        <SocialMediaFeeds /> 
      </>
    </div>
  );
}

export default App;