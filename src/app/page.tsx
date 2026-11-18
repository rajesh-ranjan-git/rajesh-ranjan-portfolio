import type { Metadata } from "next";
import { getHomeJsonLd } from "@/helpers/seo.helpers";
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
import JsonLd from "@/components/seo/json.ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const Home = () => {
  return (
    <>
      <JsonLd data={getHomeJsonLd()} />

      <SplashGate loadingText="Loading..." endingText="Welcome...">
        <main className="relative pl-0 md:pl-16 min-h-screen">
          <Greetings />
          <About title="About me..." />
          <Skills title="Technical skills & tools..." />
          <Experience title="Professional experience..." />
          <Internships title="Internships & early career..." />
          <Education title="Education..." />
          <Portfolio title="Projects I've built..." />
          <Certificates title="Certifications..." />
          <Contact
            title="Beam me a message..."
            description="Whether you have a question, any suggestion, or just want to say hi, drop me a message and I'll get back to you!"
          />
        </main>
      </SplashGate>
    </>
  );
};

export default Home;
