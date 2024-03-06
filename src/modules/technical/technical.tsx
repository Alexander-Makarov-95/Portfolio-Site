import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, T, Underline } from '@/components/stitches';
import { styled } from 'stitches.config';
import RuntimeMetricsContainer from '@/modules/index/runtime-metrics/runtime-metrics-container';

const Technical = () => {
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
          With years of experience in the tech industry, my career is marked by a relentless pursuit of technical excellence. 
          This portfolio is a testament to my journey, highlighting advanced skills in software development, systems engineering, and data analysis. 
          I am dedicated to leveraging these skills to develop solutions that are not only efficient but also pioneering in their approach.
          Below, you'll find a list of my skills. Please click on the corresponding icon to delve into the relevant technical frameworks.
          </T>
        </Background>
      <CornerDotsBox />
      <br />
      <br />
      <RuntimeMetricsContainer />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  '@media (max-width: 510px)': {
    textShadow: '0 0 4px BLACK',
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

export default Technical;



