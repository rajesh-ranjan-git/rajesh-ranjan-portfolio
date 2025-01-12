import { Fade } from "react-awesome-reveal";
import { ExpCard } from "../../Components/ExpCard/Cards";
import HomeContent from "../HomeContent/HomeContent";
import "./Experience.scss";
import newNTT from "../../Assets/Companies/ntt_new.jpeg";
import oldNTT from "../../Assets/Companies/ntt_old.png";
import ie from "../../Assets/Companies/ie.jpeg";
import dws from "../../Assets/Companies/dws.jpeg";

export default function Experience() {
  return (
    <HomeContent id="experience" class="experience">
      <h2 className="h3 section-title">Experience</h2>
      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="timeline">
          <div className="right timeline_container">
            <div className="content">
              <ExpCard
                role="Analyst |"
                img_path={newNTT}
                period="February 2023 - Present"
                company="NTT Data Services"
                data={[
                  "Web Application Development & Performance Optimization: Developed responsive, user-centric web applications using React.js, improving user engagement by 25% through enhanced UI/UX design and performance optimization techniques such as memoization, lazy loading, and dynamic imports.",
                  "SPA & Cross-Browser Compatibility: Designed and built single-page applications (SPAs) with optimized load times and a streamlined user experience, ensuring accessibility and compatibility across major browsers and devices.",
                  "API Integration & Backend Collaboration: Integrated third-party libraries, APIs (e.g., payment processing, geolocation, authentication), and RESTful APIs with Express.js/Node.js to extend functionality and ensure seamless data flow.",
                  "Database & Code Efficiency: Utilized MongoDB for efficient data management, reducing server load by 15%, and implemented reusable component libraries to reduce development time for new features by 30%.",
                  "Team Collaboration & Agile Workflow: Collaborated with cross-functional teams (backend developers, UX/UI designers, product managers) in an Agile environment, contributing to sprint planning, code reviews, and ensuring high-quality deliverables.",
                  "Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, Git, RESTful APIs, Redis, Tailwind CSS.",
                ]}
              />
            </div>
          </div>

          <div className="left timeline_container">
            <div className="content">
              <ExpCard
                role="Senior Associate |"
                img_path={newNTT}
                period="January 2021 - February 2023"
                company="NTT Data Services"
                data={[
                  "Led and managed a team of 15+ service desk agents, overseeing daily operations, performance monitoring, and ensuring adherence to service levels and quality standards.",
                  "Generated and Analyzed ServiceNow Reports to identify trends, track SLA compliance, and monitor team performance metrics, enabling data-driven decision-making and continuous improvement in support services.",
                  "Developed and Delivered Training Programs for team members on tools, troubleshooting techniques, and customer service best practices, enhancing team competency and knowledge-sharing culture.",
                  "Performed Quality Audits on service desk interactions, ensuring compliance with organizational standards, identifying improvement areas, and providing feedback to team members to improve service delivery.",
                  "Managed team rosters, created performance reports in Excel, and supported O365 applications, collaborating with cross-functional teams to enhance IT support and service quality.",
                ]}
              />
            </div>
          </div>

          <div className="right timeline_container">
            <div className="content">
              <ExpCard
                role="Associate |"
                img_path={oldNTT}
                company="NTT Data Services"
                period="October 2020 - January 2021"
                data={[
                  "Led the U.S. Bank project, one of the largest SD accounts at NTT Data, managing SLAs, KPIs, and ensuring consistent achievement of monthly targets.",
                  "Conducted SLA and impact analysis, providing insightful reports for clients and leadership, and representing the SD team in client calls to strategize service improvements.",
                  "Analyzed DSAT metrics and provided targeted feedback to improve customer satisfaction, while preparing monthly CAPA reports and conducting SWOT analysis for team development.",
                  "Offered technical coaching and mentorship to team members on complex issues, optimizing Average Handle Time (AHT) and ensuring high Customer Satisfaction (CSAT) scores.",
                  "Managed ticket prioritization, escalations, and collaborated on bridge calls with cross-functional teams to standardize best practices and continuously improve service delivery.",
                ]}
              />
            </div>
          </div>

          <div className="left timeline_container">
            <div className="content">
              <ExpCard
                role="Assistant Exceutive |"
                img_path={ie}
                company="iEnergizers IT Services Pvt. Ltd."
                period="August 2018 - October 2020"
                data={[
                  "Monitored and reviewed audio and video content to ensure adherence to community guidelines, identifying and removing any inappropriate or harmful material to maintain a positive gaming environment for EA Sports and Roblox",
                  "Moderated in-game scripts to prevent misuse of language, inappropriate content, and breaches of game rules, enhancing the overall player experience and ensuring a safe virtual community.",
                  "Provided customer support and issue resolution for players via chat, email, and in-game messaging, addressing inquiries on game mechanics, account issues, and gameplay rules to maintain high satisfaction and engagement levels.",
                  "Troubleshot network and application issues, collaborating with technical teams to identify and resolve connectivity issues, server lag, and software glitches that affected player experience.",
                  "Trained new hires on moderation tools, game policies, and customer service best practices, helping them develop the skills and knowledge needed for effective moderation and player support.",
                ]}
              />
            </div>
          </div>
          <div className="right timeline_container">
            <div className="content">
              <ExpCard
                role="Tech Intern |"
                img_path={dws}
                company="Digital Web Solutions Pvt. Ltd."
                period="March 2017 - May 2017"
                data={[
                  "Web Application Development & Optimization: Contributed to the design, development, and optimization of responsive web applications using HTML, CSS, JavaScript, and Bootstrap.",
                  "UI/UX Collaboration: Worked closely with design teams to implement responsive, visually appealing user interfaces, ensuring a seamless user experience across devices and browsers.",
                  "Code Reusability & Best Practices: Wrote reusable, modular code and adhered to front-end development best practices for maintainability and scalability.",
                  "Debugging & Troubleshooting: Assisted in debugging and troubleshooting issues, applying responsive design techniques to optimize the application for both mobile and desktop platforms.",
                  "Tech Stack: HTML, CSS, Javascript, Bootstrap, PHP, Wordpress",
                ]}
              />
            </div>
          </div>
        </div>
      </Fade>
    </HomeContent>
  );
}
