import { useEffect } from "react";
import { useState } from "react";
import Menu from "../../Components/Menu/Menu";
import Splash from "../Splash/Splash";
import "./Error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000);
  }, []);

  return splash ? (
    <Splash />
  ) : (
    <>
      <Menu detail={true} />
      <div className="home error_main">
        <div className="error_container">
          <div className="stars">
            <div className="central-body">
              <img
                className="image-404"
                src="src\Assets\Background\404.svg"
                width="300px"
                alt="404"
              />
              <p className="error_msg">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <Link to="/" className="btn-go-home">
                GO BACK HOME
              </Link>
            </div>
            <div className="objects">
              <img
                className="object_rocket"
                src="src\Assets\Background\rocket.svg"
                width="40px"
                alt="rocket"
              />
              <div className="earth-moon">
                <img
                  className="object_earth"
                  src="src\Assets\Background\earth.svg"
                  width="100px"
                  alt="earth"
                />
                <img
                  className="object_moon"
                  src="src\Assets\Background\moon.svg"
                  width="80px"
                  alt="moon"
                />
              </div>
              <div className="box_astronaut">
                <img
                  className="object_astronaut"
                  src="src\Assets\Background\astronaut.svg"
                  width="140px"
                  alt="astronaut"
                />
              </div>
            </div>
            <div className="glowing_stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
