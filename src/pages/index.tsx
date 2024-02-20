import Head from 'next/head';
import { T, Box, ColoredBox } from '../components/stitches';
import HealthMonitorContainer from '@/modules/index/health-monitor/health-monitor-container';
import AnimateComponentMount from '@/components/animate-component-mount/animate-component-mount';
import { useEffect, useRef } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { type EChartsRef } from '@/components/echarts/echarts';
import useElementWidth from '@/helpers/hooks/use-element-width';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Home() {
  const chartRef = useRef<EChartsRef | undefined>(null);

  const { width, ref: chartUnitRef } = useElementWidth<HTMLDivElement>({ debounceMs: 100 });

  /** Chart is not resizing when parent does, so call resize() on chart when width of wrapper element changes. */
  useEffect(() => {
    chartRef.current?.resize();
  }, [width]);

  return (
    <>
      <Head>
        <title>Alexander Makarov | Software Developer</title>
        <meta name="description" content="Private website built with React, TypeScript & Next.js. For inquiries please go to the contact section." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <AnimateComponentMount>
          <ColoredBox color="cyan1" height={20}>
            <T color="gray1" weight="2" >MAKAROV'S QUANTUM</T>
          </ColoredBox>
        </AnimateComponentMount>

        <Box css={{ h: 20 }} />
          <Box key="2">
            <AnimateComponentMount delay={.3}>
              <Box 
              >
                <HealthMonitorContainer 
                />
              </Box>
            </AnimateComponentMount>
          </Box>
    </>
  );
};
