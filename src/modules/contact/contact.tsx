import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, T, Underline } from '@/components/stitches';
import { styled } from 'stitches.config';
import CommunicationListContainer from '@/modules/index/alarm-stats/alarm-list-container';

const Contact = () => {
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
          Embark on a futuristic journey of professional collaboration. Below, discover the portals to connect with me for a spectrum of professional services. 
          Engage through the digital dimensions of LinkedIn or directly via email, forging new alliances in the realms of expertise and innovation.
          </T>
        </Background>
      <CornerDotsBox />
      <br />
      <br />
      <CommunicationListContainer />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '@media (max-width: 510px)': {
    // textShadow: '0 0 4px BLACK',
    // Add styles bp4 breakpoint here
    // For example, changing the height
    height: 'calc(100vh - 375px)',
    // '@media (orientation: landscape)': {
      overflowY: 'scroll', 
      //add padding to the right 
      paddingRight: '20px',
    // },
  }
  ,
  marginRight: '-20px',
  });

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  // backdropFilter: 'blur(2.5px)',
  // border: '0.1px solid rgba(0, 255, 255, 0.025)'
});

export default Contact;
