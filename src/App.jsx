import './App.css';
import Logo from './components/Logo';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="portfolio-root">
        <header className="portfolio-header">
          <div className="logo-nav">
            <div className="logo-box">
              <Logo className="logo-icon" />
              <span className="logo-text">MF</span>
            </div>
            <nav className="main-nav">
              <a href="#" className="active">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#projects">PROJECTS</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </div>
        </header>
        <main className="hero-section">
          <div className="hero-main-row">
            <div className="hero-content">
              <div className="hero-title-group">
                <div className="section-label-group">
                  <div className="section-label">
                    <span className="section-bar"></span>
                    <span className="section-title">SOFTWARE ENGINEER</span>
                  </div>
                  <div className="hero-title-wrapper">
                    <h1 className="hero-title">Mayowa Ayodeji<br/>Falade</h1>
                  </div>
                </div>
                <div className="hero-summary-group">
                  <div className="summary-bar"></div>
                  <div className="summary-content">
                    <div className="hero-summary">
                      Lorem ipsum dolor sit amet consectetur blah and something something. This would be my professional summary
                    </div>
                    <a className="resume-btn" href="#" target="_blank" rel="noopener noreferrer">View Resume</a>
                  </div>
                  <div className="hero-socials">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Blog"><i className="fas fa-blog"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
