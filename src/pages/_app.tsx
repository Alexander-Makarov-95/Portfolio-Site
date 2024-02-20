import { ThemeProvider } from '@/contexts/theme-provider/theme-provider';
import type { AppProps } from 'next/app';
import { theme, lightTheme } from '../../stitches.config';
import NavigationBar from '@/modules/navigation-bar';
import { AnimatePresence } from 'framer-motion';
import '@/helpers/styles/global.scss';
import Background from '../components/background/background'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="theme"
      value={{
        dark: theme.className,
        light: lightTheme.className,
      }}
    >
    <div style={{ 
      position: 'fixed',
      zIndex: -1,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Background /> 
      </div>
      <NavigationBar>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </NavigationBar>
    </ThemeProvider>
  );
}