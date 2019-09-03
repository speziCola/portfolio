import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import TimeStamp from "../components/timestamp";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Timeline = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - About"
      meta={[
        { name: "description", content: "About" },
        { name: "keywords", content: "About" }
      ]}
    />
    <Navbar></Navbar>
    {/* Header */}
    <div className="ck-header">
      <h1 className="ck-h1">Timeline</h1>
    </div>
    {/* Content */}
    <div className="ck-container">
      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Work experince</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="06/2015"
                title="Reservix"
                type="UX/UI"
                link="internal"
                url="https://www.reservix.net/"
                infos="
                  Supporting several teams with UX/UI designs for our B2C and B2B products. Therefore I’m responsible for 3000
                  white label shops and three Apps. Always seeking to create a great user experience for buying or reselling tickets for local
                  events up to film premieres (Star Wars, James Bond, ... ) or 1. Bundesliga and DFB.
                "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="06/2015"
                title="GeoSpin"
                type="Product Desgin"
                link="external"
                url="https://www.geospin.de"
                infos="
                  Product design consultant. Also building a Corporate Design and implementing a CMS with docker.
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

      <div className="ck-spacer "></div>

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Freelancer</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="03/2015"
                title="Frau Skroblies & Freunde"
                type="Cinematographer"
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
                  Customizing a Wordpess theme for my client needs in consideration of his branding.
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
                type="Cinematogrpaher"
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

      <div className="ck-spacer "></div>

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Projects</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
            <li>
              <TimeStamp
                time="04/2018"
                title="Wally"
                type="Product Design"
                url=""
                infos="
                    Having two spare computer screens I additionally bought two raspberry pi's. The goal was building a dashboard displaying the weather forecast and the tramp times.
                  "
              ></TimeStamp>
            </li>
            <li>
              <TimeStamp
                time="05/2012"
                title="SteamCalculator"
                type="UX/UI, Frontend"
                link="internal"
                url="https://steamcalculator.com/"
                infos="
                  SteamCalculator calculates the value of an user’s Steam account. Steam is an online gaming download platform.
                  Due to the immense popularity of our application I was able to write my Bachelor thesis* about it.
                  *Title: Self-efficacy in online gaming: Conception of a personalize data visualization as a marketing tool for a game community.
                "
              ></TimeStamp>
            </li>
          </ul>
        </div>
      </div>

      <div className="ck-spacer "></div>

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Further education</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
          <ul className="ck-skill-list">
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

      <div className="ck-spacer "></div>

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Education</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
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

      <div className="ck-spacer "></div>

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Volunteer work</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
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
                type="Cinematographer"
                link="external"
                url="https://vimeo.com/64133805"
                infos="
                  Filming and editing a corporate video for PHoS – Palliatives Hospiz Solingen – a nonprofit terminal care organization.
                  This image film was a part of my friends bachelor thesis.
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

      <div className="ck-spacer "></div>
      {/*
        <div className="ck-container-timeline__wrapper">
          <div className="ck-container-timeline__wrapper__title">
            <h2>Travel</h2>
          </div>
          <div className="ck-container-timeline__wrapper__timestamp">
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

        <div className="ck-spacer "></div> */}

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Backer</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
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
                  A modern tool for digital product designers. Dynamic layout meets direct manipulation.
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

      <div className="ck-spacer "></div>

      <div className="ck-container-timeline__wrapper">
        <div className="ck-container-timeline__wrapper__title">
          <h2>Other</h2>
        </div>
        <div className="ck-container-timeline__wrapper__timestamp">
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
                  It all happend during a LAN-Party. The development of v1.0 took 17 hours. And of course there was a mapping contest.
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
                  Winning a mapping contest for an exclusive Counter-Strike map pack. The exclusive-pack also known as
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
                url="http://www.spezi-clan.com"
                infos="
                  And yes, I'm still playing.
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
