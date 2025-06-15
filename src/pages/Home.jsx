import SocialIcons from '../components/SocialIcons';

const Home = () => {
  return (
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
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home; 