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
              I’m a passionate and results-driven Full Stack Developer with over
              6 years of professional experience, currently working at Business
              Today Technology, part of the India Today Group. I specialize in
              building scalable and high-performance web applications using
              modern technologies.
              <br />
              <br />
              My expertise lies in the MERN stack (MongoDB, Express.js,
              React.js, Node.js), along with Next.js, TypeScript, and JavaScript
              for frontend and backend development. I also have strong
              experience with SQL, PostgreSQL, Prisma ORM, and MongoDB, giving
              me a versatile edge in both relational and non-relational
              databases.
              <br />
              <br />
              In addition to my core stack, I’ve worked with Java and Python,
              enabling me to adapt to diverse project requirements and technical
              challenges. I take pride in writing clean, efficient code and
              delivering end-to-end solutions that drive real business impact.
              <br />
              <br />
              I’m always looking for opportunities to collaborate on innovative
              projects and contribute to tech communities.
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
              <h3>
                Full Stack Developer | Business Today Technology | India Today
                Group
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Organization:</strong> India Today Group
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Designation:</strong> Full Stack Developer
                    </li>
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
