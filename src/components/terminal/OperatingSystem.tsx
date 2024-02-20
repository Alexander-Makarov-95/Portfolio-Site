// import "../terminal/styles/globals.scss"
import styles from "../terminal/styles/tailwind.module.css";
import ApplicationProvider from "./contexts/ApplicationContext";
import Desktop from "./screens/Desktop/Desktop";

// Pages
import { PythonProvider } from "./contexts/PythonContext";
import { WebContainerProvider } from "./contexts/WebContainerContext";

const OperatingSystem = () => {
  return (
    <div className={styles.customDiv}>
      <ApplicationProvider>
        <WebContainerProvider>
          <PythonProvider>
            <Desktop />
          </PythonProvider>
        </WebContainerProvider>
      </ApplicationProvider>
    </div>
  );
};

export default OperatingSystem;
