import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import AnimatedBackground from './components/AnimatedBackground';
import NavLinks from './components/NavLinks';
import Home from './pages/Home';
import About from './pages/About';
import GlobalStyles from './styles/GlobalStyles';
import { PortfolioRoot, PortfolioHeader, LogoNav, LogoBox, LogoText } from './styles/LayoutStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AnimatedBackground />
      <PortfolioRoot>
        <PortfolioHeader>
          <LogoNav>
            <LogoBox>
              <Logo />
              <LogoText>MF</LogoText>
            </LogoBox>
            <NavLinks />
          </LogoNav>
        </PortfolioHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PortfolioRoot>
    </Router>
  );
}

export default App;
