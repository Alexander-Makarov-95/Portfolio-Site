import { T, WidgetInfoTextGroup, WidgetInfoTextRow, WidgetInfoTextWrapper } from '@/components/stitches/';
import { type Ref, useEffect, useRef, useState, type ForwardRefRenderFunction, forwardRef } from 'react';
import { styled } from 'stitches.config';
import useChartData from './use-chart-data';
import ECharts, { type EChartsRef } from '@/components/echarts/echarts';

const HealthMonitor: ForwardRefRenderFunction<EChartsRef> = (_, ref) => {
  const { chartData } = useChartData({ dataLength: 100 });


  return (
    <Wrapper>
      <WidgetInfoTextWrapper>
        <ShadowWrapper>
        <WidgetInfoTextRow>
          <WidgetInfoTextGroup >
            <T size={5} padding="tiny">ID: EVENT HORIZON PATHFINDER </T>
            <T size={5} padding="tiny">DATA SET: ECHO VAULT DOSSIER </T>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
        </ShadowWrapper>
        <WidgetInfoTextRow align="bottom">
          <WidgetInfoTextGroup>
            <T
              background="cyan1"
              size={5}
              color="gray1"
              padding="tiny"
            >
              CURRENT STREAM: {chartData?.slice(-1)[0].value.join(': ')}
            </T>
          </WidgetInfoTextGroup>
          <ShadowWrapper>
          <WidgetInfoTextGroup align="right">
          {/* <T size={5} color="gray8" padding="tiny">CYBERDYNE: T-1000</T> */}
            <T size={5} color="gray8" padding="tiny">KERNEL: ADVANCED PROTOTYPE T-1000</T>
            {/* <T size={5} color="gray8" padding="tiny">ALPHA 5.4.1 </T> */}
          </WidgetInfoTextGroup>
          </ShadowWrapper>
        </WidgetInfoTextRow>
      </WidgetInfoTextWrapper>
    </Wrapper>
  );
};


const ShadowWrapper = styled('div', {
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

const Wrapper = styled('div', {
  position: 'relative',
  background: '$cyan14',
  height: '75vh',
  '@media (max-width: 510px)': {
    height: '50vh',
  
    
  }
});

// export default forwardRef(HealthMonitor);
export default forwardRef(HealthMonitor);



