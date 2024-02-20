import { SlicedButton } from '@/components/stitches/sliced-button';
import { useEffect, useState, useRef } from 'react';

const MusicToggleButton = ({ src }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    // Play the music on first interaction if not already playing
    if (!isUserInteracted) {
      audioRef.current.play();
      setIsUserInteracted(true);
    }

    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={src} muted={isMuted} autoPlay loop />
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