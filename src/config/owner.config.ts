export const basicDetails = {
  initials: "RR",
  firstName: "Rajesh",
  lastName: "Ranjan",
  totalExperience: { years: 7, months: 10 },
  designation: "Full Stack Developer",
  company: "Business Today Technology",
  organization: "India Today Group",
  description:
    "Experienced Full Stack Developer with expertise in React, Next.js, Node.js, TypeScript, and cloud-based application development.",
  location: { city: "Noida", state: "Uttar Pradesh", country: "India" },
  phone: "+91-9999340771",
  images: {
    profileImage: "/assets/personal-img/profile-photo-3d-cartoon-square.webp",
    greetingsImage: "/assets/personal-img/profile-photo-3d-cartoon.webp",
    aboutImage: "/assets/personal-img/profile-photo-transparent.webp",
  },
  typewriterTexts: [
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
  ],
  social: {
    github: "rajesh-ranjan-git",
    google: "rajeshranjan8271@gmail.com",
    stackOverflow: "",
    linkedin: "rajesh-ranjan-full-stack-developer",
    twitter: "_rajesh____",
    youtube: "",
    facebook: "rajeshranjan8271",
    instagram: "_rajesh____",
  },
  socialBadge: "github",
  resumeLink:
    "https://drive.google.com/file/d/1L73b_IyVJpdDCkDk1t9dBPB6kEnEHGrW/view?usp=drive_link",
  skills: [
    "html",
    "css",
    "javascript",
    "typescript",
    "react-js",
    "next-js",
    "node-js",
    "mongo-db",
    "my-sql",
    "postgresql",
    "java",
    "python",
    "bootstrap",
  ],
  tools: [
    "visual-studio",
    "amazon-web-services",
    "bash",
    "atom",
    "docker",
    "firebase",
    "git",
    "github",
    "gitlab",
    "intellij",
    "npm",
    "postman",
    "redis",
    "slack",
    "ubuntu",
  ],
};

export const education = {
  college: {
    name: "JP Institute of Engineering & Technology",
    location: { city: "Meerut", state: "Uttar Pradesh", country: "India" },
    degree: "Bachelor of Technology",
    stream: "Computer Science & Engineering",
    gradingSystem: "percent",
    score: 72.8,
    startYear: 2014,
    endYear: 2018,
    imageSrc: "/assets/education/education-1.svg",
  },
  highSchool: {
    name: "Indian School of Learning",
    location: { city: "Dhanbad", state: "Jharkhand", country: "India" },
    degree: "Senior Secondary (XII)",
    stream: "Science",
    gradingSystem: "percent",
    score: 78,
    startYear: 2013,
    endYear: 2014,
    imageSrc: "/assets/education/education-2.svg",
  },
} as const;

export const experience = [
  {
    designation: "Full Stack Developer",
    isCurrent: true,
    startMonth: "April",
    startYear: 2025,
    company: "India Today Group",
    companyImage: "/assets/companies/itg.webp",
    techStack: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Node JS",
      "Python",
      "Flask",
      "MongoDB",
      "MySQL",
      "OpenAI API",
      "Transformers",
      "NLP",
      "Pandas",
      "NumPy",
      "REST APIs",
      "OAuth2",
      "WebSockets",
      "Tailwind CSS",
      "SSR",
      "CDN",
      "AMP",
    ],
    details: [
      {
        title: "Application Architecture Modernization",
        description:
          "Re-engineered distributed Python-based services into a more unified and scalable Next.js architecture, simplifying infrastructure and helping reduce cloud operational costs by approximately 30%.",
      },
      {
        title: "Next.js Platform Migration",
        description:
          "Led the upgrade from Next.js 12 to Next.js 15, addressing 10+ security vulnerabilities while improving application stability, maintainability, and compatibility with modern framework capabilities.",
      },
      {
        title: "AI-Powered Content Intelligence",
        description:
          "Developed AI-driven content analysis workflows using OpenAI APIs and transformer-based NLP models to process 500,000+ news articles and power plagiarism and similarity detection with 90%+ accuracy.",
      },
      {
        title: "Intelligent Content Features",
        description:
          "Built AI-backed capabilities for content summarization, automated story generation, FAQs, and predictive insights, creating more engaging and intelligent experiences across digital products.",
      },
      {
        title: "SEO & Rendering Optimization",
        description:
          "Applied SSR, dynamic rendering, structured metadata, schema markup, and other SEO strategies to improve search visibility while reducing page rendering time from 3.7 seconds to approximately 1.5 seconds.",
      },
      {
        title: "Core Web Vitals & Frontend Performance",
        description:
          "Improved TTFB, FCP, and overall page responsiveness through lazy loading, caching strategies, optimized API handling, and systematic Lighthouse and DevTools performance audits.",
      },
      {
        title: "API Efficiency & Request Tracking",
        description:
          "Introduced API optimization and request-tracking mechanisms that reduced unnecessary network calls by more than 40% and lowered backend resource utilization by approximately 20%.",
      },
      {
        title: "Python Deployment Optimization",
        description:
          "Optimized deployment workflows for Python services by introducing lazy loading for resource-heavy libraries, reducing deployment time from roughly 60 minutes to 12 minutes.",
      },
      {
        title: "Real-Time Trends Analytics",
        description:
          "Developed a Google Trends analytics dashboard using a short-polling architecture to deliver timely trend insights and improve the freshness of visualized data.",
      },
      {
        title: "Database Performance Engineering",
        description:
          "Designed and optimized MongoDB and MySQL data layers using indexing, aggregation pipelines, schema improvements, and query tuning to achieve significantly faster data retrieval.",
      },
      {
        title: "Accessible Mobile-First Interfaces",
        description:
          "Created responsive, mobile-first interfaces with React and Tailwind CSS while following WCAG accessibility principles to deliver consistent experiences across devices.",
      },
      {
        title: "Reusable Frontend Systems",
        description:
          "Built shared UI components, utilities, and reusable development patterns that reduced duplication and accelerated feature implementation across applications.",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Designed and integrated RESTful APIs, OAuth2 authentication flows, and external services to streamline communication between frontend, backend, and third-party platforms.",
      },
      {
        title: "Monitoring & Application Reliability",
        description:
          "Strengthened production reliability through structured logging, error handling, monitoring, and debugging practices designed to identify and resolve issues efficiently.",
      },
      {
        title: "Cross-Functional Product Delivery",
        description:
          "Collaborated with product, design, and engineering teams throughout Agile development cycles, contributing to technical planning, code reviews, sprint execution, and production releases.",
      },
    ],
  },
  {
    designation: "React Native Developer Intern",
    isCurrent: false,
    startMonth: "February",
    startYear: 2025,
    endMonth: "March",
    endYear: 2025,
    company: "CYBERED",
    companyImage: "/assets/companies/cybered.webp",
    techStack: [
      "React Native",
      "Expo",
      "JavaScript",
      "TypeScript",
      "Node JS",
      "REST APIs",
      "Push Notifications",
      "OTA Updates",
    ],
    details: [
      {
        title: "Cross-Platform Mobile Development",
        description:
          "Developed Android-focused mobile experiences for an EdTech application using React Native and Expo, working with reusable components, navigation, state management, and responsive layouts.",
      },
      {
        title: "Reusable Mobile UI Components",
        description:
          "Created reusable component patterns that improved UI consistency and helped reduce the development effort required for new application features.",
      },
      {
        title: "Responsive UI Improvements",
        description:
          "Diagnosed and resolved 15+ layout and responsiveness issues, delivering a more consistent user experience across different mobile screen sizes.",
      },
      {
        title: "Learning Session Notifications",
        description:
          "Implemented push notifications to remind learners about upcoming sessions and improve timely participation in educational activities.",
      },
      {
        title: "Backend & API Integration",
        description:
          "Integrated mobile interfaces with backend services and APIs to maintain reliable communication and smooth data flow between application layers.",
      },
      {
        title: "Over-the-Air Application Updates",
        description:
          "Contributed to OTA update implementation, allowing application improvements to be delivered without requiring a traditional Play Store release for every update.",
      },
      {
        title: "Mobile Performance & Debugging",
        description:
          "Worked with senior developers to investigate rendering and UI issues, optimize application behavior, and improve overall stability.",
      },
      {
        title: "Agile Team Collaboration",
        description:
          "Collaborated with a five-member development team and product stakeholders to troubleshoot issues and deliver iterative feature improvements.",
      },
    ],
  },
  {
    designation: "Analyst (UI Developer)",
    isCurrent: false,
    startMonth: "November",
    startYear: 2020,
    endMonth: "April",
    endYear: 2025,
    company: "NTT Data Services",
    companyImage: "/assets/companies/ntt.webp",
    techStack: [
      "React JS",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
    details: [
      {
        title: "React Application Development",
        description:
          "Developed responsive, user-focused web interfaces with React, JavaScript, and TypeScript, emphasizing maintainable architecture and consistent user experiences.",
      },
      {
        title: "Reusable Component Architecture",
        description:
          "Created 20+ reusable React components to standardize interface patterns, improve UI consistency, and accelerate frontend feature development.",
      },
      {
        title: "Frontend Performance Optimization",
        description:
          "Replaced resource-heavy UI dependencies with lightweight custom components, reducing unnecessary JavaScript overhead and improving application responsiveness and Lighthouse performance.",
      },
      {
        title: "Single-Page Application Development",
        description:
          "Built and maintained SPA experiences with optimized loading behavior and reliable functionality across modern browsers and device sizes.",
      },
      {
        title: "Responsive & Cross-Browser UI",
        description:
          "Implemented adaptable interfaces designed to maintain consistent layouts, interactions, and usability across desktop and mobile environments.",
      },
      {
        title: "API & Service Integration",
        description:
          "Integrated frontend applications with REST APIs and external services, enabling reliable communication between user interfaces and backend systems.",
      },
      {
        title: "Code Quality & Maintainability",
        description:
          "Applied reusable development patterns and modular component design to reduce duplication and make frontend codebases easier to extend and maintain.",
      },
    ],
  },
  {
    designation: "Assistant Executive",
    isCurrent: false,
    startMonth: "August",
    startYear: 2018,
    endMonth: "October",
    endYear: 2020,
    company: "iEnergizer IT Services Pvt. Ltd.",
    companyImage: "/assets/companies/ie.webp",
    details: [
      {
        title: "Digital Content Moderation",
        description:
          "Reviewed audio, video, and in-game content against established community standards to help maintain safe and appropriate digital experiences.",
      },
      {
        title: "Policy & Compliance Enforcement",
        description:
          "Evaluated user-facing content for policy violations and took appropriate moderation actions in accordance with platform guidelines.",
      },
      {
        title: "Content Quality Assurance",
        description:
          "Applied consistent review processes and quality standards to support platform integrity, user trust, and compliance requirements.",
      },
    ],
  },
  {
    designation: "Advisor",
    isCurrent: false,
    startMonth: "February",
    startYear: 2018,
    endMonth: "May",
    endYear: 2018,
    company: "Concentrix Daksh Services India Pvt. Ltd.",
    companyImage: "/assets/companies/concentrix.webp",
    details: [
      {
        title: "Customer Support Operations",
        description:
          "Assisted users with service-related queries and issues while maintaining clear communication and following established support processes.",
      },
      {
        title: "Issue Resolution & Coordination",
        description:
          "Investigated customer concerns, documented relevant information, and coordinated resolutions through defined operational workflows.",
      },
    ],
  },
  {
    designation: "Tech Intern",
    isCurrent: false,
    startMonth: "June",
    startYear: 2017,
    endMonth: "August",
    endYear: 2017,
    company: "Digital Web Solutions Pvt. Ltd.",
    companyImage: "/assets/companies/dws.webp",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "WordPress"],
    details: [
      {
        title: "Frontend Web Development",
        description:
          "Contributed to responsive web applications and websites using HTML, CSS, JavaScript, and Bootstrap, building a strong foundation in modern frontend development.",
      },
      {
        title: "Responsive Interface Implementation",
        description:
          "Translated design requirements into functional interfaces optimized for desktop, tablet, and mobile screen sizes.",
      },
      {
        title: "UI/UX Collaboration",
        description:
          "Worked alongside design teams to implement visually consistent interfaces while maintaining usability across browsers and devices.",
      },
      {
        title: "Reusable & Maintainable Code",
        description:
          "Followed modular development practices and created reusable frontend structures to improve maintainability and consistency.",
      },
      {
        title: "Debugging & Optimization",
        description:
          "Assisted with identifying and resolving frontend issues while improving responsive behavior and overall website usability.",
      },
    ],
  },
];

export const categories = [
  "Next JS",
  "React JS",
  "Vanilla JS",
  "Frontend (HTML & CSS)",
];

export const portfolio = [
  {
    id: 1,
    title: "Make My Trip",
    description:
      "A static front-end recreation of the MakeMyTrip.com landing page, built to practice layout and styling with plain HTML and CSS",
    overview:
      "MakeMyTrip-Clone is a single-page static replica of the MakeMyTrip.com homepage. It recreates the header, search/booking widgets, and promotional sections using only HTML and CSS, with no backend or JavaScript logic involved.",
    thumbnail: "/assets/portfolio/make-my-trip/make-my-trip.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://mmt-clone-site.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/MakeMyTrip/",
    screens: ["/assets/portfolio/make-my-trip/make-my-trip.webp"],
    features: [
      {
        title: "Landing Page Layout",
        description:
          "Recreation of MakeMyTrip's homepage structure (header, nav bar, booking widgets, promo sections).",
      },
      {
        title: "Static Styling",
        description: "Pure CSS layout for the homepage sections.",
      },
      {
        title: "Static Assets",
        description: "Local images used to mirror the original imagery.",
      },
    ],
    usage: [
      {
        title: "View the Landing Page",
        description:
          "Open the page in your browser to view the recreated MakeMyTrip landing page.",
      },
      {
        title: "Explore Page Sections",
        description:
          "Scroll through the header, booking widget, and promotional sections to see the layout.",
      },
    ],
  },
  {
    id: 2,
    title: "Ironing",
    description:
      "A static business landing page built with HTML, CSS, and Bootstrap for an ironing services company.",
    overview:
      "Ironing is a static marketing landing page for an ironing service, presenting company information and services styled with Bootstrap and custom CSS.",
    thumbnail: "/assets/portfolio/ironing/ironing-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://ironing.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Ironing/",
    screens: [
      "/assets/portfolio/ironing/ironing-1.webp",
      "/assets/portfolio/ironing/ironing-2.webp",
    ],
    features: [
      {
        title: "Business Landing Layout",
        description: "Header, services, and information sections.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the page.",
      },
    ],
    usage: [
      {
        title: "View the Landing Page",
        description:
          "Open the page in your browser to view the ironing service landing page.",
      },
      {
        title: "Browse Services & Info",
        description: "Browse the services and company information sections.",
      },
    ],
  },
  {
    id: 3,
    title: "Bitcoin Journal",
    description:
      "A static blog landing page built with HTML, CSS, and Bootstrap, showcasing a magazine-style layout for a crypto/finance blog.",
    overview:
      "Bitcoin-Journal is a static blog landing page for a Bitcoin/crypto-themed publication. It presents a header, featured articles, and blog post sections styled with Bootstrap and custom CSS.",
    thumbnail:
      "/assets/portfolio/bitcoin-journal/bitcoin-journal-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://bitcoin-journal.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Bitcoin-Journal/",
    screens: [
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-1.webp",
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-2.webp",
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-3.webp",
      "/assets/portfolio/ironing/bitcoin-journal-landing-page-4.webp",
    ],
    features: [
      {
        title: "Blog Landing Layout",
        description: "Header, featured post, and article grid sections.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the page.",
      },
    ],
    usage: [
      {
        title: "View the Blog Landing Page",
        description:
          "Open the page in your browser to view the blog landing page.",
      },
      {
        title: "Browse Articles & Posts",
        description: "Browse the featured article and blog post sections.",
      },
    ],
  },
  {
    id: 4,
    title: "Commercial Cleaning",
    description:
      "A static multi-page business site built with HTML, CSS, and Bootstrap for a commercial cleaning services company.",
    overview:
      "Commercial-Cleaning is a static marketing site for a commercial cleaning service, made up of a home page and an 'About Us' page, styled with Bootstrap and custom CSS.",
    thumbnail:
      "/assets/portfolio/commercial-cleaning/commercial-cleaning-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://commercial-cleaning.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Commercial-Cleaning/",
    screens: [
      "/assets/portfolio/ironing/commercial-cleaning-1.webp",
      "/assets/portfolio/ironing/commercial-cleaning-2.webp",
    ],
    features: [
      {
        title: "Multi-Page Layout",
        description:
          "Separate home (index.html) and about (about-us.html) pages.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the site.",
      },
    ],
    usage: [
      {
        title: "View the Home Page",
        description: "Open index.html in your browser to view the home page.",
      },
      {
        title: "Navigate to About Us",
        description: "Navigate to the 'About Us' page to view company details.",
      },
    ],
  },
  {
    id: 5,
    title: "JonesTree",
    description:
      "A static business landing page built with HTML, CSS, and Bootstrap for a forestry/tree work services company, including a working PHP contact form.",
    overview:
      "Jonestree is a static marketing landing page for a forestry/tree work company, with a PHP-based handler for processing contact form submissions.",
    thumbnail: "/assets/portfolio/jonestree/jonestree-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      {
        type: "Frontend",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      },
      {
        type: "Backend",
        tech: ["PHP"],
      },
    ],
    liveUrl: "https://jonestree.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Jonestree/",
    screens: [
      "/assets/portfolio/jonestree/jonestree-landing-page-1.webp",
      "/assets/portfolio/jonestree/jonestree-landing-page-2.webp",
    ],
    features: [
      {
        title: "Business Landing Layout",
        description: "Header, services, and information sections.",
      },
      {
        title: "Contact Form Backend",
        description: "action.php handles contact form submissions server-side.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the page.",
      },
    ],
    usage: [
      {
        title: "View the Landing Page",
        description: "Open the page in your browser to view the landing page.",
      },
      {
        title: "Submit the Contact Form",
        description: "Submit the contact form to trigger the PHP mail handler.",
      },
    ],
  },
  {
    id: 6,
    title: "Flipkart Clone",
    description:
      "A static front-end recreation of the Flipkart.com landing page, built to practice layout and styling with plain HTML and CSS.",
    overview:
      "Flipkart-Clone is a single-page static replica of the Flipkart.com homepage. It recreates the header, search bar, navigation, banner carousels, and product category sections using only HTML and CSS, with no backend or JavaScript logic involved.",
    thumbnail: "/assets/portfolio/flipkart-clone/flipkart-clone-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://flpkart-clone.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Flipkart-Clone/",
    screens: [
      "/assets/portfolio/flipkart-clone/flipkart-clone-1.webp",
      "/assets/portfolio/flipkart-clone/flipkart-clone-2.webp",
      "/assets/portfolio/flipkart-clone/flipkart-clone-3.webp",
      "/assets/portfolio/flipkart-clone/flipkart-clone-4.webp",
    ],
    features: [
      {
        title: "Landing Page Layout",
        description:
          "Recreation of Flipkart's homepage structure (header, nav bar, banners, category cards).",
      },
      {
        title: "Static Styling",
        description: "Pure CSS layout for the homepage sections.",
      },
      {
        title: "Static Assets",
        description:
          "Local images used to mirror the original product/category imagery.",
      },
    ],
    usage: [
      {
        title: "View the Landing Page",
        description:
          "Open the page in your browser to view the recreated Flipkart landing page.",
      },
      {
        title: "Explore Page Sections",
        description:
          "Scroll through the header, banner, and category sections to see the layout.",
      },
    ],
  },
  {
    id: 7,
    title: "Amazon Clone",
    description:
      "A static front-end recreation of the Amazon.com landing page, built to practice pixel-level layout and styling with plain HTML and CSS.",
    overview:
      "Amazon-Clone is a single-page static replica of the Amazon.com homepage. It focuses on recreating the visual layout — header, search bar, navigation, hero banner, and product category grid — using only HTML and CSS, with no backend or JavaScript logic involved.",
    thumbnail: "/assets/portfolio/amazon-clone/amazon-clone-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [{ type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript"] }],
    liveUrl: "https://amazon-clone-site.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Amazon-Clone/",
    screens: [
      "/assets/portfolio/amazon-clone/amazon-clone-1.webp",
      "/assets/portfolio/amazon-clone/amazon-clone-2.webp",
      "/assets/portfolio/amazon-clone/amazon-clone-3.webp",
    ],
    features: [
      {
        title: "Landing Page Layout",
        description:
          "Recreation of Amazon's homepage structure (header, nav bar, banner, category cards).",
      },
      {
        title: "Static Styling",
        description: "Pure CSS layout for the homepage sections.",
      },
      {
        title: "Static Assets",
        description:
          "Local images used to mirror the original product/category imagery.",
      },
    ],
    usage: [
      {
        title: "View the Landing Page",
        description:
          "Open the page in your browser to view the recreated Amazon landing page.",
      },
      {
        title: "Explore Page Sections",
        description:
          "Scroll through the header, banner, and category sections to see the layout.",
      },
    ],
  },
  {
    id: 8,
    title: "Currency Converter",
    description:
      "A Vanilla JavaScript app that lets you check live exchange rates between currencies from almost every country in the world.",
    overview:
      "Currency-Converter is a client-side currency conversion tool. Users pick a 'from' and 'to' currency from dropdowns populated with every supported country/currency code, enter an amount, and get the converted value using live exchange rate data along with the corresponding country flags.",
    thumbnail: "/assets/portfolio/currency-converter/currency-converter.webp",
    category: "Vanilla JS",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript"] },
      { type: "External APIs", tech: ["currency-api", "FlagsAPI"] },
    ],
    liveUrl: "https://currency-converter-vanillajs.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Currency-Converter/",
    screens: ["/assets/portfolio/currency-converter/currency-converter.webp"],
    features: [
      {
        title: "Live Exchange Rates",
        description:
          "Fetches current currency exchange rates from a public currency-rate API.",
      },
      {
        title: "Full Currency List",
        description:
          "Dropdowns populated with currency codes for almost every country.",
      },
      {
        title: "Flag Indicators",
        description:
          "Displays the flag of the selected currency's country via the FlagsAPI.",
      },
      {
        title: "Default Selection",
        description:
          "Defaults to USD → INR on load, editable to any supported pair.",
      },
    ],
    usage: [
      {
        title: "Select Currencies",
        description:
          "Select a currency to convert from and a currency to convert to.",
      },
      {
        title: "Enter an Amount",
        description: "Enter an amount (defaults to 1 if left empty).",
      },
      {
        title: "Convert & View Results",
        description:
          "Click the convert button to see the converted amount and the corresponding flags.",
      },
    ],
  },
  {
    id: 9,
    title: "JP Tech Fest",
    description:
      "A static event landing page built with HTML, CSS, and Bootstrap for JPIET's technical fest.",
    overview:
      "JP Tech Fest is a static event site for JPIET's tech fest, made up of a home page and an event details page (event.html), styled with Bootstrap and Sass-derived CSS.",
    thumbnail: "/assets/portfolio/jp-tech-fest/jp-tech-fest-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://rajesh-ranjan-git.github.io/JPTechFest/",
    githubUrl: "https://github.com/rajesh-ranjan-git/JPTechFest/",
    screens: [
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-home-page.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-events.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-about.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-team.webp",
      "/assets/portfolio/jp-tech-fest/jp-tech-fest-all-events.webp",
    ],
    features: [
      {
        title: "Multi-Page Layout",
        description: "Home (index.html) and event details (event.html) pages.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Sass Styling",
        description: "Sass sources alongside compiled CSS.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the site.",
      },
    ],
    usage: [
      {
        title: "View the Home Page",
        description:
          "Open index.html in your browser to view the fest home page.",
      },
      {
        title: "Navigate to Event Details",
        description: "Navigate to the event page to see fest event details.",
      },
    ],
  },
  {
    id: 10,
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with Vanilla JavaScript, complete with win/draw detection and sound effects.",
    overview:
      "Tic Tac Toe is a client-side implementation of the classic two-player game, playable directly in the browser with no backend involved.",
    thumbnail: "/assets/portfolio/tic-tac-toe/tic-tac-toe-thumbnail.webp",
    category: "Vanilla JS",
    techStack: [{ type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript"] }],
    liveUrl: "https://tictactoe-vanilla-js.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/TicTacToe/",
    screens: [
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-game-page.webp",
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-winner-page.webp",
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-draw-page.webp",
      "/assets/portfolio/tic-tac-toe/tic-tac-toe-loader.webp",
    ],
    features: [
      {
        title: "Two-Player Gameplay",
        description: "Classic X/O turn-based play on a 3x3 grid.",
      },
      {
        title: "Win/Draw Detection",
        description:
          "Automatically detects winning combinations and draw conditions.",
      },
      {
        title: "Sound Effects",
        description: "Cool sound effects on moves and game outcomes.",
      },
    ],
    usage: [
      {
        title: "Open the Game",
        description: "Open the page in your browser.",
      },
      {
        title: "Take Turns",
        description: "Take turns clicking cells to place X or O.",
      },
      {
        title: "Game Outcome",
        description:
          "The game announces the winner or a draw, with sound effects.",
      },
    ],
  },
  {
    id: 11,
    title: "Car Removal",
    description:
      "A static business landing page built with HTML, CSS, and Bootstrap for a car removal/repair services company.",
    overview:
      "Car-Removal is a static marketing landing page for a car removal/repair service. It presents company information, services, and a call-to-action layout styled with Bootstrap and custom CSS.",
    thumbnail: "/assets/portfolio/car-removal/car-removal-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://car-removal.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Car-Removal/",
    screens: [
      "/assets/portfolio/car-removal/car-removal-1.webp",
      "/assets/portfolio/car-removal/car-removal-2.webp",
      "/assets/portfolio/car-removal/car-removal-3.webp",
    ],
    features: [
      {
        title: "Business Landing Layout",
        description: "Header, services, and call-to-action sections.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the page.",
      },
    ],
    usage: [
      {
        title: "View the Landing Page",
        description:
          "Open the page in your browser to view the car removal service landing page.",
      },
      {
        title: "Browse Services & Info",
        description: "Browse the services and company information sections.",
      },
    ],
  },
  {
    id: 12,
    title: "Exterior Water Blaster",
    description:
      "A static multi-page business site built with HTML, CSS, and Bootstrap for an exterior water blasting/washing company, including a working PHP contact form.",
    overview:
      "Exterior-Water-Blaster is a static marketing site for an exterior washing/water blasting company. It includes a home page and a contact page, with a PHP-based mail handler for processing contact form submissions.",
    thumbnail:
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
      { type: "backend", tech: ["PHP"] },
    ],
    liveUrl: "https://exterior-water-blaster.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Exterior-Water-Blaster/",
    screens: [
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-1.webp",
      "/assets/portfolio/exterior-water-blaster/exterior-water-blaster-2.webp",
    ],
    features: [
      {
        title: "Multi-Page Layout",
        description: "Home (index.html) and contact (contact.html) pages.",
      },
      {
        title: "Contact Form Backend",
        description:
          "mailform.php / action.php handle contact form submissions server-side.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the page.",
      },
    ],
    usage: [
      {
        title: "View the Home Page",
        description: "Open index.html in your browser to view the home page.",
      },
      {
        title: "Submit the Contact Form",
        description:
          "Navigate to the contact page and submit the form to trigger the PHP mail handler.",
      },
    ],
  },
  {
    id: 13,
    title: "To Do App",
    description:
      "A Vanilla JavaScript to-do list app that lets you add, edit, and delete tasks, with LocalStorage used to keep track of your list in the browser.",
    overview:
      "To-Do-App is a client-side to-do list manager. Users can add todo items with a title and description, edit either field, and delete items, with everything persisted locally via LocalStorage.",
    thumbnail: "/assets/portfolio/to-do-app/to-do-app-thumbnail.webp",
    category: "Vanilla JS",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript"] },
      { type: "Storage", tech: ["Browser LocalStorage"] },
    ],
    liveUrl: "https://to-do-vanillajs.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/To-Do-App/",
    screens: [
      "/assets/portfolio/to-do-app/to-do-app-home-page.webp",
      "/assets/portfolio/to-do-app/to-do-app-with-items-without-description.webp",
      "/assets/portfolio/to-do-app/to-do-app-adding-description.webp",
      "/assets/portfolio/to-do-app/to-do-app-with-description.webp",
      "/assets/portfolio/to-do-app/to-do-app-editing-title.webp",
      "/assets/portfolio/to-do-app/to-do-app-new-title.webp",
      "/assets/portfolio/to-do-app/to-do-app-deleting-item.webp",
    ],
    features: [
      {
        title: "Add Todos",
        description: "Create todo items with a title and description.",
      },
      {
        title: "Edit Todos",
        description:
          "Edit both the title and description of existing todo items.",
      },
      {
        title: "Delete Todos",
        description: "Remove todo items from the list.",
      },
      {
        title: "Local Persistence",
        description:
          "Todos are stored in LocalStorage, so they persist across page reloads.",
      },
    ],
    usage: [
      {
        title: "Add Todos",
        description: "Add a new todo item with a title and description.",
      },
      {
        title: "Edit Todos",
        description: "Edit the title or description of an existing todo.",
      },
      {
        title: "Delete Todos",
        description: "Delete todo items you no longer need.",
      },
      {
        title: "Persistent Storage",
        description: "Your todo list persists in the browser between visits.",
      },
    ],
  },
  {
    id: 14,
    title: "Task Manager",
    description:
      "A Vanilla JavaScript task management app with search and filter functionality, using LocalStorage to persist tasks in the browser.",
    overview:
      "Task-Manager is a client-side task management app. Tasks are created, searched, and filtered directly in the browser, with all data persisted locally via the browser's LocalStorage — no backend required.",
    thumbnail: "/assets/portfolio/task-manager/task-manager-thumbnail.webp",
    category: "Vanilla JS",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript"] },
      { type: "Storage", tech: ["Browser LocalStorage"] },
    ],
    liveUrl: "https://rajesh-ranjan-git.github.io/Task-Manager/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Task-Manager/",
    screens: [
      "/assets/portfolio/task-manager/task-manager-home-page.webp",
      "/assets/portfolio/task-manager/task-manager-add-tasks.webp",
      "/assets/portfolio/task-manager/task-manager-tasks-with-priorities.webp",
      "/assets/portfolio/task-manager/task-manager-filtered-tasks.webp",
      "/assets/portfolio/task-manager/task-manager-tasks-after-deleting.webp",
    ],
    features: [
      {
        title: "Task Management",
        description: "Add and manage tasks in the browser.",
      },
      {
        title: "Search Functionality",
        description: "Search through existing tasks.",
      },
      {
        title: "Filter Functionality",
        description: "Filter tasks based on criteria.",
      },
      {
        title: "Local Persistence",
        description:
          "Tasks are stored in LocalStorage, so they persist across page reloads.",
      },
    ],
    usage: [
      {
        title: "Add Tasks",
        description: "Add a new task using the input field.",
      },
      {
        title: "Search Tasks",
        description: "Use the search bar to find specific tasks.",
      },
      {
        title: "Filter Tasks",
        description: "Use the filter controls to narrow down the task list.",
      },
      {
        title: "Persistent Storage",
        description: "Tasks remain saved in your browser between visits.",
      },
    ],
  },
  {
    id: 15,
    title: "Tic Tac Toe React",
    description:
      "A React + Vite rebuild of the classic Tic Tac Toe game, with player name entry, sound effects, and routing.",
    overview:
      "Tic Tac Toe - React is a component-based rebuild of the classic game. Players enter their names before starting, play a full game with win/draw detection, and enjoy sound effects throughout.",
    thumbnail:
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-thumbnail.webp",
    category: "React JS",
    techStack: [
      {
        type: "Frontend",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Tailwind CSS",
          "React JS",
          "Vite",
        ],
      },
      {
        type: "Routing",
        tech: ["React Router DOM"],
      },
      {
        type: "State Management",
        tech: ["Context API"],
      },
    ],
    liveUrl: "https://tictactoe-react-vite-game.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/TicTacToe-React/",
    screens: [
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-start-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-player-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-game-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-winner-page.webp",
      "/assets/portfolio/tic-tac-toe-react/tic-tac-toe-react-draw-page.webp",
    ],
    features: [
      {
        title: "Player Names",
        description: "Choose player names before starting a game.",
      },
      {
        title: "Two-Player Gameplay",
        description: "Classic X/O turn-based play on a 3x3 grid.",
      },
      {
        title: "Win/Draw Detection",
        description:
          "Automatically detects winning combinations and draw conditions.",
      },
      {
        title: "Sound Effects",
        description: "Cool sound effects on moves and game outcomes.",
      },
      {
        title: "Routing",
        description:
          "Multiple views (start screen, game, winner screen) via React Router.",
      },
      {
        title: "Reusable Patterns",
        description:
          "Custom Hooks, Higher Order Components, Context API, and state lifting.",
      },
    ],
    usage: [
      {
        title: "Enter Player Names",
        description: "Enter player names on the start screen.",
      },
      {
        title: "Take Turns",
        description: "Take turns clicking cells to place X or O.",
      },
      {
        title: "Game Outcome",
        description:
          "The game announces the winner or a draw, with sound effects.",
      },
    ],
  },
  {
    id: 16,
    title: "FQS Painting",
    description:
      "A static multi-page business site built with HTML, CSS, and Bootstrap for a painting and plastering services company",
    overview:
      "FQS-Painting is a static marketing site for a painting company, covering home, about, services, gallery, plasterboard-stopping, and contact pages.",
    thumbnail: "/assets/portfolio/fqs-painting/fqs-painting-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    ],
    liveUrl: "https://rajesh-ranjan-git.github.io/FQS-Painting/",
    githubUrl: "https://github.com/rajesh-ranjan-git/FQS-Painting/",
    screens: [
      "/assets/portfolio/fqs-painting/fqs-painting-home-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-about-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-gallery-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-services-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-contact-page.webp",
      "/assets/portfolio/fqs-painting/fqs-painting-image-view.webp",
    ],
    features: [
      {
        title: "Multi-Page Layout",
        description:
          "Home, About Us, Services, Gallery, Plasterboard Stopping, and Contact Us pages.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Custom Web Fonts",
        description: "Local font files used across the site.",
      },
    ],
    usage: [
      {
        title: "View the Home Page",
        description: "Open index.html in your browser to view the home page.",
      },
      {
        title: "Navigate Site Pages",
        description:
          "Navigate between the About, Services, Gallery, and Contact pages using the site navigation.",
      },
    ],
  },
  {
    id: 17,
    title: "Sky Painting",
    description:
      "A static business site built with HTML, CSS, and Bootstrap for a painting services company, including a working PHP contact form.",
    overview:
      "Sky-Painting is a static marketing site for a painting company, with a home page and a thank-you page, backed by a PHP mail handler for the contact form.",
    thumbnail: "/assets/portfolio/sky-painting/sky-painting-thumbnail.webp",
    category: "Frontend (HTML & CSS)",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
      { type: "Backend", tech: ["PHP"] },
    ],
    liveUrl: "https://sky-painting.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Sky-Painting/",
    screens: [
      "/assets/portfolio/sky-painting/sky-painting-landing-page-1.webp",
      "/assets/portfolio/sky-painting/sky-painting-landing-page-2.webp",
      "/assets/portfolio/sky-painting/sky-painting-landing-page-3.webp",
    ],
    features: [
      {
        title: "Multi-Page Layout",
        description: "Home (index.html) and thank-you (thankyou.html) pages.",
      },
      {
        title: "Contact Form Backend",
        description: "mail.php handles contact form submissions server-side.",
      },
      {
        title: "Bootstrap Components",
        description: "Responsive grid and UI components from Bootstrap.",
      },
      {
        title: "Icon Support",
        description: "Font Awesome icons used throughout the site.",
      },
    ],
    usage: [
      {
        title: "View the Home Page",
        description: "Open index.html in your browser to view the home page.",
      },
      {
        title: "Submit the Contact Form",
        description:
          "Submit the contact form to trigger the PHP mail handler and view the thank-you page.",
      },
    ],
  },
  {
    id: 18,
    title: "PhotoPhlix",
    description:
      "An image gallery application built with React and Vite, powered by the Unsplash API.",
    overview:
      "PhotoPhlix lets users browse photos uploaded by the Unsplash community, view them in a lightbox, favorite images, and share them via WhatsApp.",
    thumbnail: "/assets/portfolio/photo-phlix/photo-phlix-thumbnail.webp",
    category: "React JS",
    techStack: [
      {
        type: "Frontend",
        tech: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript",
          "React JS",
          "Vite",
          "JSX",
          "Flowbite / Flowbite React",
        ],
      },
      {
        type: "State Management",
        tech: ["Redux Toolkit", "React Redux", "Context API"],
      },
      {
        type: "HTTP Client",
        tech: ["Fetch API"],
      },
      {
        type: "Routing",
        tech: ["React Router DOM"],
      },
      {
        type: "Image Viewer",
        tech: ["yet-another-react-lightbox"],
      },
      {
        type: "Data Source",
        tech: ["Unsplash API"],
      },
    ],
    liveUrl: "https://photophlix.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/PhotoPhlix/",
    screens: [
      "/assets/portfolio/photo-phlix/photo-phlix-home-page.webp",
      "/assets/portfolio/photo-phlix/photo-phlix-favorites-page.webp",
      "/assets/portfolio/photo-phlix/photo-phlix-light-box.webp",
      "/assets/portfolio/photo-phlix/photo-phlix-after-search.webp",
    ],
    features: [
      {
        title: "Photo Browsing",
        description: "Browse and search photos sourced from Unsplash.",
      },
      {
        title: "Lightbox Viewer",
        description: "View images full-size using React Lightbox.",
      },
      {
        title: "Favorites",
        description: "Mark photos as favorites for quick access.",
      },
      {
        title: "Share to WhatsApp",
        description: "Share a photo directly via WhatsApp's share link.",
      },
      {
        title: "Infinite Scrolling",
        description: "Continuously load more photos while browsing.",
      },
      {
        title: "Reusable Patterns",
        description:
          "Custom Hooks, Higher Order Components, Controlled/Uncontrolled carousel components, Context API, and state lifting.",
      },
    ],
    usage: [
      {
        title: "Browse & Search Photos",
        description: "Browse and search photos on the home page.",
      },
      {
        title: "View in Lightbox",
        description: "Click a photo to view it in the lightbox.",
      },
      {
        title: "Favorite Photos",
        description: "Favorite photos to revisit them later.",
      },
      {
        title: "Share via WhatsApp",
        description: "Share a photo via WhatsApp using the share option.",
      },
    ],
  },
  {
    id: 19,
    title: "Get Kart",
    description:
      "An e-commerce web application built with React and Vite, showcasing a broad range of modern React patterns alongside authentication, cart, and product-browsing functionality.",
    overview:
      "GetKart is a React + Vite e-commerce front end. Users can browse a product catalog, search, filter, and sort products, add items to a cart, and sign up / log in via a JWT-authenticated backend. Product data is sourced from DummyJSON, while user accounts are handled by a separate Node.js/Express/MongoDB backend deployed on Render.",
    thumbnail: "/assets/portfolio/get-kart/get-kart-thumbnail.webp",
    category: "React JS",
    techStack: [
      {
        type: "Frontend",
        tech: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript",
          "React JS",
          "Vite",
          "JSX",
          "Daisy UI",
          "Remix Icons",
        ],
      },
      { type: "Backend", tech: ["Node JS", "Express JS"] },
      { type: "Database", tech: ["MongoDB", "Mongoose"] },
      { type: "Authentication", tech: ["JWT", "cookies", "Bcrypt"] },
      {
        type: "State Management",
        tech: ["Redux Toolkit", "React Redux", "Context API"],
      },
      {
        type: "HTTP Client",
        tech: ["Fetch API"],
      },
      { type: "Forms/Validation", tech: ["Formik", "Yup"] },
      {
        type: "Routing",
        tech: ["React Router DOM"],
      },
      {
        type: "Data Source",
        tech: ["DummyJSON"],
      },
    ],
    liveUrl: "https://get-kart.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/GetKart/",
    screens: [
      "/assets/portfolio/get-kart/get-kart-home-page.webp",
      "/assets/portfolio/get-kart/get-kart-home-page-lighttheme.webp",
      "/assets/portfolio/get-kart/get-kart-login-page.webp",
      "/assets/portfolio/get-kart/get-kart-signup-page.webp",
      "/assets/portfolio/get-kart/get-kart-profile-page-withupdatedetails.webp",
      "/assets/portfolio/get-kart/get-kart-shimmerui.webp",
      "/assets/portfolio/get-kart/get-kart-singleproduct-page.webp",
      "/assets/portfolio/get-kart/get-kart-cart-page.webp",
    ],
    features: [
      {
        title: "Product Catalog",
        description: "Browse products with Search Bar, Filtering, and Sorting.",
      },
      {
        title: "Shimmer UI",
        description: "Loading skeletons while data is being fetched.",
      },
      {
        title: "Cart Management",
        description: "Add products to a cart and review them before checkout.",
      },
      {
        title: "Authentication",
        description:
          "Sign up / log in flow using JWT tokens stored in cookies.",
      },
      {
        title: "Form Validation",
        description: "Validated forms via Formik and Yup.",
      },
      {
        title: "State Management",
        description: "Redux Toolkit alongside Context API for shared state.",
      },
      {
        title: "Routing",
        description:
          "Dynamic routing with React Router, including protected/auth-wrapped routes.",
      },
      {
        title: "Reusable Patterns",
        description:
          "Custom Hooks, Higher Order Components, Lazy Loading, Controlled/Uncontrolled components (e.g. accordion), and state lifting.",
      },
    ],
    usage: [
      {
        title: "Browse the Catalog",
        description:
          "Browse the product catalog on the home page, using search, filters, and sorting.",
      },
      {
        title: "Sign Up / Log In",
        description: "Sign up or log in to your account.",
      },
      {
        title: "Manage Your Cart",
        description:
          "Add products to your cart and review them from the cart page.",
      },
      {
        title: "View Product Details",
        description: "View individual product details on the product page.",
      },
    ],
  },
  {
    id: 20,
    title: "Bancardify Me",
    description:
      "A modern finance/banking dashboard platform built with Next.js, giving users a unified view of their bank accounts, transactions, and payment transfers.",
    overview:
      "BancardifyMe is a Next.js (App Router) banking dashboard. Users sign up / sign in, securely link their real bank accounts via Plaid, view balances and recent transactions across linked banks, transfer funds between accounts using Dwolla, and track their full transaction history.",
    thumbnail: "/assets/portfolio/bancardify-me/bancardify-me-thumbnail.webp",
    category: "Next JS",
    techStack: [
      {
        type: "Frontend",
        tech: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "TypeScript",
          "Next JS",
          "Shadcn UI",
          "React JS",
          "Radix UI",
        ],
      },
      { type: "Forms/Validation", tech: ["React Hook Form", "Zod"] },
      { type: "Charts", tech: ["Chart JS"] },
      { type: "Backend", tech: ["Node JS", "Appwrite"] },
      { type: "Authentication", tech: ["JWT"] },
      { type: "Payment", tech: ["Plaid", "Dwolla"] },
      { type: "Monitoring", tech: ["Sentry"] },
    ],
    liveUrl: "https://bancardifyme.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/bancardifyme/",
    screens: [
      "/assets/portfolio/bancardify-me/bancardify-me-home.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-banks.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-sign-in.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-sign-up-2.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-sign-up.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-transactions.webp",
      "/assets/portfolio/bancardify-me/bancardify-me-transfer.webp",
    ],
    features: [
      {
        title: "Authentication",
        description: "Sign-up and sign-in flows backed by Appwrite accounts.",
      },
      {
        title: "Bank Linking",
        description: "Securely connect bank accounts via Plaid Link.",
      },
      {
        title: "My Banks",
        description: "View all linked bank accounts and their details.",
      },
      {
        title: "Transaction History",
        description:
          "Browse historical transactions per linked account, with pagination.",
      },
      {
        title: "Payment Transfer",
        description:
          "Transfer funds between accounts using Dwolla as the payment processor.",
      },
      {
        title: "Dashboard Overview",
        description:
          "Total balance summary, animated counters, and a doughnut chart breakdown of balances by bank.",
      },
      {
        title: "Error Monitoring",
        description:
          "Sentry integration for client, server, and edge runtime error tracking.",
      },
    ],
    usage: [
      {
        title: "Sign up / Sign in",
        description:
          "Create an account or log in from the /sign-up or /sign-in pages. Sessions are managed by Appwrite.",
      },
      {
        title: "Link a bank account",
        description:
          "From the dashboard, use the Plaid Link button to securely connect a bank account (use Plaid's Sandbox test credentials in development).",
      },
      {
        title: "View your dashboard",
        description:
          "See your total balance, an animated summary of balances by bank, and recent transactions on the home page.",
      },
      {
        title: "My Banks",
        description:
          "Go to /my-banks to see all linked bank accounts and their individual details.",
      },
      {
        title: "Transaction History",
        description:
          "Go to /transaction-history to browse the full, paginated transaction history for a selected bank.",
      },
      {
        title: "Transfer funds",
        description:
          "Go to /payment-transfer to send money between accounts; transfers are processed through Dwolla.",
      },
      {
        title: "Sign out",
        description:
          "End your session from the sidebar/footer sign-out action.",
      },
    ],
  },
  {
    id: 21,
    title: "Movie Mania",
    description:
      "A Movie & TV Show hub built with React and Vite, powered by The Movie Database (TMDB) API.",
    overview:
      "MovieMania lets users browse Popular, Trending, Upcoming, Now Playing, On Air, Similar, and Recommended movies and TV shows, view details, and watch trailers — all backed by the TMDB API.",
    thumbnail: "/assets/portfolio/movie-mania/movie-mania-thumbnail.webp",
    category: "React JS",
    techStack: [
      {
        type: "Frontend",
        tech: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript",
          "React JS",
          "Vite",
        ],
      },
      { type: "State Management", tech: ["Redux Toolkit", "React Redux"] },
      { type: "HTTP Client", tech: ["Axios"] },
      { type: "Routing", tech: ["React Router DOM"] },
      { type: "Data Source", tech: ["TMDB API"] },
    ],
    liveUrl: "https://app-moviemania.netlify.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/MovieMania/",
    screens: [
      "/assets/portfolio/movie-mania/movie-mania-home-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-horizontal-cards.webp",
      "/assets/portfolio/movie-mania/movie-mania-movies-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-search-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-singlemovie-page.webp",
      "/assets/portfolio/movie-mania/movie-mania-trailer-section.webp",
      "/assets/portfolio/movie-mania/movie-mania-tv-shows-page.webp",
    ],
    features: [
      {
        title: "Browse by Category",
        description:
          "Popular, Trending, Upcoming, Now Playing, On Air sections for Movies and TV Shows.",
      },
      {
        title: "Search & Filter",
        description: "Search bar with filtering of result cards.",
      },
      {
        title: "Trailers",
        description: "Watch trailers embedded via YouTube.",
      },
      {
        title: "Infinite Scrolling",
        description: "Debounced infinite scroll to reduce redundant API calls.",
      },
      {
        title: "Similar & Recommended",
        description: "Related content suggestions on details pages.",
      },
      {
        title: "Reusable Patterns",
        description:
          "Custom Hooks, Higher Order Components, Controlled/Uncontrolled carousel components, and state lifting.",
      },
    ],
    usage: [
      {
        title: "Browse by Category",
        description: "Browse movies and TV shows by category on the home page.",
      },
      {
        title: "Search Titles",
        description: "Use the search bar to find specific titles.",
      },
      {
        title: "View Title Details",
        description:
          "Open a title's details page to view info, cast, trailers, and recommendations.",
      },
    ],
  },
  {
    id: 22,
    title: "Shopprixity",
    description:
      "A platform is designed to provide users with an intuitive and robust online shopping experience. It has admin section as well to manage and simply the entire shopping experience.",
    overview:
      "A full-stack e-commerce platform designed to provide users with an intuitive and robust online shopping experience. This project is designed to cater to both small businesses and large enterprises, with flexibility and scalability in mind.",
    thumbnail: "/assets/portfolio/shopprixity/shopprixity-thumbnail.webp",
    category: "React JS",
    techStack: [
      { type: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "React JS"] },
      { type: "Backend", tech: ["Node JS", "Express JS"] },
      { type: "Database", tech: ["MongoDB"] },
      { type: "ORM", tech: ["Prisma"] },
      { type: "Authentication", tech: ["JWT", "Firebase", "cookies"] },
      { type: "Payment", tech: ["Paypal"] },
    ],
    liveUrl: "https://shopprixity.vercel.app/",
    githubUrl: "https://github.com/rajesh-ranjan-git/Shopprixity/",

    screens: [
      "/assets/portfolio/shopprixity/shopprixity-shophome.webp",
      "/assets/portfolio/shopprixity/shopprixity-shophome1.webp",
      "/assets/portfolio/shopprixity/shopprixity-signin.webp",
      "/assets/portfolio/shopprixity/shopprixity-register.webp",
      "/assets/portfolio/shopprixity/shopprixity-allproducts.webp",
      "/assets/portfolio/shopprixity/shopprixity-filterproducts.webp",
      "/assets/portfolio/shopprixity/shopprixity-filterproducts1.webp",
      "/assets/portfolio/shopprixity/shopprixity-search.webp",
      "/assets/portfolio/shopprixity/shopprixity-searchresults.webp",
      "/assets/portfolio/shopprixity/shopprixity-profiledropdown.webp",
      "/assets/portfolio/shopprixity/shopprixity-cart.webp",
      "/assets/portfolio/shopprixity/shopprixity-checkout.webp",
      "/assets/portfolio/shopprixity/shopprixity-checkout1.webp",
      "/assets/portfolio/shopprixity/shopprixity-paypal.webp",
      "/assets/portfolio/shopprixity/shopprixity-paymentsuccess.webp",
      "/assets/portfolio/shopprixity/shopprixity-accountorders.webp",
      "/assets/portfolio/shopprixity/shopprixity-accountaddress.webp",
      "/assets/portfolio/shopprixity/shopprixity-accountaddress1.webp",
      "/assets/portfolio/shopprixity/shopprixity-orderdetails.webp",
      "/assets/portfolio/shopprixity/shopprixity-admindashboard.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminproducts.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminorders.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminorderdetails.webp",
      "/assets/portfolio/shopprixity/shopprixity-adminorderupdate.webp",
      "/assets/portfolio/shopprixity/shopprixity-orderupdatedstatus.webp",
      "/assets/portfolio/shopprixity/shopprixity-addproduct.webp",
      "/assets/portfolio/shopprixity/shopprixity-editproduct.webp",
    ],
    features: [
      {
        title: "Product Catalog",
        description:
          "Create, update, and manage your product listings with ease.",
      },
      {
        title: "User Accounts",
        description:
          "Allow users to create accounts, track orders, and save preferences.",
      },
      {
        title: "Shopping Cart",
        description:
          "Users can add products to their cart and proceed to checkout.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Process payments securely through third-party services (PayPal).",
      },
      {
        title: "Order Management",
        description: "Admins can track and manage customer orders.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for desktops, tablets, and mobile devices.",
      },
      {
        title: "Search and Filters",
        description:
          "Easy search functionality with advanced filtering options to help users find the products they need.",
      },
    ],
    usage: [
      {
        title: "Sign Up / Log In",
        description:
          "Create an account or log in to access personalized features.",
      },
      {
        title: "Browse Products",
        description:
          "Browse the product catalog or use the search and filter features to find items.",
      },
      {
        title: "Add Items to Cart",
        description:
          "Add products to your shopping cart and view your cart from the navigation menu.",
      },
      {
        title: "Proceed to Checkout",
        description:
          "Enter your shipping details and payment information, then complete the purchase.",
      },
      {
        title: "Track Orders",
        description:
          "View and manage your order history from your account dashboard.",
      },
    ],
  },
];

export const certificates = [
  {
    name: "AI for Engineers Masterclass",
    platform: "Outskill",
    imageSrc:
      "/assets/certificates/ai-for-engineers-masterclass-certificate-outskill.webp",
    url: "https://drive.google.com/file/d/13zkE31ndTIo7SdTIv57hFmP3kwhtg9HV/view?usp=drive_link",
  },
  {
    name: "Data Science vs Machine Learning vs AI Masterclass",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/data-science-vs-machine-learning-vs-artificial-intelligence-masterclass-scaler-certificate.webp",
    url: "https://drive.google.com/file/d/1bMTsJmeCq0cHEX_3SRt2l7YcM_TQXJ1X/view?usp=drive_link",
  },
  {
    name: "SEO",
    platform: "India Today Group",
    imageSrc: "/assets/certificates/seo-certificate-itg.webp",
    url: "https://drive.google.com/file/d/1ylTZCVNfJc8P8VnQ59hq2fuVwX9opUPr/view?usp=drive_link",
  },
  {
    name: "Fundamentals of Docker & Kubernetes",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/fundamentals-of-docker-&-kubernetes-certificate-scaler.webp",
    url: "https://drive.google.com/file/d/1ZMJUQHjG4Bg66ALhOCY5M3Lq9laIVUkw/view?usp=drive_link",
  },
  {
    name: "SOLID Principles Masterclass",
    platform: "Scaler",
    imageSrc:
      "/assets/certificates/solid-principles-every-developer-must-know-masterclass-scaler-certificate.webp",
    url: "https://drive.google.com/file/d/1WgyKdWs7xpdTSbiodHz0cZ1yBFuYEVHh/view?usp=drive_link",
  },
  {
    name: "React Native Development Internship",
    platform: "CYBERED",
    imageSrc:
      "/assets/certificates/internship-completion-&-recommendation-react-native-development-certificate-cybered-edtech.webp",
    url: "https://drive.google.com/file/d/1uaXBqmSd3QOtoVPz46nf1yGDdXYEURDs/view?usp=drive_link",
  },
  {
    name: "Namaste FrontEnd System Design",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-frontend-system-design-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1VhpRBFVuTlhp69_6mYx7RN3jruDV8cM5/view?usp=drive_link",
  },
  {
    name: "MERN Full Stack Web Development",
    platform: "GeeksForGeeks",
    imageSrc:
      "/assets/certificates/mern-full-stack-web-development-certificate-gfg.webp",
    url: "https://drive.google.com/file/d/1H03oAe-SboKKAFK0hZk9TodYC4nqolm1/view?usp=drive_link",
  },
  {
    name: "Namaste Node JS",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-node-js-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1Lw0HAzjF3ra7OMI5NYZDP93_xkUhIYsi/view?usp=drive_link",
  },
  {
    name: "Namaste JavaScript",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/namaste-javascript-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1rgeTaUVUz9ZYyiGXxYEx1DSwGzqvuyOB/view?usp=drive_link",
  },
  {
    name: "Crack FrontEnd Interview",
    platform: "NamasteDev.com",
    imageSrc:
      "/assets/certificates/crack-frontend-interview-certificate-namastedev.webp",
    url: "https://drive.google.com/file/d/1Kw_RDOtcAbZJbKqUnTxwK3FKPnjBA6Ld/view?usp=drive_link",
  },
  {
    name: "React JS",
    platform: "GeeksForGeeks",
    imageSrc: "/assets/certificates/react-js-certificate-gfg.webp",
    url: "https://drive.google.com/file/d/1MFjV6NudohOh6n95IqnwSa_VAk42AJQQ/view?usp=drive_link",
  },
  {
    name: "React JS & Grunt",
    platform: "NTT Data Services",
    imageSrc: "/assets/certificates/react-js-&-grunt-certificate-ntt.webp",
    url: "https://drive.google.com/file/d/1VhocrtC0DMQADKvmGudZxVRG46nldELb/view?usp=drive_link",
  },
  {
    name: "HTML5 with JavaScript & Css3 Introduction",
    platform: "NTT Data Services",
    imageSrc:
      "/assets/certificates/html5-with-javascript-&-css3-introduction-certificate-ntt.webp",
    url: "https://drive.google.com/file/d/16w6XGnbvRlYsooY62rPODrGpA3gGhbtE/view?usp=drive_link",
  },
  {
    name: "Industrial Training - Java",
    platform: "Ducat",
    imageSrc: "/assets/error/image-not-available.webp",
  },
  {
    name: "Industrial Training - Python",
    platform: "Ducat",
    imageSrc: "/assets/error/image-not-available.webp",
  },
] as const;
