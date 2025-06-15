import SocialIcons from '../components/SocialIcons';
import {
  HeroSection,
  HeroContent,
  HeroTitleGroup,
  SectionLabelGroup,
  SectionLabel,
  SectionBar,
  SectionTitle,
  HeroTitleWrapper,
  HeroTitle,
  HeroSummaryGroup,
  SummaryBar,
  SummaryContent,
  HeroSummary,
  ResumeButton,
  SocialIconsGroup,
} from '../styles/HeroStyles';

const Home = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitleGroup>
          <SectionLabelGroup>
            <SectionLabel>
              <SectionBar />
              <SectionTitle>SOFTWARE ENGINEER</SectionTitle>
            </SectionLabel>
            <HeroTitleWrapper>
              <HeroTitle>Mayowa Ayodeji<br/>Falade</HeroTitle>
            </HeroTitleWrapper>
          </SectionLabelGroup>
          <HeroSummaryGroup>
            <SummaryBar />
            <SummaryContent>
              <HeroSummary>
                Lorem ipsum dolor sit amet consectetur blah and something something. This would be my professional summary
              </HeroSummary>
              <ResumeButton href="#" target="_blank" rel="noopener noreferrer">VIEW RESUME</ResumeButton>
            </SummaryContent>
            <SocialIconsGroup>
              <SocialIcons />
            </SocialIconsGroup>
          </HeroSummaryGroup>
        </HeroTitleGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Home; 