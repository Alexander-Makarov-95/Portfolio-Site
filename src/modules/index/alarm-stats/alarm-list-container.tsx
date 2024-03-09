import { Box, WidgetWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import { linkedInMatrix, warpMailProtocol } from './alarms';
import WarpMailProtocolView from './alarm-view';
import LinkedInView from './linkedin-view'

import WidgetHeader from '@/components/widget/widget-header';


//contact list

const CommunicationListContainer = () => {
  return (
    <>
      <WidgetWrapper>
        <WidgetHeader>
          <WidgetHeader.Left>
            <T color="cyan1" weight={2}>COMMUNICATION </T>
            <T color="cyan1" weight={1} >BEACON</T>
          </WidgetHeader.Left>
        </WidgetHeader>

        <Box css={{ h: 10 }} />

        <CommunicationList>
        <WarpMailProtocolView alarm={warpMailProtocol} />
        <LinkedInView alarm={linkedInMatrix} />
        </CommunicationList>

      </WidgetWrapper>
    </>
  );
};

const CommunicationList = styled('div', {
  height: 'calc($sizes$tileSize * 10)',
  // overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  '@media (max-width: 510px)': {
    // width: '375px'
  }
});

export default CommunicationListContainer;
