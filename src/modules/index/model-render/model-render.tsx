import { Box, T, WidgetInfoTextGroup, WidgetInfoTextRow, WidgetInfoTextWrapper } from '@/components/stitches';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { styled } from 'stitches.config';
import { AnimatePresence, motion } from 'framer-motion';
import dayjs, { type Dayjs } from 'dayjs';
import { useTheme } from '@/contexts/theme-provider/theme-provider';
import useIsMounted from '@/helpers/hooks/use-is-mounted';
import useRandomRange from '@/helpers/hooks/use-random-range';
import { imageLoader } from '@/helpers/image-loader';

const ModelRender = () => {
  const { resolvedTheme } = useTheme();

  const [date, setDate] = useState<Dayjs>();

  const [hover, setHover] = useState<boolean>(false);

  const fps = useRandomRange({ minValue: 28, maxValue: 37, updateInterval: 1000, digits: 8 });

  const isMounted = useIsMounted();

  useEffect(() => {
    setDate(dayjs());
  }, []);

  const isLight: boolean = resolvedTheme === 'light';

  const srcPath = '/quark.gif'
  

  const [animationEnded, setAnimationEnded] = useState<boolean>(false);

  return (
    <Wrapper>
      <WidgetInfoTextWrapper>
        <WidgetInfoTextRow>
          <WidgetInfoTextGroup>
            <T size={5} color="gray8" padding="tiny">ALIAS: MAKAROV</T>
            <T size={5} color="gray8" padding="tiny">DOB: 04/12/1995 </T>
            <T size={5} color="gray8" padding="tiny">STATUS: JOB-HUNTING </T>
            <T size={5} color="gray8" padding="tiny">LOCATION: SYDNEY, AUSTRALIA </T>
            <T size={5} color="gray8" padding="tiny">UNIT GROUP: BLACKBOOK.AI </T>
          </WidgetInfoTextGroup>
          <WidgetInfoTextGroup align="right">
            <T size={5} color="gray8" padding="tiny">{date?.toISOString()}</T>
            <T size={5} color="gray8" padding="tiny">[UP TO DATE]</T>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
        <WidgetInfoTextRow align="bottom">
          <WidgetInfoTextGroup>
            <T background="cyan1" size={5} color="gray1" padding="tiny">FPS: {fps}</T>
          </WidgetInfoTextGroup>
          <WidgetInfoTextGroup align="right">
            {/* <T size={5} color="gray8" padding="tiny">FRAMER-MOTION</T> */}
            <T size={5} color="gray8" padding="tiny">8.5.3-ALPHA.1 </T>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
      </WidgetInfoTextWrapper>
      <ImageWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >

        <AnimatePresence>

          <DottedCircle
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={animationEnded ? { scale: hover ? [1, 1, 1] : [1.02, 1.05, 1.02], opacity: 1 } : { opacity: 1 }}
            onAnimationComplete={() => setAnimationEnded(true)}
            transition={animationEnded
              ? {
                  repeat: Infinity,
                  duration: 4
                }
              : {
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 1.8,
                }}
            color={hover ? 'cyan1' : undefined}
          />
        </AnimatePresence>
        <Box
          as={motion.div}
          animate={{
            rotate: [0, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        >
          <AnimatePresence>
            {isMounted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: 'easeOut' }}
                exit={{ scale: 0 }}
                key="quark_gif"
              >
                <Image
                  loader={imageLoader}
                  src={srcPath}
                  alt="Sample analysis"
                  width={250}
                  height={250}
                  draggable={false}
                  style={{ userSelect: 'none' }}
                />
              </motion.div>

            )}
          </AnimatePresence>
        </Box>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  background: '$cyan14',
  // backdropFilter: 'blur(2.5px)',
  // border: '0.1px solid rgba(0, 255, 255, 0.025)'
});

const ImageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '360px',
  height: '300px',
});

const DottedCircle = styled(motion.div, {
  position: 'absolute',
  width: '260px',
  height: '260px',
  borderRadius: '50%',
  border: '3px dotted $cyan2',
  transition: '200ms',
  variants: {
    color: {
      cyan1: {
        border: '3px dotted $cyan1',
      },
      cyan9: {
        border: '3px dotted $cyan9',
      },
    }
  }
});

export default ModelRender;
