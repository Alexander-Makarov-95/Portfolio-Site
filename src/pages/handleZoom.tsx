// DisableZoom.js
import { useEffect } from 'react';

const DisableZoom = () => {
  useEffect(() => {
    // Prevent pinch zoom
    const preventZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Disable double-tap zoom, but allow single taps
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (e) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('touchend', preventDoubleTapZoom, { passive: false });

    return () => {
      // Cleanup listeners when the component is unmounted
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('touchend', preventDoubleTapZoom);
    };
  }, []);

  return null; // This component does not render anything
};

export default DisableZoom;
