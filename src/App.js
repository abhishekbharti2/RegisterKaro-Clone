import './App.css';
import Navbar from './components/scripts/Navbar';
import Home from './components/scripts/Home';
import Services from './components/scripts/Services';
import About from './components/scripts/About';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Services/>
     <About/>
    </div>
  );
}

export default App;
