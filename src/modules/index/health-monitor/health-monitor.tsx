import { T, WidgetInfoTextGroup, WidgetInfoTextRow, WidgetInfoTextWrapper } from '@/components/stitches/';
import { type Ref, useEffect, useRef, useState, type ForwardRefRenderFunction, forwardRef } from 'react';
import { styled } from 'stitches.config';
// import { type EChartsOption } from 'echarts';
import { useTheme } from '@/contexts/theme-provider/theme-provider';
// import { ChartType, getChartOptions, initialChartOption } from './health-monitor-helper';
import useChartData from './use-chart-data';
import ECharts, { type EChartsRef } from '@/components/echarts/echarts';
// import ActivityIcon from '@/components/icon/activity-icon';
// import ScatterIcon from '@/components/icon/scatter-icon';
// import { styles } from '@stitches/react';

const HealthMonitor: ForwardRefRenderFunction<EChartsRef> = (_, ref) => {
  const { chartData } = useChartData({ dataLength: 100 });

  // const currentChartType = useRef<ChartType>();

  // const [option, setOption] = useState<EChartsOption>(initialChartOption);

  const { resolvedTheme = 'dark' } = useTheme();

  return (
    <Wrapper>
      <WidgetInfoTextWrapper>
        <WidgetInfoTextRow>
          <WidgetInfoTextGroup >
            <T size={5} padding="tiny">ID: EVENT HORIZON PATHFINDER </T>
            <T size={5} padding="tiny">DATA SET: ECHO VAULT DOSSIER </T>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
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
          <WidgetInfoTextGroup align="right">
          <T size={5} color="gray8" padding="tiny">CYBERDYNE MODEL: T-1000</T>
            <T size={5} color="gray8" padding="tiny">KERNEL: ГОРИЗОНТ СОБЫТИЙ ВЗОР</T>
            <T size={5} color="gray8" padding="tiny">ALPHA 5.4.1 </T>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
      </WidgetInfoTextWrapper>
      {/* <ECharts
        option={option}
        style={{ height: '100%', minWidth: '600px', '@bp570': { minWidth: '200px' } }}
        ref={ref}
      /> */}
    </Wrapper>
  );
};

// const ChartTypeButton = styled('button', {
//   border: 0,
//   background: '$cyan13',
//   cursor: 'pointer',
//   fontFamily: 'inherit',
//   fontSize: '$fontSizes$6',
//   transition: '150ms',
//   whiteSpace: 'nowrap',
//   color: '$cyan1',
//   height: '24px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',

//   '&:active': {
//     opacity: .8,
//   },

//   variants: {
//     variant: {
//       active: {
//         background: '$cyan9',
//         color: '$cyan1',
//       }
//     }
//   }
// });

// const ButtonWrapper = styled('div', {
//   display: 'flex',
//   flexDirection: 'row'
// });

const Wrapper = styled('div', {
  position: 'relative',
  background: '$cyan14',
  height: '75vh',
  // border: '0.1px solid rgba(0, 255, 255, 0.025)',
  // Media query for bp4
  '@media (max-width: 510px)': {
    textShadow: '0 0 4px BLACK',
    // Add styles bp4 breakpoint here
    // For example, changing the height
    height: '50vh',
    // '@media (orientation: landscape)': {
    //   overflowY: 'scroll', 
    // },
  }
});

// export default forwardRef(HealthMonitor);
export default forwardRef(HealthMonitor);



