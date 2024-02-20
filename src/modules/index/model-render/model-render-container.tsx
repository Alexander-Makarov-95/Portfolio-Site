import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, WidgetWrapper, T } from '@/components/stitches';
import ModelRender from './model-render';
import WidgetHeader from '@/components/widget/widget-header';

const ModelRenderContainer = () => {
  return (
    <>
      <WidgetWrapper>

        <WidgetHeader>
          <WidgetHeader.Right>
            <T color="cyan1" weight={2}>ID: [REDACTED]</T>
          </WidgetHeader.Right>
          <WidgetHeader.Left>
            <T color="cyan1" weight={2}>OPERATIVE </T>
            <T color="cyan1" weight={1} >BLUEPRINT </T>
          </WidgetHeader.Left>
        </WidgetHeader>

        <Box css={{ h: 10 }} />

        <CornerDotsBox />

        <ModelRender />

      </WidgetWrapper>
      <CornerDotsBox />
    </>
  );
};

export default ModelRenderContainer;
