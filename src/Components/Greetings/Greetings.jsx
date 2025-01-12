import "./Greetings.scss";
import SocialMedia from "../SocialMedia/SocialMedia";
import GreetingsImg from "./GreetingsImg/GreetingsImg";
import MyParticles from "../Particles/Particles";
import TypeText from "../TypeText/TypeText";
import { ButtonMask1, ButtonMask2 } from "../Button/Button";
import { Helmet } from "react-helmet";
import obj_triangle from "../../Assets/Background/obj_triangle.png";

export default function Greetings() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: "smooth",
      /* you can also use 'auto' behavior
         in place of 'smooth' */
    });
  };

  return (
    <>
      <Helmet>
        <title>Rajesh Ranjan | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Rajesh Ranjan's software developer portfolio. Explore my projects, skills, and get in touch."
        />
      </Helmet>

      <div className="d-flex align-items-center jumbotron" id="greetings">
        <div className="rectangle rectangle_1"></div>
        <div className="rectangle rectangle_2"></div>
        <div className="rectangle_transparent rectangle_transparent_1"></div>
        <div className="rectangle_transparent rectangle_transparent_2"></div>
        <div className="circle circle_1"></div>
        <div className="circle circle_2"></div>
        <div className="circle circle_3"></div>
        <div className="triangle triangle_1">
          <img src={obj_triangle} alt="" />
        </div>
        <div className="triangle triangle_2">
          <img src={obj_triangle} alt="" />
        </div>
        <div className="triangle triangle_3">
          <img src={obj_triangle} alt="" />
        </div>
        <div className="triangle triangle_4">
          <img src={obj_triangle} alt="" />
        </div>

        <MyParticles />
        <div className="fade_reveal">
          <div className="home_content">
            <div className="row">
              <div className="col-md-7 home_header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading_name">
                  I'm
                  <strong className="main_name">
                    {" "}
                    &nbsp;&nbsp;Rajesh Ranjan
                  </strong>
                </h1>

                <div style={{ padding: "20px 0 30px", textAlign: "left" }}>
                  <TypeText />
                </div>
                <SocialMedia />

                <ButtonMask2
                  className="contact_me_btn"
                  onClick={() => scrollToContact()}
                >
                  CONTACT ME
                </ButtonMask2>

                <ButtonMask1
                  onClick={() =>
                    openInNewTab(
                      "https://drive.google.com/file/d/1CyTrByjuOKUuNyHRzd48Ko8bFi7Vu9PV/view?usp=drive_link"
                    )
                  }
                  className="download_resume_btn"
                >
                  SEE MY RESUME
                </ButtonMask1>
              </div>

              <div
                className="col-md-5"
                id="react-logo"
                style={{ paddingBottom: 20 }}
              >
                <GreetingsImg className="img_fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
