import CornerDotsBox from '@/components/ui/corner-dots-box';
import LiveDataCircle from '@/components/live-data-circle/live-data-circle';
import { Box, WidgetWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import HealthMonitor from './health-monitor';
import { type EChartsRef } from '@/components/echarts/echarts';
import { type ForwardRefRenderFunction, forwardRef } from 'react';
import WidgetHeader from '@/components/widget/widget-header';

const HealthMonitorContainer: ForwardRefRenderFunction<EChartsRef> = (_, ref) => {
  return (
    <>
      <WidgetWrapper>
        <ShadowWrapper>
        <WidgetHeader>
          <WidgetHeader.Left>
            <T color="cyan1" weight={2}>SINGULARTIY </T>
            <T color="cyan1" weight={1}>MONITOR</T>
          </WidgetHeader.Left>
          <WidgetHeader.Right>
            <TitleTextRow>
              <T size="5" color="gray8" weight={3}>LIVE FEED</T>
              <LiveDataCircle />
            </TitleTextRow>
          </WidgetHeader.Right>
        </WidgetHeader>
        </ShadowWrapper>

        <Box css={{ h: 10 }} />

        <CornerDotsBox />

        <HealthMonitor ref={ref} />

        <CornerDotsBox />
        
      </WidgetWrapper>
    </>
  );
};

const TitleTextRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  alignItems: 'center',
});

const ShadowWrapper = styled('div', {
  '@media (max-width: 510px)': {
    textShadow: `
      0.5px 0.5px 0.1px rgba(0, 0, 0, 0.5),
      -0.1px -0.1px 0.1px rgba(0, 0, 0, 0.5),
      1px -0.5px 0.1px rgba(0, 0, 0, 0.5),
      -1px 1px 0.1px rgba(0, 0, 0, 0.5),
      0.5px 1px 0.1px rgba(0, 0, 0, 0.5)
    `,
  },
});


export default forwardRef(HealthMonitorContainer);

