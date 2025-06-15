import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 80vh;
  width: 100vw;
  max-width: 100vw;
  margin-left: 0;
  margin-top: 4rem;
  box-sizing: border-box;
  padding-left: 8rem;
  overflow-x: hidden;
  flex: 1 1 0;

  @media (max-width: 900px) {
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;

export const HeroMainRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  flex: 1 1 0;
`;

export const HeroContent = styled.div`
  max-width: 700px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HeroTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  justify-content: space-between;
  height: 100%;
`;

export const SectionLabelGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeroTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SectionBar = styled.div`
  width: 60px;
  height: 8px;
  background: #ff7e6b;
  border-radius: 0;
  margin-right: 1.2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #fff;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 2.2rem 0 3.5rem 0;
  line-height: 1.1;
  font-family: 'Montserrat', 'Georgia', serif;
  display: block;

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
`;

export const HeroSummaryGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
  padding-right: 8rem;
  padding-bottom: 4rem;
`;

export const SummaryBar = styled.div`
  width: 8px;
  background: #ff7e6b;
  border-radius: 0;
  margin-right: 1.5rem;
  margin-bottom: 0;
  align-self: stretch;
`;

export const SummaryContent = styled.div`
  flex: 1 1 0;
`;

export const HeroSummary = styled.p`
  font-size: 1.15rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
  margin-left: 0;
  max-width: 420px;
`;

export const ResumeButton = styled.a`
  display: inline-block;
  margin-left: 0;
  padding: 0.8rem 2.5rem;
  border: 4px solid #ff7e6b;
  color: #fff;
  background: transparent;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 2px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  align-self: flex-start;

  &:hover {
    background: #ff7e6b;
    color: #232323;
  }
`;

export const HeroSocials = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 0;
  margin-left: 0;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  flex-shrink: 0;
  padding-right: 3rem;
  align-self: flex-end;

  a {
    color: #bdbdbd;
    font-size: 1.3rem;
    transition: color 0.2s;

    &:hover {
      color: #ff7e6b;
    }
  }

  &.orange a {
    color: #ff7e6b;

    &:hover {
      color: #fff;
    }
  }
`; 