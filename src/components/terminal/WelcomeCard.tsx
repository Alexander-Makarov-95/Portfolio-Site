import clsx from "clsx";
import { useState } from "react";
import styles from "../terminal/styles/tailwind.module.css";

function WelcomeCard({ onEnterMainframe }) {
  const [isOpen, setIsOpen] = useState(true);
  const welcomeFrame = '/welcome.svg';
  const welcomeSound = '/enter_sound.mp3';

  const handleClose = () => {
    const audio = new Audio(welcomeSound);
    audio.play();
    setIsOpen(false);
    onEnterMainframe();
  };

  return (
    <div
      className={clsx(
        "absolute p-1",
        "w-full sm:w-96 md:w-[600px]", // Adjusts width based on screen size
        "h-[288px] md:h-[400px]", // Adjusts height based on screen size
        "bg-no-repeat bg-center bg-contain"
      )}
      style={{
        backgroundImage: `url(${welcomeFrame})`,
      }}
    >
      {isOpen && (
      <div className="flex h-full w-full flex-col items-center justify-center text-center px-2">
        {/* Base styles for mobile and overridden styles for larger screens */}
        <h1 className="text-[4vw] md:text-xl lg:text-2xl leading-tight md:leading-normal">//SingularityOS//</h1>
        <p className="text-[3vw] my-1 md:text-base lg:text-lg md:my-2 leading-tight md:leading-normal">
          Welcome to the Pathfinder's onboard operating system.
        </p>
        <p className="text-[3vw] my-1 md:text-base lg:text-lg md:my-2 leading-tight md:leading-normal">
          Click through the icons to view my projects.
        </p>
        <button className={clsx(styles.button, "text-sm sm:text-base md:text-lg")} onClick={handleClose}>
            Enter mainframe
          </button>
      </div>
    )}
  </div>
);
}

export default WelcomeCard;
