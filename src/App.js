import './App.css';
import Navbar from './components/scripts/Navbar';
import Home from './components/scripts/Home';
import Services from './components/scripts/Services';
import About from './components/scripts/About';
import Blogs from './components/scripts/Blogs';
import Footer from './components/scripts/Footer';
import FAQ from './components/scripts/Sliders'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Services/>
     <About/>
     <Blogs/>
     <FAQ/>
     <Footer/>
    </div>
  );
}

export default App;
