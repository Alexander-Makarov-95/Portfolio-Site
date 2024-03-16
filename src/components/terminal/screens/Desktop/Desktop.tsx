import { styled } from "@stitches/react";
import React, { useState, useEffect } from "react";
import { useApps } from "../../hooks/useApp";
import AppIcon from "../../AppIcon";
import Application from "../../Application";
import { AppsOnDesktop } from "./helper";
import WelcomeCard from "../../WelcomeCard";
import Loading from "../Loading"; // Import Loading component

const Desktop = () => {
  const { apps, addApp } = useApps();
  const [isDesktopVisible, setIsDesktopVisible] = useState(false); // State to control visibility
  const topHeaderImage = "/top_bar.svg";
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Update isMobile based on the client-side window width
    setIsMobile(window.innerWidth < 768); // Change 768 to your mobile breakpoint

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to your mobile breakpoint
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEnterMainframe = () => {
    // Immediately trigger loading
    setLoading(true);

    // Wait for some time then show the desktop and hide loading
    setTimeout(() => {
      setLoading(false);
      setIsDesktopVisible(true);
    }, 2100); // Adjust the delay as needed
  };

  return (
    <>
      <WelcomeCardContainer> 
        <WelcomeCard onEnterMainframe={handleEnterMainframe} />
        {loading && (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        )}
        {isDesktopVisible && ( // Conditional rendering based on isDesktopVisible
          <DesktopBox>
            <DottedBackground>
              <TopBar
                style={{ backgroundImage: `url(${topHeaderImage})` }}
              ></TopBar>
              {apps.map((app) => (
                <Application key={app.id} {...app} />
              ))}
              {AppsOnDesktop.map((app) => (
                <AppIcon
                  key={app.id}
                  isDraggable
                  onDoubleClick={() => addApp({ name: app.id })}
                  // Check if isMobile is not null before determining the position
                  defaultPosition={isMobile !== null ? (isMobile ? app.mobileDefaultPosition : app.defaultPosition) : app.defaultPosition}
                  icon={app.icon}
                  title={app.title}
                />
              ))}
            </DottedBackground>
          </DesktopBox>
        )}
      </WelcomeCardContainer>
    </>
  );
};

const WelcomeCardContainer = styled("div", {
  position: "relative",
  height: "400px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '@media (min-width: 320px) and (max-width: 428px)': { 
    height: '55vw'
  },
  '@media (min-width: 429px) and (max-width: 510px)': {
    height: '50vw',
  },
  '@media (min-width: 511px) and (max-width: 640px)': {
    height: '60vw',
  },
  // '@media (min-width: 641px) and (max-width: 768px)': {
  //   height: '55vw'
  // },
});

const DesktopBox = styled("main", {
  position: "absolute",
  height: "292px",
  width: '85%',
  backgroundColor: "$cyan9",
  backgroundImage: "url(/brand/singularity.png)",
  backgroundSize: "150px 150px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto",
  top: 0,
  bottom: 8,
  left: 0,
  right: 6,
  overflow: "hidden",
  '@media (min-width: 320px) and (max-width: 350px)': {
    height: '90%',
    top: 5,
    left: 4,
    backgroundImage: 'none',
  },
  '@media (min-width: 351px) and (max-width: 380px)': {
    height: '82%',
    top: 3,
    left: 3,
    backgroundImage: 'none',
  },
  '@media (min-width: 381px) and (max-width: 400px)': {
    height: '42vw',
    top: 3,
    left: 3,
    backgroundImage: 'none',
  },
  '@media (min-width: 401px) and (max-width: 428px)': {
    height: '39vw',
    top: 3,
    left: 3,
    backgroundImage: 'none',
  },
  '@media (min-width: 429px) and (max-width: 510px)': {
    height: '40vw',
    top: 4,
    left: 3,
    backgroundImage: 'none',
  },
  '@media (min-width: 511px) and (max-width: 640px)': {
    height: '43vw',
    backgroundImage: 'none',
    top: 2,
    // left: 25,
  },
  // '@media (min-width: 641px) and (max-width: 768px)': {
  //   backgroundImage: 'none',
  //   height: '60%'

  // },
});

const DottedBackground = styled("div", {
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  background: "url(/pattern/dotted/lightAlt.svg)",
  backgroundSize: "10px",
  backgroundRepeat: "repeat",

});

const TopBar = styled("div", {
  position: "relative",
  height: "36px",
  width: "100%",
  backgroundSize: "425px 40px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

    '@media (min-width: 320px) and (max-width: 428px)': {
      backgroundSize: "250px"
    },
    '@media (min-width: 429px) and (max-width: 510px)': {
        backgroundSize: "250px",
    },
    '@media (min-width: 511px) and (max-width: 640px)': {
      backgroundSize: "350px",
    },
    '@media (min-width: 641px) and (max-width: 768px)': {
       
  
    },
});

const LoadingWrapper = styled("div", {
  display: 'flex',
  height: '292px',
  width: '502px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: 'rgba(9, 9, 11, 0.6)',
  color: 'white',
  textAlign: 'center',
  margin: "auto",
  left: "7.7%",
  top: 49,
  overflow: 'hidden',
  position: 'absolute',
  '@media (min-width: 320px) and (max-width: 350px)': {
    height: '48vw',
    width: '85%',
    top: 10,
    left: 24,
    
  },
  '@media (min-width: 351px) and (max-width: 380px)': {
    height: '44vw',
    width: '85%',
    top: 18,
    left: 24,
    
  },
  '@media (min-width: 381px) and (max-width: 400px)': {
    height: '42vw',
    width: '85%',
    top: 24,
    left: 24,
    
  },
  '@media (min-width: 401px) and (max-width: 428px)': {
    height: '39.5vw',
    width: '85%',
    top: '13%',
    left: '7%'
    
  },
  '@media (min-width: 429px) and (max-width: 510px)': {
    height: '40.5vw',
    width: '85%',
    top: '9%',
    left: '7%',
    
  },
  '@media (min-width: 511px) and (max-width: 640px)': {
    height: '43vw',
    width: '85%',
    top: '13%',
    left: '7%',
  },
  // '@media (min-width: 641px) and (max-width: 768px)': {
  //   backgroundImage: 'none',
  //   height: '60%'

  // },
});


export default Desktop;
