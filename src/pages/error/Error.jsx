import { useEffect } from "react";
import { useState } from "react";
import Menu from "../../components/menu/Menu";
import Splash from "../splash/Splash";
import "./Error.scss";

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
          <div class="stars">
            <div class="central-body">
              <img class="image-404" src="./404.svg" width="300px" alt="404" />
              <p className="error_msg">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <a href="/" class="btn-go-home">
                GO BACK HOME
              </a>
            </div>
            <div class="objects">
              <img
                class="object_rocket"
                src="./rocket.svg"
                width="40px"
                alt="rocket"
              />
              <div class="earth-moon">
                <img
                  class="object_earth"
                  src="./earth.svg"
                  width="100px"
                  alt="earth"
                />
                <img
                  class="object_moon"
                  src="./moon.svg"
                  width="80px"
                  alt="moon"
                />
              </div>
              <div class="box_astronaut">
                <img
                  class="object_astronaut"
                  src="./astronaut.svg"
                  width="140px"
                  alt="astronaut"
                />
              </div>
            </div>
            <div class="glowing_stars">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
