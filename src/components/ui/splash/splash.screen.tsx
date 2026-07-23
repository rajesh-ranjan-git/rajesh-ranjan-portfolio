import splashStyles from "@/styles/splash.module.css";
import { SplashScreenProps } from "@/types/props/splash.props.types";
import SplashLoader from "@/components/ui/splash/splash.loader";

const SplashScreen = ({
  loadingText = "Loading...",
  endingText = "Welcome...",
  backgroundColor = "#040b14",
  className = "",
  duration = 2000,
}: SplashScreenProps) => {
  return (
    <div
      className={`z-100 fixed inset-0 h-screen w-screen ${className}`}
      style={{ backgroundColor }}
    >
      <div
        className={`w-full h-full overflow-hidden ${splashStyles.splash_screen}`}
      >
        <SplashLoader
          loadingText={loadingText}
          endingText={endingText}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
