import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, T, Underline } from '@/components/stitches';
import { styled } from 'stitches.config';

import ModelRenderContainer from '@/modules/index/model-render/model-render-container';

const About = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
        </Box>
      </ColoredBox>
      <Box css={{ h: 15 }} />
      <CornerDotsBox />
        <Background>
          <Box css={{ h: 10 }} />
          <T color="gray12" size="6">
          I am Alexander, based in Sydney, Australia. As a software developer, I actively explore various areas of technology, mainly focusing on <b>React</b>, <b>Javascript</b>, and <b> Three.js</b>.
          My professional background includes approximately three years in the <b> Robotics Process Automation </b> (RPA) sector, serving as an automation engineer consultant.  <b> </b>
          During this time, I have contributed to organizations like Woolworths, Super Retail Group, and Vocus, developing and sustaining efficient business automation solutions.
            <br />
            <br />
            What you are looking at right now is my personal website - a homage to my love of the mysterious wonders of the cosmos.
            It features a futuristic dashboard, birthed from the fictitious <b>Event Horizon Pathfinder.</b> It stands as a vigilant sentinel, overseeing an enigmatic black hole, nestled in the profound depths of the celestial abyss.
            <br />
            <br />
            In the futuristic control room of the Pathfinder, as you remotely observe the singularity, you have the unique opportunity to engage the onboard ambient sound system. 
            This advanced feature offers an immersive listening experience - <b> Tchaikovsky's 'Waltz of the Flowers' </b>, a classical masterpiece, masterfully reinterpreted through our state-of-the-art audio technology for a deeply moving cosmic experience.
            <br />
            <br />
            I'm available for opportunities in all realms of software development. Please get in touch with me through the contact page.
          </T>
        </Background>
      <CornerDotsBox />
      <br />
      <br />
      <ModelRenderContainer />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '@media (max-width: 510px)': {
    height: 'calc(100vh - 375px)',
    overflowY: 'scroll', 
    paddingRight: '20px',
  }
  ,
  marginRight: '-20px',
  })

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  // backdropFilter: 'blur(2.5px)',
  // border: '0.1px solid rgba(0, 255, 255, 0.025)'
  '@media (max-width: 510px)': {
    textShadow: `
      1px 1px 0.1px rgba(0, 0, 0, 0.5),
      -1px -1px 0.1px rgba(0, 0, 0, 0.5),
      1px -1px 0.1px rgba(0, 0, 0, 0.5),
      -1px 1px 0.1px rgba(0, 0, 0, 0.5),
      2px 1px 0.1px rgba(0, 0, 0, 0.5)
    `,

  },
});

export default About;
