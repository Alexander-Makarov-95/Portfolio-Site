import React, { useEffect, useState, useRef } from 'react';
import { SlicedButton } from '@/components/stitches/sliced-button';

const MusicToggleButton = ({ src }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  // Explicitly type the ref as HTMLAudioElement
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    // Ensure audioRef.current is not null and call play()
    if (!isUserInteracted && audioRef.current) {
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
      setIsUserInteracted(true);
    }

    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if(audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <audio ref={audioRef} src={src} autoPlay loop />
      <SlicedButton
        onClick={toggleMute}
        variant={{ '@navBarCollapse': 'standard' }}
        size={{ '@bp4': 'dense' }}
        fontSize={5}
        weight={3}
        color="cyan8"
      >
        {isMuted ? 'UNMUTE AMBIENCE' : 'MUTE AMBIENCE'}
      </SlicedButton>
    </>
  );
};

export default MusicToggleButton;
