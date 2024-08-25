import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Detail from "../../Pages/Detail/Detail";
import Error from "../../Pages/Error/Error";
import Art from "../../Pages/Art/Art";

export default function Main(props) {
  const theme = props.theme;
  return (
    <div>
      <HashRouter basename="">
        <Routes>
          <Route path="/project:project" exact element={<Detail />} />
          <Route path="/" exact element={<Home props />} />
          <Route path="/artwork" exact element={<Art props />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
