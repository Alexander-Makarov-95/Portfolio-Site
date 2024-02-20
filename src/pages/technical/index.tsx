import AnimateComponentMount from '@/components/animate-component-mount/animate-component-mount';
import { Box, ColoredBox, T } from '@/components/stitches';
import Head from 'next/head';
import { styled } from 'stitches.config';
import Technical from '@/modules/technical/technical'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander Makarov | technical</title>
        <meta name="description" content="Technical expertise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1">
            <T color="gray1" weight="2" >SKILLS</T>
          </ColoredBox>
        </AnimateComponentMount>

        <Box css={{ h: 20 }} />

        <ComponentsContainer>
          <Box css={{ flex: 1, minWidth: 300, maxWidth: 600}}>
            <AnimateComponentMount>
              <Technical />
            </AnimateComponentMount>
          </Box>
        </ComponentsContainer>
        <Box css={{ h: 20 }} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ComponentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  flexWrap: 'wrap',
});
