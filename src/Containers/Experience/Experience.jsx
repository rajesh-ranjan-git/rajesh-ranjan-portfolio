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
          <div className="timeline_container right">
            <div className="content">
              <ExpCard
                role="Analyst |"
                img_path={newNTT}
                period="February 2023 - Present"
                company="NTT Data Services"
                data={[
                  "Developed and maintained responsive, user-centric web applications using React.js, achieving a 25% increase in user engagement through enhanced UI/UX design and performance optimization.",
                  "Designed and developed single-page applications (SPAs) in React, enhancing load times and user engagement for a more streamlined user experience.",
                  "Built responsive and accessible UI components, achieving compatibility across major browsers and devices.",
                  "Improved application performance by implementing best practices for React, including memoization, lazy loading, and dynamic imports, which reduced load time by 20%.",
                  "Integrated third-party libraries and APIs to extend functionality, including payment processing, geolocation, and authentication, resulting in a richer feature set for end users.",
                  "Integrated RESTful APIs with Express.js and Node.js to create dynamic, interactive web features, ensuring smooth functionality and seamless data flow across applications.",
                  "Leveraged MongoDB to manage and retrieve application data efficiently, improving data handling speed and reducing server load by 15%.",
                  "Collaborated closely with back-end developers, UX/UI designers, and product managers to align on project goals and user experience standards, resulting in consistently high customer satisfaction scores.",
                  "Implemented reusable component libraries and optimized code structure, reducing development time for new features by 30%.",
                  "Used Git for version control and participated in code reviews to ensure high code quality, readability, and maintainability.",
                  "Worked in an Agile environment, actively participating in sprint planning, daily stand-ups, and retrospectives to adapt and align project objectives with team progress.",
                  "Tech Stack - ReactJS, NodeJS, ExpressJS, MongoDB, Git, RESTful APIs, Redis, Tailwind CSS.",
                ]}
              />
            </div>
          </div>

          <div className="timeline_container left">
            <div className="content">
              <ExpCard
                role="Senior Associate |"
                img_path={newNTT}
                period="January 2021 - February 2023"
                company="NTT Data Services"
                data={[
                  "Led and Managed a team of 15+ service desk agents, overseeing daily operations, monitoring performance, and ensuring adherence to service levels and quality standards.",
                  "Utilized ServiceNow to track and manage incidents, requests, and problem resolutions, ensuring timely and effective handling of tickets and optimizing workflow efficiency.",
                  "Generated and Analyzed ServiceNow Reports to identify trends, track SLA compliance, and monitor team performance metrics, enabling data-driven decision-making and continuous improvement in support services.",
                  "Developed and Delivered Training Programs for team members on tools, troubleshooting techniques, and customer service best practices, enhancing team competency and knowledge-sharing culture.",
                  "Performed Quality Audits on service desk interactions, ensuring compliance with organizational standards, identifying improvement areas, and providing feedback to team members to improve service delivery.",
                  "Managed Rosters to ensure optimal team coverage, balancing resources to handle peak periods, holidays, and unforeseen absences to maintain seamless support operations.",
                  "Created Reports and Dashboards in Microsoft Excel for tracking key performance indicators (KPIs), SLA adherence, and customer satisfaction metrics, sharing insights with management to highlight achievements and address potential issues.",
                  "Supported O365 Applications, guiding the team in resolving user issues related to Outlook, Teams, and other O365 tools, ensuring minimal disruption to end-users.",
                  "Collaborated with Cross-functional Teams to improve service processes, implement best practices, and enhance the overall quality of IT support.",
                ]}
              />
            </div>
          </div>

          <div className="timeline_container right">
            <div className="content">
              <ExpCard
                role="Associate |"
                img_path={oldNTT}
                company="NTT Data Services"
                period="October 2020 - January 2021"
                data={[
                  "Lead the team on a critical Service Delivery (SD) account, overseeing the U.S. Bank project, one of the largest accounts at NTT Data.",
                  "Manage and track Service Level Agreements (SLAs) and Key Performance Indicators (KPIs) to meet monthly targets consistently.",
                  "Conduct SLA and impact analysis, generating insightful reports for clients and leadership to drive informed decision-making.",
                  "Represent the SD team in daily and weekly client calls, identifying areas for service improvement and strategizing enhancements.",
                  "Analyze DSAT metrics, sharing targeted feedback within the team to enhance customer satisfaction.",
                  "Develop and present monthly Corrective and Preventive Action (CAPA) reports and analysis decks for stakeholders.",
                  "Conduct SWOT analysis for team members to identify individual strengths and areas for development, implementing strategies to maximize team potential.",
                  "Provide technical coaching and mentorship on complex issues to ensure team readiness and effective problem resolution.",
                  "Oversee daily Average Handle Time (AHT) reports to optimize time-to-resolution for user issues.",
                  "Prepare and monitor Customer Satisfaction (CSAT) reports, ensuring high team performance and service quality.",
                  "Support team members by resolving technical queries and offering guidance on issue escalation processes.",
                  "Prioritize and assign high/medium severity tickets in line with the severity and impact on business operations.",
                  "Collaborate on bridge calls with cross-functional teams, standardizing best practices, and promoting continuous improvement.",
                  "Monitor, analyze, and report on service level compliance, compiling statistical data to track operational effectiveness.",
                ]}
              />
            </div>
          </div>

          <div className="timeline_container left">
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
          <div className="timeline_container right">
            <div className="content">
              <ExpCard
                role="Tech Intern |"
                img_path={dws}
                company="Digital Web Solutions Pvt. Ltd."
                period="March 2017 - May 2017"
                data={[
                  "Contributed to the design, development, and optimization of responsive web applications.",
                  "Gained hands-on experience with modern front-end frameworks, UI/UX principles, and web technologies while collaborating with senior developers to implement key features and improve application performance.",
                  "Assisted in developing and maintaining web applications using HTML, CSS, JavaScript, and Bootstrap.",
                  "Collaborated with design teams to implement responsive and visually appealing user interfaces using Bootstrap.",
                  "Wrote reusable, modular code and followed best practices for front-end development.",
                  "Debugged and troubleshot issues, ensuring a smooth user experience across multiple devices and browsers.",
                  "Implemented responsive design techniques to ensure the application was optimized for mobile and desktop.",
                  "Tech Stack: - HTML, CSS, Javascript, Bootstrap, PHP, Wordpress",
                ]}
              />
            </div>
          </div>
        </div>
      </Fade>
    </HomeContent>
  );
}
