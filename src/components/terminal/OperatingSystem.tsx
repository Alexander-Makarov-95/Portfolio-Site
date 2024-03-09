import styles from "../terminal/styles/tailwind.module.css";
import ApplicationProvider from "./contexts/ApplicationContext";
import Desktop from "./screens/Desktop/Desktop";

const OperatingSystem = () => {
  return (
    <div className={styles.customDiv}>
      <ApplicationProvider>
            <Desktop />
      </ApplicationProvider>
    </div>
  );
};

export default OperatingSystem;
