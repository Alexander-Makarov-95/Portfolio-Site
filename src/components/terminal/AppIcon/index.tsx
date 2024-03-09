import { useRef, useState } from "react";
import { useDragControls } from "framer-motion";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";
import clsx from "clsx";

import { IAppIconProps } from "./types";

export default function AppIcon({
  onDoubleClick,
  defaultPosition,
  isDraggable,
  title,
  width = 45,
  height = 40,
  icon,
}: IAppIconProps) {
  const [showAppBg, setShowAppBg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useDragControls();

  const onClickContent = () => {
    const isDoubleClick = clickCount === 1;

    if (isDoubleClick) {
      onDoubleClick?.();
    }

    const timeout = setTimeout(() => {
      setClickCount(0);
    }, 300);

    setClickCount((prev) => {
      if (prev === 1) {
        setShowAppBg(false);
        return 0;
      }
      setShowAppBg(true);
      return 1;
    });

    return () => clearTimeout(timeout);
  };

  useClickAway(ref, () => {
    setClickCount(0);
    setShowAppBg(false);
  });

  return (
    <>
      <style>
        {`
          @media only screen and (max-width: 600px) {
            .app-icon-title {
              font-size: ${width * 0.2}px !important; /* Adjust the font size for iPhone 12 Pro Max */
            }
            .app-icon {
              width: ${width * 0.9}px !important;
              height: ${width * 0.8}px !important;
              
            }
          }
        `}
      </style>
      <motion.div
        className={clsx("flex h-fit w-fit flex-col items-center justify-center p-2")}
        drag={isDraggable}
        initial={defaultPosition}
        dragControls={controls}
        dragMomentum={false}
        ref={ref}
        onClickCapture={onClickContent}
        style={{ backgroundColor: showAppBg ? "rgba(255, 255, 255, 0.1)" : "transparent" }as React.CSSProperties}
      >
        <div
          className={clsx("bg-contain bg-center bg-no-repeat app-icon")}
          style={{
            width: width * 0.8,
            height: width * 0.8,
            backgroundImage: `url(${icon})`,
          }}
        />
        <strong
          className="break-words text-center app-icon-title"
          style={{
            width: width * 1.2,
            fontSize: `${width * 0.27}px`,
            color: showAppBg ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          }}
        >
          {title}
        </strong>
      </motion.div>
    </>
  );
}
