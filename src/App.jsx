import './App.css';
import Logo from './components/Logo';
import AnimatedBackground from './components/AnimatedBackground';
import NavLinks from './components/NavLinks';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <div className="portfolio-root">
        <header className="portfolio-header">
          <div className="logo-nav">
            <div className="logo-box">
              <Logo className="logo-icon" />
              <span className="logo-text">MF</span>
            </div>
            <NavLinks />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
