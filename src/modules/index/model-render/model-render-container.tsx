import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, WidgetWrapper, T } from '@/components/stitches';
import ModelRender from './model-render';
import WidgetHeader from '@/components/widget/widget-header';
import { styled } from 'stitches.config';
import Head from 'next/head';

const ModelRenderContainer = () => {
  return (
    <>
      <WidgetWrapper>
       <HeaderContainer>
        <WidgetHeader>
          <WidgetHeader.Right>
            <T color="cyan1" weight={2}>ID: [REDACTED]</T>
          </WidgetHeader.Right>
          <WidgetHeader.Left>
            <T color="cyan1" weight={2}>OPERATIVE </T>
            <T color="cyan1" weight={1} >BLUEPRINT </T>
          </WidgetHeader.Left>
        </WidgetHeader>
        </HeaderContainer>

        <Box css={{ h: 10 }} />

        <CornerDotsBox />

        <ModelRender />

      </WidgetWrapper>
      <CornerDotsBox />
    </>
  );
};

const HeaderContainer = styled('div', {
  '@media (max-width: 510px)': {
    textShadow: `
      1px 1px 1px rgba(0, 0, 0, 0.5),
      -1px -1px 1px rgba(0, 0, 0, 0.5),
      1px -1px 1px rgba(0, 0, 0, 0.5),
      -1px 1px 1px rgba(0, 0, 0, 0.5),
      2px 1px 1px rgba(0, 0, 0, 0.5)
    `,
  
  },
});




export default ModelRenderContainer;
