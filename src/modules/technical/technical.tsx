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
    height: 'calc(100vh - 375px)',
    overflowY: 'scroll', 
    paddingRight: '20px',
  },
  
  marginRight: '-20px',
  });

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 510px)': {
  textShadow: `
  1px 1px 0.1px rgba(0, 0, 0, 0.5),
  -1px -1px 0.1px rgba(0, 0, 0, 0.5),
  1px -1px 0.1px rgba(0, 0, 0, 0.5),
  -1px 1px 0.1px rgba(0, 0, 0, 0.5),
  2px 1px 0.1px rgba(0, 0, 0, 0.5)
`,
  }
});

export default Technical;



