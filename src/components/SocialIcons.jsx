import styled from 'styled-components';

const SocialIconsContainer = styled.div`
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
    color: ${props => props.variant === 'orange' ? '#ff7e6b' : '#bdbdbd'};
    font-size: 1.3rem;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.variant === 'orange' ? '#fff' : '#ff7e6b'};
    }
  }
`;

const SocialIcons = ({ variant = 'default' }) => {
  return (
    <SocialIconsContainer variant={variant}>
      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
      <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      <a href="#" aria-label="Blog"><i className="fas fa-blog"></i></a>
    </SocialIconsContainer>
  );
};

export default SocialIcons; 