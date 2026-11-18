import Greetings from "@/sections/greetings";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Experience from "@/sections/experience";
import Internships from "@/sections/internships";
import Education from "@/sections/education";
import Portfolio from "@/sections/portfolio";
import Certificates from "@/sections/certificates";
import Contact from "@/sections/contact";
import SplashGate from "@/components/ui/splash/splash.gate";
import SidebarBackground from "@/components/ui/background/sidebar.background";

const Home = () => {
  return (
    <SplashGate loadingText="Loading..." endingText="Welcome...">
      <SidebarBackground />

      <main className="relative pl-0 md:pl-16 min-h-screen">
        <Greetings />
        <About title="About me..." />
        <Skills title="My tech stacks..." />
        <Experience title="Professional journey..." />
        <Internships title="Internships..." />
        <Education title="Academic background..." />
        <Portfolio title="Legacy works..." />
        <Certificates title="Certifications..." />
        <Contact
          title="Beam me a message..."
          description="Have a question, an idea, or an opportunity? I'd love to hear from you. Drop me a message and let's start a conversation."
        />
      </main>
    </SplashGate>
  );
};

export default Home;
