import CornerDotsBox from '@/components/ui/corner-dots-box';
import MetricComparison, { MetricColor } from '@/components/metric-comparison/metric-comparison';
import StepProgressBar, { StepProgressBarColor, type StepProgressBarData } from '@/components/step-progress-bar/step-progress-bar';
import { Box, WidgetWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import ProjectView from './project-view';
import { projectArchiveCodex } from './alarms';
import WidgetHeader from '@/components/widget/widget-header';

const AlarmStatsContainer = () => {
  const stepProgressBarData1: StepProgressBarData[] = [
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
  ];

  const stepProgressBarData2: StepProgressBarData[] = [
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'secondary' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
  ];

  const stepProgressBarData3: StepProgressBarData[] = [
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
  ];

  return (
    <>
      <WidgetWrapper>
        <ShadowWrapper>
        <WidgetHeader>
          <WidgetHeader.Left>
            <T color="cyan1" weight={2}>PERSONAL </T>
            <T color="cyan1" weight={1} >PROJECTS</T>
          </WidgetHeader.Left>
        </WidgetHeader>
        </ShadowWrapper>

        <Box css={{ h: 10 }} />

        <CornerDotsBox >

          <StepProgressBarWrapper>
            <StepProgressBar data={stepProgressBarData1} />
            <StepProgressBar data={stepProgressBarData2} />
            <StepProgressBar data={stepProgressBarData3} />
          </StepProgressBarWrapper>

        </CornerDotsBox>

        <Box css={{ h: 15 }} />

        <CornerDotsBox />

        <ProjectView alarm={projectArchiveCodex} />

        <CornerDotsBox />

      </WidgetWrapper>
    </>
  );
};

const StepProgressBarWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  gap: '40px',
  justifyContent: 'space-between',
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


export default AlarmStatsContainer;
