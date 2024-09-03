import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Detail from "../../Pages/Detail/Detail";
import Error from "../../Pages/Error/Error";

export default function Main(props) {
  const theme = props.theme;
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/project/:project" exact element={<Detail />} />
          <Route path="/invalidProjectId" exact element={<Error />} />
          <Route path="/" exact element={<Home props />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
