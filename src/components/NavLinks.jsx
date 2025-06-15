import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: color 0.2s;

  &.active, &:hover {
    color: #ff7e6b;
  }
`;

const StyledAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: color 0.2s;

  &:hover {
    color: #ff7e6b;
  }
`;

const MainNav = styled.nav`
  display: flex;
  gap: 2.5rem;
  margin-right: 4rem;

  @media (max-width: 900px) {
    margin-right: 1rem;
    gap: 1.2rem;
  }
`;

const NavLinks = () => {
  return (
    <MainNav>
      <StyledNavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</StyledNavLink>
      <StyledNavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT</StyledNavLink>
      <StyledAnchor href="#projects">PROJECTS</StyledAnchor>
      <StyledAnchor href="#contact">CONTACT</StyledAnchor>
    </MainNav>
  );
};

export default NavLinks; 