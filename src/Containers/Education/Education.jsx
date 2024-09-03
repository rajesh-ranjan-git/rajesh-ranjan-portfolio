import "./Education.scss";
import HomeContent from "../HomeContent/HomeContent";
import { Fade } from "react-awesome-reveal";
import { EduCard } from "../../Components/ExpCard/Cards";

export default function Education() {
  return (
    <HomeContent id="education" class="experience">
      <h2 className="h3 section-title">Education</h2>
      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="education_card">
          <EduCard
            img_path="../Assets/Education/edu4.svg"
            title="B.TECH in COMPUTER SCIENCE & ENGINEERING"
            period="2014 - 2018"
            college="JP Institute of Engineering and Technology, Meerut, UP, India"
            gpa="Percentage: 72.8%"
          />
          <EduCard
            img_path="../Assets/Education/edu3.svg"
            title="SENIOR SECONDARY (XII), SCIENCE"
            period="2013 - 2014"
            college="Indian School of Learning, Dhanbad, Jharkhand, India"
            gpa="Percentage: 78%"
          />
        </div>
      </Fade>
    </HomeContent>
  );
}
