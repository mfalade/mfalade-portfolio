import styled from 'styled-components';

export const PortfolioRoot = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const PortfolioHeader = styled.header`
  width: 100%;
  padding: 2rem 0 0 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LogoNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 60px;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 60px;
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  font-size: 2.5rem;
  color: #ff7e6b;
  font-weight: bold;
  margin-right: 0.2rem;
`;

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 2.5rem;
  margin-right: 4rem;

  @media (max-width: 900px) {
    margin-right: 1rem;
    gap: 1.2rem;
  }
`;

export const NavLink = styled.a`
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