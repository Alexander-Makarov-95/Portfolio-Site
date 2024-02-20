import { useEffect, useState } from "react";
import { useApps } from "../hooks/useApp";
import AppWrapper from "./AppWrapper";
import { IApplicationProps } from "./types";
import { WindowProvider } from "../contexts/WindowContext";
import { useWindowContext } from "./helper";
import Draggable from "./Draggable";

function Application({ Node, ...props }: IApplicationProps) {
  const [drag, setDrag] = useState(false);
  const [mouse, setMouse] = useState<MouseEvent>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

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

  function handleFullscreen() {
    setIsFullscreen((prev) => !prev);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Draggable
      drag={!isFullscreen && drag}
      mouse={mouse}
      setDrag={setDrag}
      x={props.x}
      y={props.y}
      isFullscreen={isFullscreen}
      initialHeight={initialSize.height}
      initialWidth={initialSize.width}
    >
      <div
        style={{
          width: isFullscreen ? "600px" : initialSize.width,
          height: isFullscreen ? "calc(100vh - 40px)" : initialSize.height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "3px solid rgba(0, 0, 0, 0.4)",
          backgroundImage: `url(${thankYouImage})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
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
                height: "24px",
                width: "24px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "rgba(0, 0, 0, 0.8)",
                fontSize: "24px",
              }}
              onClick={close}
            >
              x
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
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
