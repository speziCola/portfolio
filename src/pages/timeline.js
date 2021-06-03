import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import TimeStamp from "../components/timestamp";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Timeline = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Timeline"
      meta={[
        { name: "description", content: "Timeline" },
        { name: "keywords", content: "Timeline" },
      ]}
    />
    <Navbar></Navbar>
    {/* Header */}
    <header>
      <h1 className="title-1">Timeline</h1>
    </header>
    {/* Content */}
    <div className="container">
      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Work experince</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="11/2020"
                title="Chrono24"
                type="UX/UI Design"
                link="external"
                url="https://about.chrono24.com/en/"
                infos="
                  Setting up a new location within Freiburg. Our team is responsible for: first class service & VIPs.
                  My tasks are among others the following: web & app alignment, initiator to improve the software stack due to changing workflows,
                  laying down a foundation for our Design System. 
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="06/2015 - 08/2020"
                title="Reservix"
                type="UX/UI Design"
                link="external"
                url="https://www.reservix.net/"
                infos="
                Working on web, app, B2C, B2B, consumer and enterprise products. 
                Responsible for the UX/UI within the Portal team witch managed all 
                white-lable webshops (+3000). As well as supporting various teams. 
                My tasks were among others the following: raise requirements, 
                create prototypes, laying the foundation for a Design System, 
                introduction of a cross-site software stack for better collaboration 
                within the design team, founder of labs.reservix.de which is now 
                maintained by a student worker.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="01/2009 - 02/2009"
                title="Platformsixproduction"
                type="Web Design, Photography"
                url=""
                infos="
                  Brisbane, Australia:
                  Using Photoshop, I modified and enhanced fashion, people and lifestyle pictures. I was also responsible for maintaining the
                  in-house customer management system.
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1"></div>

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Part of the team</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="01/2020 - 11/2020"
                title="Hammertime"
                type="Product Design"
                link="external"
                url="https://www.hammertime.io/"
                infos="
                   Redesigned our homepage, raised requirements, pitched our product and did customer acquisition. 
                  "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="03/2015 - 04/2021"
                title="Frau Skroblies & Freunde"
                type="Cinematography"
                link="external"
                url="https://www.frau-skroblies.com/"
                infos="
                  Staging, filming and editing wedding movies. The job requires me to work precisely and fast. Failure at any time is
                  definitely not an option.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="05/2012"
                title="SteamCalculator"
                type="UX/UI, Frontend"
                link="external"
                url="https://steamcalculator.com/"
                infos="
                Creating the designs and using the project to learn new technologies. Also to do some frontend coding.
                Due to the immense popularity of the application I was able to write my Bachelor thesis* about it.
                *Title: Self-efficacy in online gaming: Conception of a personalized data visualization as a marketing tool
                for a game community."
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1"></div>

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Freelancer</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="06/2015 - 10/2020"
                title="GeoSpin"
                type="Product Desgin"
                link="external"
                url="https://www.geospin.de"
                infos="
                  Product design consultant. Also created a Corporate Design and implemented a CMS with docker.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="04/2015 – 05/2015"
                title="IPB - Ingenieurbüro für Projektentwicklung"
                type="Logo, Print"
                infos="
                Designed a logo and thier company stationery.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="02/2015 – 05/2015"
                title="Herlyn-konsens"
                type="Webdesign"
                link="external"
                url="http://www.herlyn-konsens.de/"
                infos="
                  Customizing a WordPress theme for my client needs in consideration of his branding.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="02/2013 – 04/2013"
                title="Physiologikum Mengeringhausen"
                type="Web, Print & Photography"
                link="external"
                url="http://www.physiologikum.de/"
                infos="
                  Designed the company stationery including letterhead, appointment reminder cards and marketing brochures.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="05/2012 – 07/2012"
                title="sunzinet"
                type="Webdesign"
                link="external"
                url="https://www.sunzinet.com/"
                infos="
                  Worked independently with the Creative Art Director and interpreted a design concept to deliver a
                  responsive webpage.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="03/2011 – 05/2011"
                title="Torsten Ulrich Galts"
                type="Webdesign"
                url=""
                infos="
                  Setting up a portfolio of fashion design photo works for a highly successful European photographer.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="02/2011 – 05/2011"
                title="Kunstlicht"
                type="Cinematography"
                link="external"
                url="https://kunstlicht.de/ueber-uns/"
                infos="
                    Staging, filming and editing a corporate video for Kunstlicht - an exclusive interior lighting design company.
                    This assignment required me to work independently and the product was delivered under the budgeted timeline.
                  "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="03/2010 – 03/2010"
                title="newCasa"
                type="Print, Photography"
                url=""
                infos="
                  Designed the company stationery like letterhead and business cards.
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1 "></div>

      {/*  <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Projects</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="04/2018"
                title="Wally"
                type="Concept"
                link="external"
                url="https://github.com/spezifanta/wally"
                infos="
                    Having two spare computer screens I additionally bought two raspberry pi's. The goal was building a dashboard displaying the weather forecast and the tramp times.
                  "
              ></TimeStamp>
            </li>

          </ul>
        </div>
      </div>

      <div className="spacer-1 "></div> */}

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Further education</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
          <li>
              <TimeStamp
                time="03/2021"
                title="SmashingConf"
                type="Workshop"
                url=""
                infos="
                 Creating and Maintaining Successful Design Systems - Remote
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="12/2019"
                title="Udemy"
                type="Online-Learning"
                url=""
                infos="
                 JavaScript, jQuery, node.js
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="09/2019"
                title="Design Sprint Masterclass"
                type="Online-Learning"
                url=""
                infos="
                  Leading a team to create and test new product concpets in only 4 days.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="04/2019"
                title="Ticketing Business Forum"
                type="Conference"
                url=""
                infos="
                  Showcasing the future of live entertainment ticketing.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="03/2019"
                title="INTERNET WORLD EXPO"
                type="E-Commerce Fair"
                url=""
                infos="
                  The commerce e-xperience 2019.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="12/2018"
                title="Udacity"
                type="Online-Learning"
                url=""
                infos="
                  Product Design: Ideation & Validation, UX/UI, Design Sprint, Key Metrics.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="10/2018"
                title="Communication, Cooperation, Coordination"
                type="Workshop"
                url=""
                infos="
                  Learning different types of conversation techniques. – Freiburg
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="09/2018"
                title="SmashingConf"
                type="Conference"
                url=""
                infos="
                  Focused on real-world problems and solutions. Covering everything web relevant. Like front-end, UX/UI design or machine learning. – Freiburg
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="03/2018"
                title="Google"
                type="Workshop"
                url=""
                infos="
                  Progressive Web Apps Roadshow. – London
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="12/2017"
                title="CodeSchool"
                type="Online-Learning"
                url=""
                infos="
                  HTML & CSS – Master Status
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="09/2017"
                title="SmashingConf"
                type="Conference"
                url=""
                infos="
                  Solve real-life design problems and what workflow we are using to solve them intelligently. – Freiburg
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="08/2017"
                title="Google"
                type="Conference"
                url=""
                infos="
                  Polymer Summit 2017. – Copenhagen
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="05/2017"
                title="Google"
                type="Online-Learning"
                url=""
                infos="
                  The Digital Garage. – Online Marketing
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="09/2016"
                title="SmashingConf"
                type="Workshop"
                url=""
                infos="
                  Solve real-life design problems and what workflow we are using to solve them intelligently. – Freiburg
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="05/2016"
                title="Facebook"
                type="Conference"
                url=""
                infos="
                  Digital Durchstarten. – Freiburg
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="05/2016"
                title="re-lounge"
                type="Talk"
                url=""
                infos="
                  Wie Sie mit Online-Marketing Ihre Kunden nicht nur erreichen, sondern auch verstehen. – Freiburg
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="06/2016"
                title="IA Konferenz 2016"
                type="Conference"
                url=""
                infos="
                  Die Konzepter-Konferenz. – Berlin
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1 "></div>

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Education</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="01/2010 – 01/2013"
                title="Rheinische Fachhochschule – RFH"
                type="Media design B.A."
                url=""
                infos=""
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="08/1999 – 05/2008"
                title="Emsland-Gymnasium"
                type="High-school diploma"
                url=""
                infos=""
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1 "></div>

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Volunteer work</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="03/2017"
                title="Haus des Engagements"
                type="Corporate Design"
                link="external"
                url="https://haus-des-engagements.de/"
                infos="
                  Providing logo and corporate colors.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="02/2012 – 02/2013"
                title="Palliatives Hospiz Solingen"
                type="Cinematography"
                link="external"
                url="https://vimeo.com/64133805"
                infos="
                Filming and editing a corporate video for PHoS – Palliatives Hospiz Solingen – a nonprofit terminal care organization.
                This image film was a part of my friend’s bachelor thesis.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="07/2007, 06/2006, 06/2005"
                title="Caritas"
                type="Child carer"
                link="external"
                url="https://www.caritas-rheine.de/hilfeundberatung/kinderjugendlicheundfamilien/kinderjugendundfamilienberatung/jugendberatung/stadtranderholung/stadtranderholung"
                infos="
                  Working and playing with socially underprivileged children by planning and organizing day trips.
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1 "></div>
      {/*
        <div className="container-timeline__wrapper">
          <div className="container-timeline__wrapper__title">
            <h2>Travel</h2>
          </div>
          <div className="container-timeline__wrapper__timestamp">
            <ul className="ck-skill-list">
              <li>
                <TimeStamp time="06/2013 – 06/2014" title="Canada" type="Backpacker" url="" infos=""></TimeStamp>
              </li>
              <li>
                <TimeStamp time="10/2008 – 08/2009" title="Australia" type="Backpacker" url="" infos=""></TimeStamp>
              </li>
            </ul>
          </div>
        </div>

        <div className="spacer-1 "></div> */}

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Backer</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="05/2018"
                title="Använda"
                type="Fashion & Design"
                link="external"
                url="https://www.indiegogo.com/projects/anvanda-a-great-f-cking-bag#/"
                infos="
                  Använda – „A Great F*cking Bag.“ Just a cool looking bag.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="10/2016"
                title="Subform"
                type="Software & Design"
                link="external"
                url="https://subformapp.com/"
                infos="
                A modern tool for digital product designers. The dynamic layout meets direct manipulation.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="09/2015"
                title="Reissue of the 1975 NASA Graphics Standards Manual"
                type="Design"
                link="external"
                url="https://www.kickstarter.com/projects/thestandardsmanual/reissue-of-the-1975-nasa-graphics-standards-manual"
                infos="
                  This Kickstarter campaign is a celebration of Danne and Blackburn's work. Brought back to earth 41 years after it was designed, and 23 years after it was lost.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="08/2015"
                title="Support Team USA in the Giant Robot Duel"
                type="Tech"
                link="external"
                url="https://www.kickstarter.com/projects/megabots/support-team-usa-in-the-giant-robot-duel"
                infos="
                  'Murcia!
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacer-1 "></div>

      <div className="container-timeline__wrapper">
        <div className="container-timeline__wrapper__title">
          <h2 className="title-3">Other</h2>
        </div>
        <div className="container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="08/2004"
                title="ThW Mapping Contest"
                type="Organisator"
                url=""
                infos="
                  Back in those days my brother and I started a Half-Life deathmatch remake mapping contest for the thewall.de community.
                  Thewall.de was the biggest German Half-life mapping community back then.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="07/2004"
                title="Killbox Mod"
                type="Level Design"
                link="external"
                url="http://killbox.spike-fx.net/home.html"
                infos="
                It all happened during a LAN-Party. The development of v1.0 took 17 hours. And of course there was a mapping contest.
                My map was voted second place.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="09/2002"
                title="PC Action Counter-Strike Special-Edition"
                type="Level Design"
                url=""
                infos="
                  Winning a mapping contest for an exclusive Counter-Strike map pack. The exclusive-pack also is known as
                  “best of german speaking Mapper”-pack was organized by the Clan00 map-forum in collaboration with the PC Action magazine.
                  The pack contained 12 high-quality maps.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="06/2001"
                title="spezi-clan.com"
                type="Co-Clanleader, Wedbdesign"
                link="external"
                url="https://spezi-clan.com"
                infos="
                  And yes, I'm still into gaming.
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Footer */}
    <Footer></Footer>
  </Layout>
);

export default Timeline;
