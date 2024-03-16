import CornerLinesBox from '@/components/ui/corner-lines-box';
import WarningIcon from '@/components/icon/warning-icon';
import { Box, T, T2 } from '@/components/stitches';
import { styled } from 'stitches.config';
import ProjectViewGrid from './alarm-view-code-grid'
import { type Alarm } from './alarm-view.types';
import OperatingSystem from '@/components/terminal/OperatingSystem';

interface Props {
  alarm: Alarm
}


const ProjectView = ({ alarm }: Props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <MainDetailsWrapper>
          <AlarmInfoWrapper>
            <CornerLinesBox topLeft lineLength="10px" />
            <LightTextShadowWrapper>
            <AlarmHeaderWrapper>
              <IconContainer>
                <WarningIcon color='green1' width={22} height={22} />
              </IconContainer>
              <AlarmTitleWrapper>
              <T2 color="gray12" size={{ '@initial': '6', '@bp570': '4' }} weight="4" >{alarm.label}</T2>
                <Box css={{ h: 10 }} />
                <T2 color="yellow1" size="4" weight="4" >ID: {alarm.id}</T2>
              </AlarmTitleWrapper>
            </AlarmHeaderWrapper>
            </LightTextShadowWrapper>
            <DarkTextShadowWrapper>
            <Box css={{ h: 12 }} />
            <Box>
              <T size="5" color="gray9">
                VIEW DATE DUE:{' '}
                <T size="5" color="gray11" >{alarm.dueDate}</T>
              </T>
              <Box css={{ h: 10 }} />
            </Box>
            </DarkTextShadowWrapper>
          </AlarmInfoWrapper>
          <AlarmViewCodeGridWrapper>
            <ProjectViewGrid data={alarm.unitCodeData} />
          </AlarmViewCodeGridWrapper>
        </MainDetailsWrapper>
          <OperatingSystem/>
          <LightTextShadowWrapper>
        <Box>
          <DescriptionWrapper title={alarm.description}>
            <T size="5" color="gray9">PROTOCOL DESC: {' '}</T>
            <T size="5" color="gray10" >{alarm.description}</T>
          </DescriptionWrapper>
        </Box>
        </LightTextShadowWrapper>
      </ContentWrapper>
    </Wrapper>
    
  );
};

const Wrapper = styled('div', {
  background: '$cyan14',

  //note for future will be userful

  transition: 'background 200ms ease-out',
  '&:hover': {
    background: '$cyan12',
  }
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  gap: '20px',
  justifyContent: 'space-between',
});

const MainDetailsWrapper = styled('div', {
  display: 'flex',
  flex: 1,
});


const DescriptionWrapper = styled('div', {
  flex: 1,
  maxHeight: '100px',
  overflow: 'hidden',
  // marginRight: '26px',
});

const AlarmHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '4px 0px 0px 0px',
});

const AlarmTitleWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

const AlarmInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const IconContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '30px',
});

const AlarmViewCodeGridWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const LightTextShadowWrapper = styled('div', {
    textShadow: `
    1px 1px 1px rgba(0, 0, 0, 0.5),
    -1px -1px 1px rgba(0, 0, 0, 0.5),
    1px -1px 1px rgba(0, 0, 0, 0.5),
    -1px 1px 1px rgba(0, 0, 0, 0.5),
    2px 1px 1px rgba(0, 0, 0, 0.5)
  `,
});

const DarkTextShadowWrapper = styled('div', {
    textShadow: `
      0.5px 0.5px 0.1px rgba(0, 0, 0, 0.5),
      -0.1px -0.1px 0.1px rgba(0, 0, 0, 0.5),
      1px -0.5px 0.1px rgba(0, 0, 0, 0.5),
      -1px 1px 0.1px rgba(0, 0, 0, 0.5),
      0.5px 1px 0.1px rgba(0, 0, 0, 0.5)
    `,
});




export default ProjectView;
