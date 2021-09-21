import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Courteous and enthusiastic, I am interested in IT and everything in its orbit. 4 years ago I started to be fascinated by web programming, e.g. developing apps and building websites. Now, I am hardworking web developer with a flair for creating elegant solutions in the least amount of time. Passionate about software architecture and web design.
      </SectionText>
      <Button onClick={() => window.location = 'https://stamenkovic-d.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;