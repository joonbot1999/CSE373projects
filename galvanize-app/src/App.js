import logo from './logo.svg';
import './css/App.css';
import { Nav } from './Nav.js';
import { Footer } from './Footer.js';
import { Home } from './Home.js'
import { Opportunities } from './Opportunities.js';
import { About } from './About.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route path="/organizations" element={Opportunities()} />
          <Route path="/about" element={About()} />
        </Routes>
        
      </div>
    </Router>

    
      
  )
}

export default App;
