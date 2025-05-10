import { Fade } from "react-awesome-reveal";
import { ExpCard } from "../../Components/ExpCard/Cards";
import HomeContent from "../HomeContent/HomeContent";
import "./Experience.scss";
import itg from "../../Assets/Companies/itg.png";
import ntt from "../../Assets/Companies/ntt.jpeg";
import ie from "../../Assets/Companies/ie.jpeg";
import dws from "../../Assets/Companies/dws.jpeg";

export default function Experience() {
  return (
    <HomeContent id="experience" class="experience">
      <h2 className="h3 section-title">Experience</h2>
      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="timeline">
          <div className="left timeline_container">
            <div className="content">
              <ExpCard
                role="Full Stack Developer |"
                img_path={itg}
                period="April 2025 - Present"
                company="India Today Group"
                data={[
                  "End-to-End Web Application Development: Built and maintained full-stack web applications using React.js and Node.js, increasing feature release speed by 35% through modular architecture and component-based design.",
                  "Performance & Scalability Enhancements: Optimized front-end and back-end performance using SSR (Server-Side Rendering), database indexing, and CDN caching, resulting in a 40% improvement in page load and API response times.",
                  "Responsive UI & Accessibility: Engineered accessible, mobile-first interfaces with Tailwind CSS and React, ensuring WCAG compliance and consistent user experience across all screen sizes and browsers.",
                  "API Development & Integration: Developed and documented RESTful APIs, integrating third-party services (e.g., OAuth2) and streamlining communication between microservices.",
                  "Database Design & Optimization: Designed and optimized databases using both NoSQL (MongoDB) and SQL (MySQL), implementing efficient schemas, aggregation pipelines, indexing, and query optimization to support high-volume data operations with minimal latency.",
                  "Code Quality & Reusability: Championed clean code practices, implemented utility libraries and design systems, and conducted peer code reviews to maintain codebase consistency and facilitate onboarding.",
                  "Team Collaboration & Agile Workflow: Collaborated with cross-functional teams (backend developers, UX/UI designers, product managers) in an Agile environment, code reviews, and ensuring high-quality deliverables.",
                  "Tech Stack: NextJS, ReactJS, NodeJS, ExpressJS, MongoDB, SQL, MySQL, RESTful APIs, Redis, Tailwind CSS.",
                ]}
              />
            </div>
          </div>

          <div className="right timeline_container">
            <div className="content">
              <ExpCard
                role="Analyst |"
                img_path={ntt}
                period="November 2020 - April 2025"
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
