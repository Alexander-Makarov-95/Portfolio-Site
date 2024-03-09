import { useEffect, useState } from "react";
import { useApps } from "../../terminal/hooks/useApp";

const loadingChar = ["|", "/", "—", "\\"];

export default function Loading() {
  const [loadingCount, setLoadingCount] = useState(0);
  const { clearApps } = useApps();

  useEffect(() => {
    clearApps();

    const interval = setInterval(() => {
      setLoadingCount((prev) => {
        if (prev === 3) return 0;
        return prev + 1;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
        <style>
        {`
          @media (max-width: 600px) {
            .text-2xl {
              font-size: 1.2rem; /* Adjust font size for smaller devices */
              line-height: 1.2; /* Adjust line height to make text closer */
              
            }
            .text-1xl {
              font-size: 0.8rem; /* Adjust font size for smaller devices */
              line-height: 1.2; /* Adjust line height to make text closer */
              
            }
            .loading-char {
              padding: 10px; /* Adjust the padding as needed */
            }
          }
        `}
      </style>
      <p className="text-2xl">
        SingularityOS <br />
        Beta Release
      </p>
      <span className="loading-char">{loadingChar[loadingCount]}</span>
      <div>
        <p className="text-1xl">
          Copyright (c) Makarov Corporation, 1995.
          <br />
          All Rights Reserved. SingularityOS is a registered trademark of Makarov Corp.
        </p>
      </div>
    </div>
  );
}
