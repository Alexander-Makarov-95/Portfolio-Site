import clsx from "clsx";
import { useState } from "react";
import styles from "../terminal/styles/tailwind.module.css";

function WelcomeCard({ onEnterMainframe }) {
  const [isOpen, setIsOpen] = useState(true); // State to control the visibility of the card content
  const cardWidth = 600;
  const cardHeight = 400;

  const welcomeFrame = '/welcome.svg';
  const welcomeSound = '/enter_sound.mp3';

  const handleClose = () => {
    const audio = new Audio(welcomeSound);
    audio.play();
    setIsOpen(false); // Hide the content but keep the background
    onEnterMainframe();
  };

  return (
    <div
      className={clsx("absolute p-1")}
      style={{
        width: cardWidth,
        height: cardHeight,
        backgroundImage: `url(${welcomeFrame})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Conditionally render the inner content based on isOpen */}
      {isOpen && (
        <div className="flex h-full w-full flex-col items-center justify-center text-center">
          <h1 className={styles.customH1}>//SingularityOS//</h1>
          <p className={styles.customP}>
            Welcome to the Pathfinder's onboard operating system.
          </p>
          <p className={styles.customP}>Click through the icons to view my projects.</p>
          <button className={styles.button} onClick={handleClose}>
            Enter mainframe
          </button>
        </div>
      )}
    </div>
  );
}

export default WelcomeCard;
