import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import "../styles/foundation.css";
import "../styles/baseTemplateA.css";
import "../styles/about.css";

import Header from "../components/header/header";
import GridLines from "../components/gridlines/gridLines";
import Card from "../components/card/card";
import Links from "../components/links/links";

import chrisKuhrt from "../images/Avatar-Chris-Kuhrt.png";

import refNiiio from "../images/ref-Niiio.png";
import refPatronas from "../images/ref-Patronas.png";
import refChrono24 from "../images/ref-Chrono24.png";
import refDFB from "../images/ref-DFB.png";
import refSCFreiburg from "../images/ref-SCFreiburg.png";
import refSwisscom from "../images/ref-Swisscom.png";
import refReservix from "../images/ref-Reservix.png";

const About: React.FC<PageProps> = () => {
  return (
    <div className="gridContainer">
      <GridLines />
      <Header />
      <main className="gridWrapper">
        <div className="mainContainer TemplateA">
          <h1>About</h1>
          <aside>
            <Card>
              <div className="avatarCardProfile">
                <img
                  className="aboutAvatar"
                  src={chrisKuhrt}
                  alt="Chris Kuhrt"
                ></img>
                <div>
                  <h2>Chris Kuhrt</h2>
                  <h4>Designer</h4>
                </div>
              </div>
              <div>
                <h3>You can find me on</h3>
                <ul className="ulAboutSocial">
                  <li>
                    <Links to="http://linkedin.chriskuhrt.de/" aria="LinkedIn">
                      LinkedIn
                    </Links>
                  </li>
                  <li>
                    <Links to="http://medium.chriskuhrt.de/" aria="Medium">
                      Medium
                    </Links>
                  </li>
                  <li>
                    <Links
                      to="https://www.polywork.com/chriskuhrt"
                      aria="Polywork"
                    >
                      Polywork
                    </Links>
                  </li>
                  <li>
                    <Links to="http://500px.chriskuhrt.de/" aria="500px">
                      500px
                    </Links>
                  </li>

                  <li>
                    <Links to="http://twitter.chriskuhrt.de/" aria="Twitter">
                      Twitter
                    </Links>
                  </li>
                  <li>
                    <Links to="http://vimeo.chriskuhrt.de/" aria="Vimeo">
                      Vimeo
                    </Links>
                  </li>

                  <li>
                    <Links to="http://git.chriskuhrt.de/" aria="Github">
                      Vimeo
                    </Links>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Passion & Projects</h3>
                <ul className="ulAboutProjects">
                  <li>
                    <Links to="http://uxfreiburg.de/" aria="Twitter">
                      UX Freiburg
                    </Links>
                  </li>
                  <li>
                    <Links to="http://pixelbricks.de/" aria="Vimeo">
                      Pixelbricks
                    </Links>
                  </li>
                </ul>
              </div>
              <p className="textXS credits">
                © 2008 - 2023{" "}
                <Link to="/imprint">
                  Imprint
                </Link>
              </p>
            </Card>
          </aside>
          <section>
            <p className="textBody">
              Hi, my name is Chris Kuhrt and I am a Designer who is passionate
              about user-centered design, design processes and design systems. I
              am always looking for ways to improve the workflow between design,
              development, and management in order to improve the output and,
              above all, the outcome.
            </p>
            <p className="textBody">
              As a representative of the customers and users, I am dedicated to
              advocating for their needs and ensuring that all results align
              with UX principles. To accomplish this, I work closely with
              development, and product management throughout the planning,
              design, implementation process. I am committed to making sure that
              all goals, expectations, and needs of the customers and users are
              not only met, but exceeded. Additionally, I strive to ensure that
              the user experience is seamles and intuitive through every stage
              of the product's lifecycle. Therefore I use various research
              methods to gather data and feedback from users and incorporate it
              into the design process for iterative improvements.
            </p>
            <p className="textBody">
              I have a strong interest in problem-solving, knowledge sharing,
              process optimization, innovative thinking, and solution-oriented
              work, and I am committed to creating new scalable interactive
              experiences and products.
            </p>
            <div></div>
            <Card>
              <h3>Brands I've worked with</h3>
              <div className="references">
                <img
                  className="referencesCard"
                  src={refNiiio}
                  alt="niiio"
                ></img>
                <img
                  className="referencesCard"
                  src={refPatronas}
                  alt="Patronas"
                ></img>
                <img
                  className="referencesCard"
                  src={refChrono24}
                  alt="Chrono24"
                ></img>
                <img className="referencesCard" src={refDFB} alt="DFB"></img>
                <img
                  className="referencesCard"
                  src={refSCFreiburg}
                  alt="SCFreibrug"
                ></img>
                <img
                  className="referencesCard"
                  src={refSwisscom}
                  alt="Swisscom"
                ></img>
                <img
                  className="referencesCard"
                  src={refReservix}
                  alt="Reservix"
                ></img>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;

export const Head: HeadFC = () => (
  <>
  <meta charSet="UTF-8"></meta>
  <html lang="en" />
  <title>About</title>
  <meta
      name="description"
      content="Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."
    />
  
  </>
) ;

