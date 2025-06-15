import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.svg`
  display: block;
  color: #ff7e6b;
`;

const Logo = ({ width = 45, height = 52 }) => (
  <StyledLogo
    width={width}
    height={height}
    viewBox="0 0 45 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.3203 37.4434L41.0703 38.165L23.75 48.165L22.5 48.8867L21.25 48.165L3.92969 38.165L2.67969 37.4434V14.5566L3.92969 13.835L21.25 3.83496L22.5 3.11328L23.75 3.83496L41.0703 13.835L42.3203 14.5566V37.4434Z"
      stroke="currentColor"
      strokeWidth="5"
    />
  </StyledLogo>
);

export default Logo; 