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
      {/* {loading && <Loading />} */}
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
  width: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '@media (max-width: 428px)': { 
    width: '100%', 
    height: '200px', 
  },
});


const DesktopBox = styled("main", {
  position: "absolute", // Position it absolutely to control its placement precisely
  height: "292px", // Set the height as required
  width: "502px", // Set the width as required
  backgroundColor: "$cyan9",
  backgroundImage: "url(/brand/singularity.png)",
  backgroundSize: "150px 150px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "auto", // Center the box
  top: 0,
  bottom: 8,
  left: 0,
  right: 6,
  overflow: "hidden",
  '@media (max-width: 428px)': { 
    width: '85%', 
    height: '84%', 
    left: 3,
    bottom: 6,
    backgroundImage: 'none'
  },
  
});

const DottedBackground = styled("div", {
  height: "100%",
  width: "100%",
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
  '@media (max-width: 428px)': { 
    backgroundSize: "285px",
  },
});

const LoadingWrapper = styled("div", {
  // position: "absolute",
  // height: "293px", // Ensure this matches DesktopBox height
  // width: "500px", // Ensure this matches DesktopBox width
  // top: "49%", // Center vertically
  // left: "49.5%", // Center horizontally
  // transform: "translate(-50%, -50%)", // Adjust based on the size to center properly
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center"
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
  '@media (max-width: 428px)': { 
    width: '84%', 
    height: '84%',
    top: 15
  },

});

export default Desktop;
