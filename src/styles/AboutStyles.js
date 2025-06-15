import styled from 'styled-components';

export const AboutRoot = styled.div`
  padding: 2rem 8rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.2rem 0;
  }
`;

export const AboutSummary = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    @media (max-width: 768px) {
      margin: 0.8rem 0;
      padding-left: 1.2rem;
    }
  }

  li {
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      margin-bottom: 0.4rem;
    }
  }
`;

export const AboutDivider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 3rem 0;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const AboutSection = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const AboutSectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

export const AboutList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
  }
`;

export const AboutListItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
  }
`;

export const AboutListArrow = styled.span`
  color: #ff7e6b;
  margin-right: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0.4rem;
  }
`; 