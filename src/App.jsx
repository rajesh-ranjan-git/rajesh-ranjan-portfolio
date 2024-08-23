import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import { handleTitle } from "./Components/TitleChangeOnTabSwitch/TitleChangeOnTabSwitch";

function App() {
  handleTitle();
  return (
    <>
      <NavBar />
      <div>Rajesh Ranjan | Portfolio</div>
    </>
  );
}

export default App;
