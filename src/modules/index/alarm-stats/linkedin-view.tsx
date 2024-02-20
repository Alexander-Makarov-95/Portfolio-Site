import CornerLinesBox from '@/components/ui/corner-lines-box';
import WarningIcon from '@/components/icon/warning-icon';
import { Box, T, T2 } from '@/components/stitches';
import { styled } from 'stitches.config';
import LinkedInViewCodeGrid from './alarm-view-code-grid';
import { type Alarm } from './alarm-view.types';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import LinkedinIcon from '@/components/icon/linkedin-icon';

interface Props {
  alarm: Alarm
}

const LinkedInView = ({ alarm }: Props) => {

   // Function to handle button click
   const handleButtonClick = () => {
      window.open('https://www.linkedin.com/in/alexander-makarov-52b5a215a/');
  };

  return (
    <Wrapper>
      <CornerDotsBox />
      <ContentWrapper>

        <MainDetailsWrapper>
          <AlarmInfoWrapper>
            <CornerLinesBox topLeft lineLength="10px" />
            <AlarmHeaderWrapper>
              <IconContainer>
                <WarningIcon color='red1' width={22} height={22} />
              </IconContainer>
              <AlarmTitleWrapper>
                <T2 color="gray12" size={{ '@initial': '6', '@bp570': '4' }} weight="4" >{alarm.label}</T2>

                <Box css={{ h: 4 }} />

                <T2 color="yellow1" size="4" weight="4" >ID: {alarm.id}</T2>

              </AlarmTitleWrapper>
            </AlarmHeaderWrapper>

            <Box css={{ h: 12 }} />

            <Box>
              <T size="5" color="gray9">
                DUE DATE:{' '}
                <T size="5" color="gray11" >{alarm.dueDate}</T>
              </T>
            </Box>

          </AlarmInfoWrapper>

          <AlarmViewCodeGridWrapper>
            <LinkedInViewCodeGrid data={alarm.unitCodeData} />
          </AlarmViewCodeGridWrapper>
        </MainDetailsWrapper>
        <ActivateButton onClick={handleButtonClick}>
          <LinkedinIcon width={100} height={25} />
          </ActivateButton> 
        <Box>
          <DescriptionWrapper title={alarm.description}>
            <T size="5" color="gray9">TRANSMISSION DESC: {' '}</T>
            <T size="5" color="gray10" >{alarm.description}</T>
            
          </DescriptionWrapper>
        </Box>
      </ContentWrapper>
      <CornerDotsBox />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: '200px',
  background: '$cyan14',

  transition: 'background 200ms ease-out',
  '&:hover': {
    background: '$cyan12',
  }
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  gap: '10px',
  justifyContent: 'space-between',
});

const MainDetailsWrapper = styled('div', {
  display: 'flex',
  flex: 1,
});

const DescriptionWrapper = styled('div', {
  flex: 1,
  maxHeight: '58px',
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

const ActivateButton = styled('button', {
  // Base styles
  padding: '8px 16px',
  backgroundColor: '$cyan11',
  border: 'none',
  borderRadius: '4px',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 200ms ease',
  width: '200px',

  // Hover styles
  '&:hover': {
    backgroundColor: '$cyan9',
    cursor: 'pointer',
  }
});

export default LinkedInView;