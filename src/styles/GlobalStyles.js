import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, .portfolio-root {
    background: #232323;
    color: #fff;
    font-family: 'Montserrat', 'Georgia', serif;
    min-height: 100vh;
    margin: 0;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (min-width: 769px) {
      padding: 0;
    }
  }
`;

export default GlobalStyles; 