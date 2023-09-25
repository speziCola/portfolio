import React, { useState, useEffect } from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import "../styles/foundation.css";
import "../styles/baseTemplateB.css";
import "../styles/timeline.css";

import Accordion from "../components/accordion/accordion";
import Header from "../components/header/header";
import GridLines from "../components/gridlines/gridLines";
import Links from "../components/links/links";
import Card from "../components/card/card";

const Timeline: React.FC<PageProps> = () => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const className = "scrollTopActive";
    const scrollTrigger = 120;

    const handleScroll = () => {
      if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        document.querySelector(".scrollTop").classList.add(className);
      } else {
        document.querySelector(".scrollTop").classList.remove(className);
      }

      const middle = window.innerHeight / 2;
      let found = false;

      const sections = document.querySelectorAll(".accordion > *");
      const lastSection = sections[sections.length - 1];

      // check if page is scrolled to the top
      if (window.scrollY === 0) {
        if (activeLink) activeLink.classList.remove("active");
        setActiveLink(null);
        return;
      }

      // check if page is scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const lastActiveLink = document.querySelector(
          '.anchorTimeline a[href="#' + lastSection.id + '"]'
        );
        if (activeLink !== lastActiveLink) {
          if (activeLink) activeLink.classList.remove("active");
          if (lastActiveLink) lastActiveLink.classList.add("active");
          setActiveLink(lastActiveLink);
        }
        return;
      }

      sections.forEach((section) => {
        if (found) return;
        const top = section.getBoundingClientRect().top;
        const bottom = top + section.offsetHeight;

        if (middle >= top && middle <= bottom) {
          found = true;
          const newActiveLink = document.querySelector(
            '.anchorTimeline a[href="#' + section.id + '"]'
          );
          if (newActiveLink) {
            if (activeLink !== newActiveLink) {
              if (activeLink) activeLink.classList.remove("active");
              newActiveLink.classList.add("active");
              setActiveLink(newActiveLink);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <div className="gridContainer">
      <GridLines />
      <Header />
      <main className="gridWrapper">
        <div id="pageTop"></div>
        <div className="mainContainer TemplateB">
          <h1>Timeline</h1>
          <p className="timeLineIntro textIntro">
            I am filled with gratitude for every experience. Each one has helped
            shape the designer I am today and I look forward to the next chapter
            of this ever-evolving journey.
          </p>
          <aside>
            <div className="timelineMenu">
              <Card pattern="Pattern01">
                <div className="timelineMenuStyle"></div>
                <ul className="anchorTimeline">
                  <li>
                    <a href="#workExperince">Work experince</a>
                  </li>
                  <li>
                    <a href="#sideProjects">Passion & Projects</a>
                  </li>
                  <li>
                    <a href="#freelancer">Freelancer</a>
                  </li>
                  <li>
                    <a href="#furtherEducation">Further education</a>
                  </li>
                  <li>
                    <a href="#volunteerWork">Volunteer work</a>
                  </li>
                  <li>
                    <a href="#backer">Backer</a>
                  </li>
                  <li>
                    <a href="#gaming">Gaming</a>
                  </li>
                  <li>
                    <a className="scrollTop" href="#pageTop">
                      Scroll to top
                    </a>
                  </li>
                </ul>
              </Card>
            </div>
          </aside>
          <section className="accordion">
            <Accordion
              id="workExperince"
              buttonText="💼 Work experince"
              openOnMobile={true}
            >
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">02/2022</span>
                    <h3 className="timelineCompany">Patronas</h3>
                    <h4 className="timelineTitle">Product Design</h4>
                    <p className="timelineText">
                      Establishing UX within the company and transfering a rich
                      client platform to the web. Also introducing new tools and
                      workflows to enable and work more cooperatively with our
                      colleagues and cross-functional teams together.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">11/2020 - 01/2022</span>
                    <h3 className="timelineCompany">Chrono24</h3>
                    <h4 className="timelineTitle">UX/UI Design</h4>
                    <p className="timelineText">
                      As a member of a newly formed senior team, our primary
                      responsibility was to provide first-class service to VIPs
                      customers. My further responsibilities and achievements
                      included:
                      <ul>
                      <li>
                        Leading Figma Roll-Out: I was in leading the
                        introduction of Figma for the whole team.
                      </li>
                      <li>
                        Designen a new customer login: I conducted research and
                        developed concepts for a new login interface. Its
                        implementation resulted in a conversion rate increase of
                        up to 12%.
                      </li>
                      <li>
                        Creating the basis for the design system: I worked with
                        another designer. another designer, working closely with
                        the front-end team to create the foundations of the
                        design system.
                      </li>
                      <li>
                        Harmonizing Web & App UX/UI: In collaboration with a
                        designer from the App Team, we harmonized the user
                        experience and user interface across web and mobile
                        applications.
                      </li>
                      </ul>
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">06/2015 – 08/2020</span>
                    <h3 className="timelineCompany">Reservix</h3>
                    <h4 className="timelineTitle">UX/UI Design</h4>
                    <p className="timelineText">
                      I was responsible for UX/UI in the portal team that
                      managed over 3000 white label web shops and supported
                      various teams across web, app, B2C, B2B and products. My
                      primary responsibilities and outcomes were:
                      <ul>
                        <li>Gathering requirements and creating prototypes.</li>
                        <li>Creating the foundations for a design system.</li>
                        <li>
                          Replacing the previously implemented software stack
                          (Sketch, Adobe XD, Zeplin and Abstract) with Figma.
                        </li>
                        <li>
                          Designing the ticket resale process for the 1st
                          Bundesliga.
                        </li>
                        <li>Increasing ticket insurance sales by up to 7%.</li>
                        <li>
                          Improve the seating plan to ensure modularity and
                          flexibility according to the needs of the organiser.
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">01/2009 - 02/2009</span>
                    <h3 className="timelineCompany">Platformsixproduction</h3>
                    <h4 className="timelineTitle">Web Design, Photography</h4>
                    <p className="timelineText">
                      Brisbane, Australia: Using Photoshop, I modified and
                      enhanced fashion, people and lifestyle pictures. I was
                      also responsible for maintaining the in-house customer
                      management system.
                    </p>
                  </li>
                </ul>
              }
            </Accordion>

            <div className="timeLineDevider"></div>

            <Accordion id="sideProjects" buttonText="❤️ Passion & Projects">
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">03/2021</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links to="http://uxfreiburg.de/" aria="uxfreiburg.de">
                        Freiburger UX Community - German UPA
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Co-founder</h4>
                    <p className="timelineText">
                      Our initial mission was straightforward: share UX insights
                      with like-minded peers. This endeavor eventually led to
                      the founding of the German UPA regional group in Freiburg.
                      Since then, we've launched an official website, wiki, and
                      Discord server, creating a vibrant community where members
                      collaborate, exchange insights, and provide mutual support
                      in the realm of UX. A significant portion of the credit
                      for our Discord server's notable growth goes to my
                      dedicated co-founders, Laura and Miri.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">12/2022</span>
                    <h3 className="timelineCompany">
                      <Links to="http://pixelbricks.de/" aria="pixelbricks.de">
                        Figma Plugin: Pixelbricks
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Product Designer</h4>
                    <p className="timelineText">
                      Pixelbricks is a Figma plugin that allows you to transform
                      your pixel art into Lego and order them via BrickLink. I
                      always find it exciting to combine digital and analogue. I
                      aimed to manage the entire process, from start to finish.
                      This included overseeing the plugin, Figma files,
                      homepage, FAQs, and Instagram - every part that makes a
                      good product complete. Thanks to{" "}
                      <Link to="https://twitter.com/mariusbethge" aria="marius">
                        Marius
                      </Link>{" "}
                      for the coding.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">01/2020 - 11/2020</span>
                    <h3 className="timelineCompany">Hammertime</h3>
                    <h4 className="timelineTitle">Product Design</h4>
                    <p className="timelineText">
                      Redesigned our website, elevated the standards, and
                      presented our product compellingly, leading our efforts in
                      customer acquisition. Our success against the competition
                      earned us a wildcard from Baden-Campus, a start-up
                      accelerator. This allowed us to attend the valuable
                      workshops they offer.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">03/2015 - 04/2021</span>
                    <h3 className="timelineCompany">
                      Frau Skroblies & Freunde
                    </h3>
                    <h4 className="timelineTitle">Cinematography</h4>
                    <p className="timelineText">
                      Producing, shooting, and editing wedding films, I also
                      lent a hand with technical aspects when needed. The role
                      demands meticulous and swift workmanship. There's
                      absolutely no room for error at any stage.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">05/2012</span>
                    <h3 className="timelineCompany">
                      <Links
                        to="https://steamcalculator.com/"
                        aria="steamcalculator.com"
                      >
                        SteamCalculator
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">UX/UI, Frontend</h4>
                    <p className="timelineText">
                      Creating the designs and utilized the project as an
                      opportunity to acquaint myself with new technologies,
                      diving into some frontend coding in the process. The
                      significant popularity the application garnered enabled me
                      to base my Bachelor's thesis* on it. *Title: Online Gaming
                      Self-Efficacy: Designing Personalized Data Visualizations
                      as Marketing Instruments for a Gaming Community.
                    </p>
                  </li>
                </ul>
              }
            </Accordion>

            <div className="timeLineDevider"></div>

            <Accordion id="freelancer" buttonText="💻 Freelancer">
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">06/2015 - 10/2020</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links to="https://www.geospin.de/" aria="geospin.de">
                        GeoSpin
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Product Desgin</h4>
                    <p className="timelineText">
                      As a product design consultant, I not only designed the
                      homepage but also established a comprehensive corporate
                      design. Using the given basic color as a foundation, I
                      developed a style guide to ensure consistency.
                      Additionally, I implemented a CMS using Docker to
                      streamline content management.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">04/2015 – 05/2015</span>
                    <h3 className="timelineCompany">
                      IPB - Ingenieurbüro für Projektentwicklung
                    </h3>
                    <h4 className="timelineTitle">Product Design</h4>
                    <p className="timelineText">
                      I conceptualized and designed a logo for the company and
                      subsequently extended the design to create a cohesive set
                      of company stationery, ensuring brand consistency
                      throughout.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">02/2015 – 05/2015</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links
                        to="http://www.herlyn-konsens.de/"
                        aria="herlyn-konsens.de"
                      >
                        Herlyn-konsens
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Webdesign</h4>
                    <p className="timelineText">
                      While designing the homepage, I also customized a
                      WordPress theme tailored to my client's branding and
                      specific requirements.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">02/2013 – 04/2013</span>
                    <h3 className="timelineCompany">
                      <Links
                        to="http://www.physiologikum.de/"
                        aria="physiologikum.de"
                      >
                        Physiologikum Mengeringhausen
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Web, Print & Photography</h4>
                    <p className="timelineText">
                      Along with designing and implementing the homepage, I also
                      designed the company's stationery, which included
                      letterheads, appointment reminder cards, and marketing
                      brochures.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">05/2012 – 07/2012</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links to="https://www.sunzinet.com/" aria="sunzinet.com">
                        sunzinet
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Webdesign</h4>
                    <p className="timelineText">
                      Collaborated directly with the Creative Art Director to
                      transform a design concept into a responsive webpage.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">03/2011 – 05/2011</span>
                    <h3 className="timelineCompany">Torsten Ulrich Galts</h3>
                    <h4 className="timelineTitle">Webdesign</h4>
                    <p className="timelineText">
                      Creating a portfolio showcasing fashion design photographs
                      for a renowned European photographer.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">02/2011 – 05/2011</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links
                        to="https://kunstlicht.de/ueber-uns/"
                        aria="kunstlicht.de"
                      >
                        Kunstlicht
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Cinematography</h4>
                    <p className="timelineText">
                      Alongside a colleague, I directed, shot, and edited a
                      corporate video for Kunstlicht, a premium interior
                      lighting design firm. We collaborated on this project,
                      managing it independently and delivering it ahead of the
                      scheduled timeline.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">03/2010 – 03/2010</span>
                    <h3 className="timelineCompany">newCasa</h3>
                    <h4 className="timelineTitle">Print, Photography</h4>
                    <p className="timelineText">
                      Designed the company stationery like letterhead and
                      business cards.
                    </p>
                  </li>
                </ul>
              }
            </Accordion>

            <div className="timeLineDevider"></div>

            <Accordion id="furtherEducation" buttonText="🎓 Further education">
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">07/2023</span>
                    <h3 className="timelineCompany">Nielsen Norman Group</h3>
                    <h4 className="timelineTitle">Workshop</h4>
                    <p className="timelineText">
                      Becoming a UX Strategist, with Nancy Dickenson.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2022 - 10/2022</span>
                    <h3 className="timelineCompany">Smashing</h3>
                    <h4 className="timelineTitle">Workshop</h4>
                    <p className="timelineText">
                      Interface Design Patterns UX Training, with Vitaly
                      Friedman.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">05/2021 - 06/2021</span>
                    <h3 className="timelineCompany">Product Discovery</h3>
                    <h4 className="timelineTitle">Coaching</h4>
                    <p className="timelineText">
                      Tim Herbig's Product Discovery Coaching provides
                      continuous, hands-on support for product teams, guiding
                      them in understanding the Problem and Solution Space.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">03/2021</span>
                    <h3 className="timelineCompany">SmashingConf</h3>
                    <h4 className="timelineTitle">Workshop</h4>
                    <p className="timelineText">
                      Creating and Maintaining Successful Design Systems, with
                      Brad Frost.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">12/2019</span>
                    <h3 className="timelineCompany">Udemy</h3>
                    <h4 className="timelineTitle">Online-Learning</h4>
                    <p className="timelineText">JavaScript, jQuery, node.js</p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2019</span>
                    <h3 className="timelineCompany">
                      Design Sprint Masterclass
                    </h3>
                    <h4 className="timelineTitle">Online-Learning</h4>
                    <p className="timelineText">
                      Masterclass with Jake Knapp and Jonathan Courtney:
                      Steering Teams to Conceptualize and Validate New Products
                      in only 4 Days.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">04/2019</span>
                    <h3 className="timelineCompany">
                      Ticketing Business Forum
                    </h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      Showcasing the future of live entertainment ticketing. -
                      Manchester UK
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">03/2019</span>
                    <h3 className="timelineCompany">Internet World Expo</h3>
                    <h4 className="timelineTitle">E-Commerce Fair</h4>
                    <p className="timelineText">
                      The commerce e-xperience 2019. - Munich
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">12/2018</span>
                    <h3 className="timelineCompany">Udacity</h3>
                    <h4 className="timelineTitle">Online-Learning</h4>
                    <p className="timelineText">
                      Product Design: Ideation & Validation, UX/UI, Design
                      Sprint, Key Metrics.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">10/2018</span>
                    <h3 className="timelineCompany">
                      Communication, Cooperation, Coordination
                    </h3>
                    <h4 className="timelineTitle">Workshop</h4>
                    <p className="timelineText">
                      Learning different types of conversation techniques. –
                      Freiburg
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2018</span>
                    <h3 className="timelineCompany">SmashingConf</h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      Focused on real-world problems and solutions. Covering
                      everything web relevant. Like front-end, UX/UI design or
                      machine learning. – Freiburg
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">03/2018</span>
                    <h3 className="timelineCompany">Google</h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      Progressive Web Apps Roadshow. – London
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">12/2017</span>
                    <h3 className="timelineCompany">CodeSchool</h3>
                    <h4 className="timelineTitle">Online-Learning</h4>
                    <p className="timelineText">HTML & CSS – Master Status.</p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2017</span>
                    <h3 className="timelineCompany">SmashingConf</h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      Solve real-life design problems and what workflow we are
                      using to solve them intelligently. – Freiburg
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">08/2017</span>
                    <h3 className="timelineCompany">Google</h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      Polymer Summit 2017. – Copenhagen
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">05/2017</span>
                    <h3 className="timelineCompany">Google</h3>
                    <h4 className="timelineTitle">Online-Learning</h4>
                    <p className="timelineText">
                      The Digital Garage: Online Marketing
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2016</span>
                    <h3 className="timelineCompany">SmashingConf</h3>
                    <h4 className="timelineTitle">Workshop</h4>
                    <p className="timelineText">
                      Scalable Design Systems, with Nathan Curtis. – Freiburg
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">05/2016</span>
                    <h3 className="timelineCompany">Facebook</h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      The event covered topics around digitalisation, especially
                      in the area of "online" and "mobile". In a discussion,
                      regional companies reported on their experiences with
                      Facebook and emphasised the increasing usage time by
                      users. – Freiburg
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">05/2016</span>
                    <h3 className="timelineCompany">re-lounge</h3>
                    <h4 className="timelineTitle">Talk</h4>
                    <p className="timelineText">
                      How to use online marketing to not only reach your
                      customers, but also understand. – Freiburg
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">06/2016</span>
                    <h3 className="timelineCompany">IA Konferenz 2016</h3>
                    <h4 className="timelineTitle">Conference</h4>
                    <p className="timelineText">
                      The IA Conference is the annual gathering of the
                      German-speaking IA and UX community, which includes
                      information architects, conceptual designers, UX
                      designers, usability engineers, product managers, service
                      designers and service providers. Topic "Vision. Strategy.
                      Product.". – Berlin
                    </p>
                  </li>
                </ul>
              }
            </Accordion>

            <div className="timeLineDevider"></div>

            <Accordion id="volunteerWork" buttonText="🏅 Volunteer work">
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">03/2017</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links
                        to="https://haus-des-engagements.de/"
                        aria="haus-des-engagements.de"
                      >
                        Haus des Engagements
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Corporate Design</h4>
                    <p className="timelineText">
                      I developed a small style guide, offering logo designs and
                      defining corporate colors.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">02/2012 – 02/2013</span>
                    <h3 className="timelineCompany">
                      <Links
                        to="https://vimeo.com/64133805"
                        aria="PHoS Imagefilm"
                      >
                        Palliatives Hospiz Solingen
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Cinematography</h4>
                    <p className="timelineText">
                      I worked on filming and editing a corporate video for PHoS
                      – Palliatives Hospiz Solingen, a nonprofit end-of-life
                      care organization. This promotional film was incorporated
                      into my friend's bachelor thesis.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">
                      07/2007, 06/2006, 06/2005
                    </span>
                    <h3 className="timelineCompany">Caritas</h3>
                    <h4 className="timelineTitle">Child carer</h4>
                    <p className="timelineText">
                      During my summer break, I organized and led day trips for
                      socially underprivileged children, providing them with
                      both work and play opportunities.
                    </p>
                  </li>
                </ul>
              }
            </Accordion>

            <div className="timeLineDevider"></div>

            <Accordion id="backer" buttonText="💰 Backer">
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">05/2018</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links
                        to="https://www.indiegogo.com/projects/anvanda-a-great-f-cking-bag#/"
                        aria="Använda. A Great F*cking Bag."
                      >
                        Använda
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Fashion & Design</h4>
                    <p className="timelineText">
                      Använda – „A Great F*cking Bag.“ Just a cool looking bag.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">10/2016</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links to="https://subformapp.com/" aria="subformapp">
                        Subform
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Software & Design</h4>
                    <p className="timelineText">
                      A tool for digital designers, where dynamic layouts merge
                      with direct code manipulation.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2015</span>
                    <h3 className="timelineCompany">
                      <Links
                        to="https://www.kickstarter.com/projects/thestandardsmanual/reissue-of-the-1975-nasa-graphics-standards-manual"
                        aria="Reissue of the 1975 NASA Graphics Standards Manual"
                      >
                        Reissue of the 1975 NASA Graphics Standards Manual
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Design</h4>
                    <p className="timelineText">
                      This Kickstarter campaign honors the legacy of Danne and
                      Blackburn. Revived 41 years post-design and 23 years after
                      its disappearance.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">08/2015</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links
                        to="https://www.kickstarter.com/projects/megabots/support-team-usa-in-the-giant-robot-duel"
                        aria="Mega Bot"
                      >
                        MegaBots
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Tech</h4>
                    <p className="timelineText">
                      Support Team USA in the Giant Robot Duel: They challenged
                      Japan to a massive robot duel. Japan accepted with the
                      condition of hand-to-hand combat. They've rallied a
                      formidable team to upgrade the Mk.II for this monumental
                      showdown and needed support for the improvements.
                    </p>
                  </li>
                </ul>
              }
            </Accordion>

            <div className="timeLineDevider"></div>

            <Accordion id="gaming" buttonText="🕹️ Gaming">
              {
                <ul className="timelineWrapper">
                  <li className="timelineList">
                    <span className="timelineDate">08/2004</span>
                    <h3 className="timelineCompany">ThW Mapping Contest</h3>
                    <h4 className="timelineTitle">Organisator</h4>
                    <p className="timelineText">
                      My brother and I initiated a Half-Life deathmatch remake
                      mapping contest for the thewall.de community, which was
                      the leading German Half-Life mapping community of its
                      time.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">07/2004</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links
                        to="https://killbox.spike-fx.net/home.html"
                        aria="Kill-Box Mod"
                      >
                        Killbox Mod
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Level Design</h4>
                    <p className="timelineText">
                      During a LAN-Party, we developed v1.0 in 17 hours.
                      Additionally, a mapping contest was held where my map was
                      awarded the second place.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">09/2002</span>
                    <h3 className="timelineCompany">
                      PC Action Counter-Strike Special-Edition
                    </h3>
                    <h4 className="timelineTitle">Level Design</h4>
                    <p className="timelineText">
                      Winning a mapping contest for an exclusive Counter-Strike
                      map pack. The exclusive-pack also is known as “best of
                      german speaking Mapper”-pack was organized by the Clan00
                      map-forum in collaboration with the PC Action magazine.
                      The pack contained 12 premium maps.
                    </p>
                  </li>
                  <li className="timelineList">
                    <span className="timelineDate">06/2001</span>
                    <h3 className="timelineCompany">
                      {" "}
                      <Links to="https://spezi-clan.com/" aria="spezi-clan">
                        spezi-clan
                      </Links>
                    </h3>
                    <h4 className="timelineTitle">Co-Clanleader, Wedbdesign</h4>
                    <p className="timelineText">
                      As a co-clan leader, I organized clan wars, spearheaded
                      training sessions, and supervised our gaming server,
                      ensuring strategic advantages and among our members. Or
                      tested selfmade aim maps on our gaming server.
                    </p>
                  </li>
                </ul>
              }
            </Accordion>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Timeline;

export const Head: HeadFC = () => (
  <>
  <meta charSet="UTF-8"></meta>
  <html lang="en" />
  <title>Timeline</title>
  <meta
      name="description"
      content="Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."
    />
  
  </>
) ;

