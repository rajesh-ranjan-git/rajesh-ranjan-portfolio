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
                  "Full-Stack Application Development: Built and maintained scalable web applications using Next.js, React.js, Node.js, and Python (Flask), accelerating feature delivery by 35% through modular architecture and reusable component systems.",
                  "Performance Optimization & Rendering Strategies: Improved application speed by up to 40% by implementing Server-Side Rendering (SSR), CDN caching, lazy loading, and optimized API response handling.",
                  "AI-Powered Feature Engineering: Designed and deployed AI-driven services using OpenAI APIs, Transformers, and Flask for automated story generation, FAQs, content summarization, and predictive insights, increasing user engagement by 30%+.",
                  "NLP & Data Processing Pipelines: Built scalable NLP and ML pipelines using NumPy and Pandas to preprocess large datasets, reducing model response latency by 25% and improving data accuracy by 20%.",
                  "Accessible & Mobile-First UI Design: Created WCAG-compliant, mobile-first interfaces using React and Tailwind CSS, improving accessibility and boosting mobile retention by 20%.",
                  "API Design & Microservices Integration: Designed, implemented, and documented RESTful APIs with OAuth2 and third-party service integrations, reducing integration time by 40%.",
                  "Database Architecture & Optimization: Designed and optimized MongoDB and MySQL schemas using indexing, aggregation pipelines, and query tuning, achieving 35–45% faster query execution.",
                  "SEO, AMP & Web Visibility: Implemented SEO best practices, schema markup, meta optimization, and AMP pages, improving mobile page speed by 50% and increasing organic traffic by 30%.",
                  "Reusable UI Systems & Code Standards: Established clean code practices and built internal UI libraries and shared utilities, reducing code duplication by 40% and improving developer onboarding speed.",
                  "Agile Collaboration & Delivery: Worked closely with product, design, and backend teams in Agile/Scrum environments, contributing to sprint planning, code reviews, and timely feature releases.",
                  "Monitoring, Logging & Reliability: Implemented robust logging, monitoring, and error-handling systems, reducing production issues by 25% and improving platform stability.",
                  "Performance Audits & Web Vitals: Conducted Lighthouse and DevTools audits, ensuring consistent Core Web Vitals improvements and better user experience.",
                ]}
              />
            </div>
          </div>

          <div className="right timeline_container">
            <div className="content">
              <ExpCard
                role="MERN Stack & React Native Developer |"
                img_path={ntt}
                period="February 2020 - March 2025"
                company="Cyber Ed. (Internship)"
                data={[
                  "Cross-Platform Mobile Development: Built Android-first mobile features using React Native, gaining hands-on experience with UI/UX design, navigation, state management, and component-driven architecture.",
                  "Backend Integration & API Reliability: Developed and integrated Node.js backend services, ensuring smooth data flow between client and server while reducing client-side errors.",
                  "Real-Time Notification System: Designed and implemented a real-time notification system for the Dhrona education platform, improving student engagement by 30%+.",
                  "Debugging & Performance Optimization: Collaborated with senior developers to debug UI issues, optimize rendering performance, and improve overall app stability by 25%.",
                ]}
              />
            </div>
          </div>

          <div className="left timeline_container">
            <div className="content">
              <ExpCard
                role="Analyst |"
                img_path={ntt}
                period="November 2020 - April 2025"
                company="NTT Data Services"
                data={[
                  "Responsive Web Application Development: Built user-centric, responsive web applications using React.js, increasing engagement by 25% through enhanced UI/UX and performance optimizations.",
                  "SPA Architecture & Browser Compatibility: Designed and maintained Single Page Applications (SPAs) with optimized load times and consistent behavior across all major browsers and devices.",
                  "Third-Party API & Service Integration: Integrated external APIs and services such as payment gateways, geolocation, and authentication systems using RESTful and Express.js backends.",
                  "Reusable Components & Code Efficiency: Developed reusable component libraries and optimized MongoDB queries, reducing server load by 15% and cutting feature development time by 30%.",
                ]}
              />
            </div>
          </div>

          <div className="right timeline_container">
            <div className="content">
              <ExpCard
                role="Assistant Exceutive |"
                img_path={ie}
                company="iEnergizers IT Services Pvt. Ltd."
                period="August 2018 - October 2020"
                data={[
                  "Content Moderation & Community Safety: Reviewed audio, video, and in-game scripts to enforce community guidelines, ensuring a safe and positive environment for users.",
                  "Policy Enforcement & Quality Control: Identified and removed inappropriate content, improving platform trust and compliance standards.",
                ]}
              />
            </div>
          </div>
          <div className="left timeline_container">
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
