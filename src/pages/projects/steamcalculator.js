import React from 'react'
import Helmet from 'react-helmet'

import Layout from "../../components/layout"
import NavbarBack from '../../components/navbarback';
import Footer from '../../components/footer';
import NavbarBottom from "../../components/navbarbottom";

import steamcalculator from '../../images/projects/steamcalculator/header-steamcalculator.jpg';
import steamcalculatorwork from '../../images/projects/steamcalculator/img-steamcalculator-how-it-works.jpg';

const Projects = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - SteamCalculator"
      meta={[
        { name: 'description', content: 'Projects' },
        { name: 'keywords', content: 'Projects' },
      ]}
    />
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

          <h3 className="project__title">Product</h3>
          <p className="project__text">
            <a var="link" href="https://steamcalculator.com">SteamCalculator</a> is a web application, which allows you to
            calculate the approximate value of a given Steam account. This is done by looking up it's public profile and
            all it's linked items on Steam and by fetching the current price for each item. Steam is an online
            distribution platform which belongs to Valve an american game developer and publisher.
            Through Steam users can buy games and other software applications. The value of a Steam account
            depends on the amount of items a user has purchased.
          </p>
          <span className="project__spacer"></span>
          <span className="project__marker">My contribution</span>
          <ul>
            <li>Responsible for the user experience and user interface</li>
            <li>Elevation of my bachelor thesis</li>
            <li>Implementing a Discord bot</li>
          </ul>

          <span className="project__spacer"></span>

          <h3 className="project__title">Background Story</h3>
          <p className="project__text">
            SteamCalculator was first published in 2008 on hlportal.de, the biggest german community page for Half-Life
            and mods at that time. The response was big, so big the website crashed within the first 24 hours. After
            some refactoring, over 10,000 calculations were made after one month.
          </p>
          <span className="project__spacer"></span>

          <h3 className="project__title">Motivation</h3>
          <p className="project__text">
            We game to compete with others and to find recognition in a game community. Besides of our skill even
            rare weapon skins can increase our recognition in a community. Due to digital gaming you can document
            far more data which then can be designed and shown visual. This gives each Player the opportunity to
            find his own individual fulfilment.
          </p>

          <span className="project__spacer"></span>

          <span className="project__marker">This can be:</span>
            <ul>
              <li>Points or level of your Account</li>
              <li>Skill (Kill per Death)</li>
              <li>Achievements earned</li>
              <li>How many Games you own</li>
              <li>Your Playtime</li>
            </ul>
          <p className="project__text">
            Or the value of your Steam account.
          </p>
          <span className="project__spacer"></span>

          <h3 className="project__title">How does it works?</h3>
          <figure className="project__img">
            <img src={steamcalculatorwork} alt="SteamCalculator how it works." />
            <figcaption>SteamCalculator, how it works.</figcaption>
          </figure>
          <span className="project__spacer"></span>

          <p className="project__text">
            Every user who purchase games via the online distribution platform Steam has a personal Steam account.
            To verify a Steam account it has an unique id. The id contains all the information of the account including
            all game items. Based on the id SteamCalculator can send a request to Steam to fetch all the given data
            (game item, price, ect.) for a calculation.
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
