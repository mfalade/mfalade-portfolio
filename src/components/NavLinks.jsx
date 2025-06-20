import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: color 0.2s;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 0;
    display: block;
    text-align: center;
  }

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

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 0;
    display: block;
    text-align: center;
  }

  &:hover {
    color: #ff7e6b;
  }
`;

const MainNav = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 900px) {
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #232323;
    padding: 1rem 0;
    margin: 0;
    gap: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  outline: none;

  &:focus {
    outline: 2px solid #ff7e6b;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </MenuButton>
      <MainNav isOpen={isOpen}>
        <StyledNavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>HOME</StyledNavLink>
        <StyledNavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>ABOUT</StyledNavLink>
        <StyledAnchor href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</StyledAnchor>
        <StyledAnchor href="#contact" onClick={() => setIsOpen(false)}>CONTACT</StyledAnchor>
      </MainNav>
    </>
  );
};

export default NavLinks; 