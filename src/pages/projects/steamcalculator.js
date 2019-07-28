import React from 'react'
import Helmet from 'react-helmet'

import Layout from "../../components/layout"
import NavbarBack from '../../components/navbarback';
import Footer from '../../components/footer';
import NavbarBottom from "../../components/navbarbottom";

import steamcalculator from '../../images/projects/steamcalculator/img-steamcalculator-preview.jpg';

const Projects = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - SteamCalculator"
      meta={[
        { name: 'description', content: 'Projects' },
        { name: 'keywords', content: 'Projects' },
      ]}
    />
      <div className="ck__navbar">
        <NavbarBack url="/projects/"></NavbarBack>
      </div>
      {/* Content */}
      <div className="project">
        <div className="project__header">
          <figure className="project__header__img">
            <img src={steamcalculator} alt="SteamCalculator, How much is your account worth?" />
          </figure>
          <div className="project__header__tile">
            <h2 className="project__header__tile__title">SteamCalculator</h2>
            <p className="project__header__tile__subtitle">Product Design</p>
          </div>
        </div>
        <div className="project__content">

          <h3 className="project__title">One sentence summary</h3>
          <p className="project__text">
            <a var="link" href="https://steamcalculator.com">SteamCalculator</a> is a web application
            for calculating your current value of your Steam-Account.
          </p>
          <span className="project__spacer"></span>

          <h3 className="project__title">Motivation</h3>
          <p className="project__text">
            We game to compete with others and to find recognition in a game community.
            Besides of our skill even rare weapon skins can increase our recognition in a
            community. Due to digital gaming you can document far more data which then can
            be designed and shown visual. This gives each Player the opportunity to find
            his own individual fulfilment.
            <br /><br />
            <span className="project__marker">This can be:</span>
            <ul>
              <li>Skill (Kill per Death)</li>
              <li>Points / lvl of his Account</li>
              <li>Achievements earned</li>
              <li>How many Games he owns</li>
              <li>His Playtime</li>
              <li>...</li>
            </ul>
          </p>
          <span className="project__spacer"></span>

          <h3 className="project__title">Main features</h3>
          <p className="project__text">
            <ul>
              <li>Calculating current value of your Steam-Account</li>
              <li>Playtime (Total and for each game)</li>
              <li>Price / Hour</li>
            </ul>
          </p>
          <span className="project__spacer"></span>

          <h3 className="project__title">Personas</h3>
          <p className="project__text">
            <span className="project__marker">Peter, 18 years Old – Pro-Gamer</span><br />
            Achieved everything. Now he want’s to know is current Steam-Account value.
            <br /><br />
            <span className="project__marker">Thomas, 24 years old – Random Gamer</span><br />
            Wants to know how many games he has.
            <br /><br />
            <span className="project__marker">Tom, 14 years old – Newbie</span><br />
            Checking other Accounts of his idols.
          </p>
          <span className="project__spacer"></span>

          <h3 className="project__title">Stories</h3>
          <p className="project__text">
            I always loved to be the best in everything. I want to beat my classmates by having the most expensive Steam-Account. Or even the most  expensive Steam-Account in my town?
            <br /><br />
            Just lost track by all the games he played. Wants to check how many he got. Also maybe which favourite Genre he is playing.
            <br /><br />
            Curious what other games his idols play. Or how many hours he has to play to become as good as his idols.
          </p>
          <span className="project__spacer"></span>

          <div className="project__wrapper">
            <NavbarBottom title="Back to all projects" url="/projects/"></NavbarBottom>
          </div>
          <span className="project__spacer"></span>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
      <div className="ck__stripe">
        <div className="ck__stripe__a"></div>
        <div className="ck__stripe__b"></div>
      </div>
  </Layout>
)

export default Projects
