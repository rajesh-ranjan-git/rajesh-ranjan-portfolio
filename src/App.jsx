import "./App.scss";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import { handleTitle } from "./Components/TitleChangeOnTabSwitch/TitleChangeOnTabSwitch";

function App() {
  handleTitle();
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
