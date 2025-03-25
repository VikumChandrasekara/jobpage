import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';

function App() {
  return (
    <div className="App">
     {<><Navbar /><SearchArea /><Banner/></> }
      
    </div>
  );
}

export default App;
