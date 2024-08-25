import "./splash.scss";
import Loader from "../../components/Loader/Loader";

export default function Splash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <Loader id="logo" theme={props.theme} />
      </div>
    </div>
  );
}
