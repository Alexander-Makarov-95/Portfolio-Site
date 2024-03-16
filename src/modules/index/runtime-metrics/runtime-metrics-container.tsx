import { Box, WidgetWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import LoadThresMetrics from './load-thres-metrics';
import WidgetHeader from '@/components/widget/widget-header';
import ProjectStack from '@/modules/about/project-stack';

//Technical Page

const RuntimeMetricsContainer = () => {
  return (
    <>
      <WidgetWrapper>
        <ShadowWrapper>
        <WidgetHeader>
          <WidgetHeader.Left>
            <T color="cyan1" weight={2}>EXPERTISE </T>
            <T color="cyan1" weight={1}>METRICS</T>
          </WidgetHeader.Left>
        </WidgetHeader>

        <Box css={{ h: 10 }} />

        <LoadThresMetrics />
         <TableDataRow>
          <ProjectStack />
        </TableDataRow> 
        </ShadowWrapper>
      </WidgetWrapper>
    </>
  );
};

const TableDataRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  '@bp570': {
    gap: '10px',
  },
  '& > *': {
    flex: 1,
    // minWidth: '200px'
  }
});


const ShadowWrapper = styled('div', {
    textShadow: `
    1px 1px 1px rgba(0, 0, 0, 0.5),
    -1px -1px 1px rgba(0, 0, 0, 0.5),
    1px -1px 1px rgba(0, 0, 0, 0.5),
    -1px 1px 1px rgba(0, 0, 0, 0.5),
    2px 1px 1px rgba(0, 0, 0, 0.5)
  `,
});

export default RuntimeMetricsContainer;
