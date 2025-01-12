import {
  faGithubAlt,
  faStackOverflow,
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMediaIcons.scss";

export default function SocialMediaIcons() {
  return (
    <>
      <a
        href="https://github.com/rajesh-ranjan-git"
        className={`icon_button github`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>

      <a
        href="mailto:rajeshranjan8271@gmail.com"
        className={`icon_button google`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGoogle} />
      </a>

      <a
        href="https://stackoverflow.com/users/7486676/rajesh-ranjan"
        className={`icon_button stackoverflow`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
      <a
        href="https://www.linkedin.com/in/rajesh-ranjan-660b1b13a"
        className={`icon_button linkedin`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://www.facebook.com/rajeshranjan8271/"
        className={`icon_button facebook`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://x.com/_rajesh____"
        className={`icon_button twitter`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a
        href="https://www.instagram.com/_rajesh____/"
        className={`icon_button instagram`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </>
  );
}
