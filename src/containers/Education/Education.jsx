import "./Education.scss";
import React from "react";
import HomeContent from "../HomeContent/HomeContent";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { EduCard } from "../../components/ExpCard/Cards";

export default function Education() {
  return (
    <HomeContent id="education" class="experience">
      {/* <Helmet>
        <title>Education | Pranav Choudhary</title>
        <meta name="description" content="Learn about Pranav Choudhary's educational background, including a B.Tech in Computer Science from IIIT Jabalpur and Senior Secondary studies." />
      </Helmet> */}
      <h2 className="h3 section-title">Education</h2>
      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="education_card">
          <EduCard
            img_path="./assets/bg/edu4.svg"
            title="B.TECH in COMPUTER SCIENCE"
            period="2018 - 2022"
            college="Indian Institute of Information Technology, Jabalpur, Mp, India"
            gpa="GPA: 8.3/10"
          />
          <EduCard
            img_path="./assets/bg/edu3.svg"
            title="SENIOR SECONDARY (XII), SCIENCE"
            period="2016 - 2017"
            college="SNLD Harsh Convent School, Suratgarh, Rajasthan, India"
            gpa="Percentage: 89.60%"
          />
        </div>
      </Fade>
    </HomeContent>
  );
}
