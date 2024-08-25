import { useEffect } from "react";
import { useState } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";
import Greetings from "../../Components/Greetings/Greetings";
import Menu from "../../Components/Menu/Menu";
import About from "../../Containers/About/About";
import Achievements from "../../Containers/Achievements/Achievements";
import Certificates from "../../Containers/Certificates/Certificates";
import Contact from "../../Containers/Contact/Contact";
import Education from "../../Containers/Education/Education";
import Experience from "../../Containers/Experience/Experience";
import Portfolio from "../../Containers/Portfolio/Portfolio";
import Splash from "../Splash/Splash";

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
