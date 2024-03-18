import { useEffect } from "react";
import { useWindow } from "../contexts/WindowContext";

export default function SteamSync() {
  const { setInitialSize } = useWindow();

  useEffect(() => {
    setInitialSize({
      width: 250,
      height: 175,
    });
    // Open the link when the component mounts
    window.open("https://github.com/Alexander-Makarov-95/Portfolio_Site", "_blank");
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center border-[6px]">
      <strong style={{ color: "rgba(0, 0, 0, 0.7)" }}>I hope you enjoyed!</strong>
    </div>
  );
}

 