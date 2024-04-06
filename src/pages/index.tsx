import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/foundation.css";
import "../styles/index.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import GridLines from "../components/gridlines/gridLines";

import Card from "../components/card/card";
import "../components/cardReference/cardRefernce.css";

import CategoryTeamIcon from "../components/icons/category-team-icon";
import CategoryDesignSystemIcon from "../components/icons/category-designsystem-icon";
import CategoryFinanceIcon from "../components/icons/category-finance-icon";
import CategoryEcomIcon from "../components/icons/category-ecom-icon";

import chriskuhrt from "../images/chriskuhrt.jpg";
import uxfreiburg from "../images/enable.uxfreiburg.png";
import meetings from "../images/enable.meetings.png";
import uxmaturity from "../images/enable.uxmaturity.png";

import designsystem from "../images/designsystem.abundantia.png";

import niiio from "../images/finance.niiio.png";
import patronas from "../images/finance.patronas.png";

import chrono24 from "../images/e-com.luxury.jpg";
import reservix from "../images/e-com.ticketing.jpg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GridLines />
      <div className="gridContainer">
        <Header />

        <main className="gridWrapper gridWrapperContent">
          <section className="contentContainer contentContainer--main sectionIntro">
            <Card className="cardIntro cardSpacing--XL">
              <h1 className="title--XXXL">
                Hi, my name is Chris Kuhrt <br /> I’m a Product Designer based
                in Europe.
              </h1>
              <p>
                I'm specialised in the finance and e-commerce domain, dedicated
                to make complex interfaces user-friendly. <br />
                My aim is to synchronize user experiences with business
                objectives.
              </p>
              <ul className="cardIntroLinks">
                <li>
                  <Link to="/whatIdo">What I do</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </Card>

            <Card svgid="nopattern" className="cardPerson cardSpacing--Medium">
              <div className="personWrapper">
                <img src={chriskuhrt} alt="Chris Kuhrt"></img>
              </div>
            </Card>

            <AnchorLink
              to="#enablingTeams"
              className="cardCategory cardSpacing--Medium"
            >
              Enabling People
              <div className="categoryIcon">
                <CategoryTeamIcon />
              </div>
            </AnchorLink>

            <AnchorLink
              to="#designsystems"
              className="cardCategory cardSpacing--Medium"
            >
              Design Systems
              <div className="categoryIcon">
                <CategoryDesignSystemIcon />
              </div>
            </AnchorLink>

            <AnchorLink
              to="#finance"
              className="cardCategory cardSpacing--Medium"
            >
              Finance
              <div className="categoryIcon">
                <CategoryFinanceIcon />
              </div>
            </AnchorLink>

            <AnchorLink
              to="#e-commerce"
              className="cardCategory cardSpacing--Medium"
            >
              E-Commerce
              <div className="categoryIcon">
                <CategoryEcomIcon />
              </div>
            </AnchorLink>
          </section>
          <section className="contentContainer section">
            <div className="anchor" id="enablingTeams"></div>
            <div className="width--full sectionTitleWrapper">
              <div className="categoryIconTitle">
                <CategoryTeamIcon />
              </div>
              <h2 className="sectionTitle">Enabling People</h2>
            </div>

            <div className="referenceCard width--half">
              <picture className="referenceImg">
                <img
                  src={meetings}
                  alt="Complex flowchart with various categories including 'Readme & Overview', 'User Changeable', 'Groups/Categories', 'Access Level', 'Where to Save/Persist?', and 'Share with colleagues'. The chart features colored sticky notes in yellow, green, purple, and blue, organized in columns, with descriptive text and arrows indicating relationships and processes."
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">
                    Doing effective Sessions & Meetings
                  </h3>
                  <p className="cardText">
                    I embrace visualisation to overcome the inefficiencies of
                    traditional meetings, therefore, I use tools such as Miro,
                    Mural, and FigJam for more effective and inclusive sessions.
                    I focus on techniques for conducting meetings and teamwork,
                    such as affinity mapping, user story/flow mapping, which are
                    suitable for different working environments. My focus is on
                    ensuring inclusivity and streamlined communication,
                    essential in today's diverse and evolving workplaces.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://ckblog.framer.website/blog/doing-sessions-instead-of-meetings"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            </div>

            <div className="referenceCard width--half">
              <picture className="referenceImg">
                <img
                  src={uxmaturity}
                  alt="A flowchart diagram illustrating the UX design process, with 'UX Design' at the center connected to various stages such as 'Requirements', 'Research', 'Personas', 'Scenarios', 'Development', 'User testing', 'UX Writer', 'Wireframes', and 'Visual design'. The connections indicate the workflow between each stage."
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">
                    Process optimization to deliver a better user experience
                  </h3>
                  <p className="cardText">
                    The landscape of product development is always shifting,
                    emphasizing the importance of teamwork, version management,
                    and the ability to scale effectively for an enhanced user
                    experience. In response, I have taken the lead in
                    implementing new tools across companies to address these
                    pivotal aspects.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://www.chrono24.net/prozessoptimierung-fuer-eine-bessere-user-experience/"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            </div>

            <div className="referenceCard width--full">
              <picture className="referenceImg">
                <img
                  src={uxfreiburg}
                  alt="Graphic banner for UX Freiburg, the official German UPA regional group, featuring a whimsical unicorn mascot next to the bold text 'UX Freiburg'. The background displays a muted illustration of the Freiburg cityscape with landmarks, under a light sky with clouds. The German UPA logo is positioned in the bottom right corner"
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">
                    UX Meetup & German UPA regional group Freiburg
                  </h3>
                  <p className="cardText">
                    As passionate UX professionals, my former colleagues and I
                    created the UX Freiburg Community. Our group consists of
                    various UX professionals who are committed to facilitating
                    open dialog and learning and making it accessible to anyone
                    interested in the field of UX.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://uxfreiburg.de/"
                  >
                    Visit UX Freiburg.de
                  </a>
                </div>
              </Card>
            </div>
          </section>

          <section className="contentContainer section">
            <div className="anchor" id="designsystems"></div>
            <div className="width--full sectionTitleWrapper">
              <div className="categoryIconTitle">
                <CategoryDesignSystemIcon />
              </div>
              <h2 className="sectionTitle">Design Systems</h2>
            </div>

            <div className="referenceCard width--full">
              <picture className="referenceImg">
                <img src={designsystem} alt="Abunandita Logo"></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">Abundantia</h3>
                  <p className="cardText">
                    As Lead of Abundantia, a financial design system, I oversee
                    its development, focusing on user experience,
                    standardization, and functionality. Abundantia includes
                    diverse UI tools and adheres to industry best practices. My
                    role is to ensure the project delivers an inclusive,
                    efficient, and user-friendly system.
                  </p>
                </div>
              </Card>
            </div>
          </section>
          <section className="contentContainer section">
            <div className="anchor" id="finance"></div>
            <div className="width--full sectionTitleWrapper">
              <div className="categoryIconTitle">
                <CategoryFinanceIcon />
              </div>
              <h2 className="sectionTitle">Finance</h2>
            </div>

            <div className="referenceCard width--half">
              <picture className="referenceImg">
                <img
                  src={niiio}
                  alt="Close-up of a Rolex Submariner wristwatch featuring a black dial."
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">Niiio</h3>
                  <p className="cardText">
                    Tasked with building our design team from the ground up, I
                    manage the harmonization of design standards across our
                    growing portfolio, particularly focusing on integrating
                    designs from recent acquisitions. In partnership with
                    product owners and management, I'm steering our projects
                    towards a unified and innovative user interface.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://niiio.finance/"
                  >
                    Visit Niiio.finance
                  </a>
                </div>
              </Card>
            </div>

            <div className="referenceCard width--half">
              <picture className="referenceImg">
                <img
                  src={patronas}
                  alt="A panoramic view of the SC Freiburg stadium."
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">Patronas</h3>
                  <p className="cardText">
                    Establishing UX within the company and transfering a rich
                    client platform to the web. Also introducing new tools and
                    workflows to enable and work more cooperatively with our
                    colleagues and cross-functional teams together.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://www.patronas.com/"
                  >
                    Visit Patronas.de
                  </a>
                </div>
              </Card>
            </div>
          </section>

          <section className="contentContainer section">
            <div className="anchor" id="e-commerce"></div>
            <div className="width--full sectionTitleWrapper">
              <div className="categoryIconTitle">
                <CategoryEcomIcon />
              </div>
              <h2 className="sectionTitle">E-Commerce</h2>
            </div>

            <div className="referenceCard width--half">
              <picture className="referenceImg">
                <img
                  src={chrono24}
                  alt="Close-up of a Rolex Submariner wristwatch featuring a black dial."
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">Luxury watches</h3>
                  <p className="cardText">
                    A newly formed senior team at a new location, we were
                    responsible for delivering high-quality services to VIP
                    clients. I also led the introduction of Figma, which has
                    empowered our UX team to develop and implement new and
                    effective processes and workflows that will ultimately
                    contribute to an improved user experience within the
                    products. These advances will also play an important role in
                    the upcoming IPO, enabling the team to be more agile in the
                    face of market changes.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://www.chrono24.net/prozessoptimierung-fuer-eine-bessere-user-experience/"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            </div>

            <div className="referenceCard width--half">
              <picture className="referenceImg">
                <img
                  src={reservix}
                  alt="A panoramic view of the SC Freiburg stadium."
                ></img>
              </picture>
              <Card className="cardSpacing--Large referenceCardWrapper">
                <div className="referenceCardContent">
                  <h3 className="title--L">Ticketing & Resale</h3>
                  <p className="cardText">
                    As the Design Lead for the Portal team, I managed over 3,000
                    white-label ticketing web shops and supported multiple
                    product teams. As a web and mobile application designer, I
                    have developed both consumer and enterprise products. I also
                    led the design of the secondary ticketing marketplace for
                    the 1st Bundesliga. I additionally managed the
                    implementation of a location-wide software stack for the
                    design team.
                  </p>
                  <a
                    className="textLink--medium textWeight--bold"
                    href="https://www.reservix.net/"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8"></meta>
    <html lang="en" />
    <title>Chris Kuhrt</title>
    <meta
      name="description"
      content="Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. 
      I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."
    />
  </>
);
