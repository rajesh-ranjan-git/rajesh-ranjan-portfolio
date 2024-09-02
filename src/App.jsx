import "./Styles/App.scss";
import { ThemeProvider } from "styled-components";
import Main from "./Containers/Main/Main";
import { chosenTheme } from "./Components/Theme/theme";
import { Toaster } from "react-hot-toast";
import { handleTitle } from "./Components/TitleChangeOnTabSwitch/TitleChangeOnTabSwitch";

function App() {
  handleTitle();
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <div>
          <Main theme={chosenTheme} />
          <Toaster position="bottom-right" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
