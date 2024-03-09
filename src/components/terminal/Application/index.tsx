import { useEffect, useState } from "react";
import { useApps } from "../hooks/useApp";
import AppWrapper from "./AppWrapper";
import { IApplicationProps } from "./types";
import { WindowProvider } from "../contexts/WindowContext";
import { useWindowContext } from "./helper";
import Draggable from "./Draggable";


function Application({ Node, width, height, ...props }: IApplicationProps & { width?: string, height?: string }) {
  const [drag, setDrag] = useState(false);
  const [mouse, setMouse] = useState<MouseEvent>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { removeApp, setAppOnFocus } = useApps();
  const { setIsResizable, initialSize, setInitialSize } = useWindowContext();

  const thankYouImage = "/thank_you.svg";

  const move = (event: any) => {
    setMouse(event);
    setDrag(true);
  };

  const close = () => {
    setTimeout(() => {
      removeApp(props.id);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

console.log(windowHeight, windowWidth)

  return (
    <Draggable
      drag={drag}
      mouse={mouse}
      setDrag={setDrag}
      x={props.x}
      y={props.y}
      initialHeight={initialSize.height}
      initialWidth={initialSize.width}
    >
      <div
        style={{
          width: windowWidth <=500? "150px" : initialSize.width,
          height: windowWidth <= 500? "100px" : initialSize.height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: windowWidth <=500? "12px" : "18",
          border: "3px solid rgba(0, 0, 0, 0.4)",
        }}
        onMouseDown={() => {
          setAppOnFocus(props.id);
        }}
      >
        <div
          style={{
            zIndex: 30,
            marginTop: 0,
            height: "30px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "hsla(19, 77%, 58%, 0.7)",
            color: "rgba(0, 0, 0, 0.7)",
            userSelect: "none",
            
          }}
          onPointerDown={move}
        >
          <strong
            style={{
              marginLeft: "auto",
              display: "block",
              opacity: loading ? 0 : 1,
            }}
          >
            {props.title}
          </strong>

          <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
            <button
              style={{
                display: "flex",
                height: windowWidth <=500? "16px" : "24px",
                width:  windowWidth <=500? "16px" : "24px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "rgba(0, 0, 0, 0.8)",
                fontSize: windowWidth <=500? "10px": "24px",
              }}
              onClick={close}
            >
              x
            </button>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backgroundImage: `url(${thankYouImage})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          }}
        >
          <WindowProvider
            appId={props.id}
            setIsResizable={setIsResizable}
            isFullscreen={isFullscreen}
            initialSize={initialSize}
            setInitialSize={setInitialSize}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                opacity: loading ? 0 : 1,
              }}
            >
              <AppWrapper Node={Node} appID={props.id} />
            </div>
          </WindowProvider>
        </div>
      </div>
    </Draggable>
  );
}

export default Application;
