import './App.css';
import Navbar from './components/scripts/Navbar';
import Home from './components/scripts/Home';
import Services from './components/scripts/Services';
import Blogs from './components/scripts/Blogs';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Services/>
     <Blogs/>
    </div>
  );
}

export default App;
