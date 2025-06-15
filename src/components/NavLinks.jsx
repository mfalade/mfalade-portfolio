import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT</NavLink>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
};

export default NavLinks; 