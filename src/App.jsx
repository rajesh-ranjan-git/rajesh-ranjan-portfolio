import favicon1 from "../public/title_pic-circular.png";
import favicon2 from "../public/namaste.png";
import "./App.scss";

const handleTitle = () => {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") {
      document.title = "Come back to portfolio";
      document.getElementsByTagName("link")[0].href = favicon2;
    } else {
      document.title = "Rajesh Ranjan | Software Developer Portfolio";
      document.getElementsByTagName("link")[0].href = favicon1;
    }
  });
};

function App() {
  handleTitle();
  return <>Rajesh Ranjan | Portfolio</>;
}

export default App;
