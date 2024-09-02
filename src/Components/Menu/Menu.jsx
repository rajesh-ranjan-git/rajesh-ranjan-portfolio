import "./Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserAstronaut,
  faCertificate,
  faIdCard,
  faBriefcase,
  faBookOpenReader,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Menu(props) {
  const navigate = useNavigate();

  function toggleMenu(e) {
    const sideNav = document.querySelector("#side_nav");
    sideNav.classList.toggle("active");
  }

  function scrollToTestDiv(id) {
    const divElement = document.getElementById(id);
    divElement.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  }
  const [active, setActive] = useState(null);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <button type="button" className="mobile-nav-toggle" onClick={toggleMenu}>
        {" "}
        <Hamburger size={20} easing="ease-in" rounded className="nav_icon" />
      </button>

      <div className="sidenav_container" id="side_nav">
        <nav className="nav">
          <div className="nav_brand">
            <div
              className="nav_icon nav_icon_menu"
              onClick={toggleMenu}
              id="nav-toggle"
            >
              <Hamburger
                size={20}
                easing="ease-in"
                rounded
                className="nav_icon"
              />
            </div>

            <div onClick={handleBackToHome} className="nav_brand_logo">
              Rajesh Ranjan
            </div>
          </div>

          <hr />

          <ul className="nav_list">
            {!props.detail ? (
              <>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="greetings"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faHouse} className="nav_icon" />
                    <span className="nav__name">Home</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav_item">
                  <div onClick={handleBackToHome} className="nav_link">
                    <FontAwesomeIcon icon={faHouse} className="nav_icon" />
                    <span className="nav_name">Home</span>
                  </div>
                </li>
              </>
            )}

            {!props.detail ? (
              <>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon
                      icon={faUserAstronaut}
                      className="nav_icon"
                    />
                    <span className="nav_name">About</span>
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faBriefcase} className="nav_icon" />
                    <span className="nav_name">Experience</span>
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon
                      icon={faBookOpenReader}
                      className="nav_icon"
                    />
                    <span className="nav_name">Education</span>
                  </Link>
                </li>
                {/* <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="achievements"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faTrophy} className="nav_icon" />
                    <span className="nav_name">Achievements</span>
                  </Link>
                </li> */}

                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faCubes} className="nav_icon" />
                    <span className="nav_name">Portfolio</span>
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="certificates"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="nav_icon"
                    />
                    <span className="nav_name">Certificates</span>
                  </Link>
                </li>

                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faIdCard} className="nav_icon" />
                    <span className="nav_name">Contact</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon
                      icon={faUserAstronaut}
                      className="nav_icon"
                    />
                    <span className="nav_name">About</span>
                  </div>
                </li>

                <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon icon={faBriefcase} className="nav_icon" />
                    <span className="nav_name">Experience</span>
                  </div>
                </li>

                <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon
                      icon={faBookOpenReader}
                      className="nav_icon"
                    />
                    <span className="nav_name">Education</span>
                  </div>
                </li>

                {/* <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon icon={faTrophy} className="nav_icon" />
                    <span className="nav_name">Achievements</span>
                  </div>
                </li> */}

                <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon icon={faCubes} className="nav_icon" />
                    <span className="nav_name">Portfolio</span>
                  </div>
                </li>

                <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="nav_icon"
                    />
                    <span className="nav_name">Certificates</span>
                  </div>
                </li>

                <li className="nav_item">
                  <div className="nav_link" onClick={handleBackToHome}>
                    <FontAwesomeIcon icon={faIdCard} className="nav_icon" />
                    <span className="nav_name">Contact</span>
                  </div>
                </li>
              </>
            )}
          </ul>

          <hr />

          <div className="nav_user">
            <div className="nav_user_image">
              <img src={`/favicon/title_pic_circular.png`} alt="profile" />
            </div>

            <div className="nav_user_info">
              <div className="nav_user_info_name">Rajesh Ranjan</div>
              <div className="nav_user_info_email">
                <a href="mailto:pranavchoudhary500@gmail.com" target="_blank">
                  rajeshranjan8271@gmail.com
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
