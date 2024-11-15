import "./About.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import Skills from "../Skills/Skills";
import HomeContent from "../HomeContent/HomeContent";

export default function About() {
  return (
    <>
      <HomeContent id="about" class="about">
        <Fade
          direction="bottom"
          className="about_detail"
          duration={2000}
          triggerOnce
        >
          <div>
            <div>
              <h2 className="section-title">About</h2>
            </div>

            <p>
              Driven and detail-oriented Web Developer with expertise in the
              MERN stack (MongoDB, Express.js, React, Node.js) seeking a
              challenging role to leverage my skills in building scalable,
              responsive, and high-performance applications. Passionate about
              developing efficient back-end solutions and intuitive front-end
              designs, I am eager to contribute to a dynamic team focused on
              delivering innovative digital experiences.
              <br />
              <br />I enjoy creating things that live on the internet, whether
              that be websites, applications, games, or anything in between. I
              enjoy the process of turning ideas into reality using creative
              solutions. I’m always curious about learning new skills, tools,
              and concepts. My goal is to always build products that provide
              pixel-perfect, performance-optimized experiences. I'm learning new
              technologies day by day, and make projects on them to showcase my
              abilities. Let's connect and explore opportunities together!
            </p>
          </div>
        </Fade>
        <div className="row">
          <Fade
            className="col-lg-4 about_img"
            direction="left"
            duration={2000}
            delay={20}
            // triggerOnce
          >
            <img
              id="self_img"
              src="/favicon/title_pic_circular.png"
              className="img-fluid"
              alt="Rajesh Ranjan"
            />
          </Fade>
          <Fade
            direction="right"
            className="about_content"
            duration={2000}
            delay={20}
            // triggerOnce
          >
            <div style={{ paddingLeft: 50 }}>
              <h3>Full Stack Web Developer | React JS Developer</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Birthday:</strong> 18<sup>th</sup> January, 1997
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Phone:</strong> +91-9999-340-771
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Degree:</strong> B.Tech (Computer Science &
                      Engineering)
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Email:</strong> rajeshranjan8271@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                <br />
              </p>
            </div>
          </Fade>
        </div>

        <Skills />
      </HomeContent>
    </>
  );
}
