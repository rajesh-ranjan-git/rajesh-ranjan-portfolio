import "./Skills.scss";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";
import html5 from "../../Assets/tech_img/html5.svg";

export default function Skills() {
  const elemToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };

  const skillsToggle = () => {
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  };

  return (
    <div className="skills" id="skills">
      <div className="skills-content section-content">
        <h2 className="h3 section-title">
          What My Programming Skills Includes?
        </h2>

        <p className="section-text">
          I develop simple, intuitive and responsive applications that helps
          users get things done with less effort and time.
        </p>

        <div className="skills-toggle" data-toggle-box>
          <button
            className="toggle-btn active"
            onClick={skillsToggle}
            data-toggle-btn
          >
            Skills
          </button>

          <button className="toggle-btn" onClick={skillsToggle} data-toggle-btn>
            Tools
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">HTML5</div>

              <div className="card-icon">
                <img src={html5} alt="HTML5 logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">CSS3</div>

              <div className="card-icon">
                <img src={css3} alt="CSS3 logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">JavaScript</div>

              <div className="card-icon">
                <img src={javascript} alt="JavaScript logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">TypeScript</div>

              <div className="card-icon">
                <img src={typescript} alt="TypeScript logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Node-js</div>

              <div className="card-icon">
                <img src={node - js} alt="Node Js logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Bootstrap</div>

              <div className="card-icon">
                <img src={bootstrap} alt="Bootstrap logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">React JS</div>

              <div className="card-icon">
                <img src={react} alt="React logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Ember</div>

              <div className="card-icon">
                <img src={ember} alt="Ember logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Sass</div>

              <div className="card-icon">
                <img src={sass} alt="Sass logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Next JS</div>

              <div className="card-icon">
                <img src={nextjs} alt="NextJs logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Django</div>

              <div className="card-icon">
                <img src={django} alt="Django logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Spring</div>

              <div className="card-icon">
                <img src={spring} alt="Spring logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Remix-run</div>

              <div className="card-icon">
                <img src={logo - remix} alt="Remix logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Android</div>

              <div className="card-icon">
                <img src={android} alt="Android logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">IOS</div>

              <div className="card-icon">
                <img src={ios} alt="IOS logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Flutter</div>

              <div className="card-icon">
                <img src={flutter} alt="Flutter logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Shell scripting</div>

              <div className="card-icon">
                <img src={bash} alt="Shell scripting logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C</div>

              <div className="card-icon">
                <img src={c(1)} alt="C logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C++</div>

              <div className="card-icon">
                <img src={c++} alt="C++ logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C#</div>

              <div className="card-icon">
                <img src={csharp} alt="C# logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Dart</div>

              <div className="card-icon">
                <img src={dart} alt="Dart logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">PHP</div>

              <div className="card-icon">
                <img src={php} alt="php logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Java</div>

              <div className="card-icon">
                <img src={java} alt="Java logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Kotlin</div>

              <div className="card-icon">
                <img src={kotlin} alt="Kotlin logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Python</div>

              <div className="card-icon">
                <img src={python} alt="python logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Firebase</div>

              <div className="card-icon">
                <img src={firebase} alt="Firebase logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Docker</div>

              <div className="card-icon">
                <img src={docker} alt="Docker logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">kubernetes</div>

              <div className="card-icon">
                <img src={kubernets} alt="kubernetes logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">MYSQL</div>

              <div className="card-icon">
                <img src={mysql} alt="MYSQL logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">MongoDB</div>

              <div className="card-icon">
                <img src={mongodb} alt="MongoDB logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">PostgreSQL</div>

              <div className="card-icon">
                <img src={postgresql} alt="PostgreSQL logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Redis</div>

              <div className="card-icon">
                <img src={redis} alt="Redis logo" />
              </div>
            </div>
          </li>
        </ul>

        <ul className="tools-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">Adobe XD</div>

              <div className="card-icon">
                <img src={adobe - xd} alt="Adobe XD Effects logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Photoshop</div>

              <div className="card-icon">
                <img src={adobe - photoshop} alt="Photoshop logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Illustrator</div>

              <div className="card-icon">
                <img src={adobe} alt="Illustrator logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">AWS</div>

              <div className="card-icon">
                <img src={amazonwebservices} alt="AWS logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Google Cloud</div>

              <div className="card-icon">
                <img src={google - cloud} alt="Google Cloud logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Npm</div>

              <div className="card-icon">
                <img src={npm} alt="Npm logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Android Studio</div>

              <div className="card-icon">
                <img src={android - studio} alt="Android studio logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Visual Studio</div>

              <div className="card-icon">
                <img src={visualstudio} alt="VS Code logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">VS Code</div>

              <div className="card-icon">
                <img src={visual - studio - code} alt="VS Code logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Atom</div>

              <div className="card-icon">
                <img src={atom} alt="Atom logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Intellij</div>

              <div className="card-icon">
                <img src={intellij} alt="Intellij logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Pycharm</div>

              <div className="card-icon">
                <img src={pycharm} alt="Pycharm logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Unity</div>

              <div className="card-icon">
                <img src={unity} alt="Unity logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Git</div>

              <div className="card-icon">
                <img src={git} alt="Git logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Github</div>

              <div className="card-icon">
                <img src={github} alt="Github logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Gitlab</div>

              <div className="card-icon">
                <img src={gitlab} alt="Gitlab logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Packer</div>

              <div className="card-icon">
                <img src={packer} alt="Packer logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Vagrant</div>

              <div className="card-icon">
                <img src={vagrant} alt="Vagrant logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Slack</div>

              <div className="card-icon">
                <img src={slack} alt="Slack logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Ubuntu</div>

              <div className="card-icon">
                <img src={ubuntu} alt="Ubuntu logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Trello</div>

              <div className="card-icon">
                <img src={trello} alt="Trello logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Postman</div>

              <div className="card-icon">
                <img src={postman} alt="Postman logo" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
