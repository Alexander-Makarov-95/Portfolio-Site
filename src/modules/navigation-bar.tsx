import Breadcrumbs from '@/components/breadcrumb/breadcrumb';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import HexagonFigureIcon from '@/components/icon/hexagon-figure-icon';
import { Box, T } from '@/components/stitches';
import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import MusicToggleButton from './index/theme-toggle-button';
import NavigationBarLink from './navigation-bar-link';
// import myMusic from '@/music/tchaikovsky.mp3'

interface Props {
  children?: ReactNode
}

const NavigationBar = ({ children }: Props) => {
  return (
    <AppWrapper>
      <Wrapper>

        <CornerDotsBox>
          <NavigationBarBox>
            <HexagonFigureIcon />
            <NavbarTitleContainer>
              <Box>
                <T color="yellow1" size={{ '@initial': 11, '@bp4': 9 }} weight={2}>SOFTWARE </T>
                <T size={{ '@initial': 11, '@bp4': 9 }} weight={1} >DEVELOPER</T>
              </Box>
              <Box>
                <T color="gray12" size={5} weight={2}>DIGITAL_ARTISAN / </T>
                <T color="gray11" size={5} weight={2}>ALEXANDER MAKAROV</T>
              </Box>
            </NavbarTitleContainer>
            <NavbarLinksContainer>
              <NavbarLinksRow>
                <NavigationBarLink href="/" label="HOME" exactPath />
                <NavigationBarLink href="/about" label="ABOUT ME" />
                <NavigationBarLink href="/technical" label="TECHNICAL" />
                <NavigationBarLink href="/projects" label="PROJECTS" />
                <NavigationBarLink href="/contact" label="CONTACT" />
                <MusicToggleButton src="/tchaikovsky.mp3" />
              </NavbarLinksRow>
            </NavbarLinksContainer>
          </NavigationBarBox>
        </CornerDotsBox>
        <Box css={{ h: 10, '@navBarCollapse': {} }} />
        <Breadcrumbs rootLabel="/" labelsToUppercase />
        <Box css={{ h: 30 }} />

        <main>
          {children}
        </main>
      </Wrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$sizes$tileSize',
  flex: 1,
  maxWidth: '1900px',
});

const NavigationBarBox = styled('div', {
  height: '60px',
  paddingLeft: '12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
  position: 'relative',

  /** Height for the space reserved for navigation buttons. */
  '$$buttonSpaceHeight': '30px',

  /** How many width px the space for the navigation buttons should start. */
  '$$buttonSpaceStart': '357px',

  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,

    background: '$navigationBarBackground',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% $$buttonSpaceHeight, calc(21px + $$buttonSpaceStart) $$buttonSpaceHeight, $$buttonSpaceStart 100%, 0% 100%)',
    '@navBarCollapse': {
      clipPath: 'unset'
    },
  },
  '@navBarCollapse': {
    marginBottom: 60
  },
});

const NavbarTitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '276px',
  whiteSpace: 'nowrap',
});

const NavbarLinksContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'end',
  height: '$sizes$navigationBarHeight',
  '@navBarCollapse': {
    position: 'absolute',
    width: '100%',
    top: '42px',
    left: '0px',
  },
});

const NavbarLinksRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 10,

  '@navBarCollapse': {
    overflowX: 'auto',
    scrollbarWidth: 'thin',
  },
});


export default NavigationBar;
