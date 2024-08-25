import { useEffect } from "react";
import { useState } from "react";
import BackToTop from "../../components/BackToTop/BackToTop";
import Greetings from "../../components/Greetings/Greetings";
import Menu from "../../components/menu/Menu";
import About from "../../containers/About/About";
import Achievements from "../../containers/achievements/Achievements";
import Certificates from "../../containers/Certificates/Certificates";
import Contact from "../../containers/Contact/Contact";
import Education from "../../containers/Education/Education";
import Experience from "../../containers/Experience/Experience";
import Portfolio from "../../containers/portfolio/Portfolio";
import Splash from "../splash/Splash";

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000);
  }, []);

  return splash ? (
    <Splash />
  ) : (
    <>
      <Menu />
      <div className="home">
        <Greetings />
        <About />
        <Experience />
        <Education />
        {/* <Achievements /> */}
        {/* <Portfolio /> */}
        {/* <Certificates /> */}
        <Contact />

        <BackToTop />
      </div>
    </>
  );
}
