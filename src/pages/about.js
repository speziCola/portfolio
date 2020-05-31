import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from "../components/layout";

import Social from "../components/social";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import avatar from "../../src/images/qrt-ck.png";

import rdfb from '../../src/images/reference/ck-r-dfb.png';
import rgeospin from '../../src/images/reference/ck-r-geospin.png';
import rhr from '../../src/images/reference/ck-r-hr.png';
import rreservix from '../../src/images/reference/ck-r-reservix.png';
import rreinpfalz from '../../src/images/reference/ck-r-rheinpfalz.png';
import rscfreiburg from '../../src/images/reference/ck-r-scfreiburg.png';
import rsteamcalcualtor from '../../src/images/reference/ck-r-steamcalculator.png';
import rsunzinet from '../../src/images/reference/ck-r-sunzinet.png';
import rswisscom from '../../src/images/reference/ck-r-swisscom.png';

const About = () => (
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
    <header>
      <h1 className="title-1">About</h1>
    </header>
    <div className="container">
      <div className="container__wrapper">
        <div className="container__sidebar">
          <div className="sidebar__card">
            <div className="sidebar__card__profile">
              <img
                className="sidebar__card__profile__avatar"
                src={avatar}
                alt="Chris Kuhrt, porfile picture."
              />
              <ul>
                <li>
                  <h3 className="sidebar__card__profile__h3">Chris Kuhrt</h3>
                </li>
                <li>
                  <h4 className="sidebar__card__h4 sidebar__card__h4--profile">
                    Product designer
                  </h4>
                </li>
              </ul>
            </div>

            <div className="sidebar__card__space"></div>

            <h4 className="sidebar__card__h4 sidebar__card__h4--bold">You can find me on:</h4>

            <Social></Social>

            <h4 className="sidebar__card__h4 sidebar__card__h4--bold">Part of the team:</h4>
            <ul className="ck_social ck_social--links">
              <li>
                <a className="link link--external link--external--light" href="https://www.frau-skroblies.com/">frau-skroblies.com</a>
              </li>
              <li>
                <a className="link link--external link--external--light" href="https://www.hammertime.io/">hammertime.io</a>
              </li>
              <li>
                <a className="link link--external link--external--light" href="https://www.steamcalculator.com/">steamcalculator.com</a>
              </li>
            </ul>
          </div>
          <p className="sidebar__card__credit">© 2008 - 2020 <Link to="/imprint/">Imprint</Link></p>
        </div>
        <div className="container__content">
          <p className="body-text">
            I’m a passionate product designer with a focus on user-centered
            design.
            <br />
            <br />
            As a representative of the users and customers I advocate for user
            needs through planning, design and implementation. Therefore I work
            closely together with development, product development and product
            management. Ensuring that all goals, expectations and user needs are
            being fulfilled and all results reflect a solid understanding of UX
            principles.
            <br />
            <br />I have a strong desire for creativity, innovative thinking and
            solution-oriented work for creating new interactive experiences and
            products.
          </p>
          <h3 className="title-3">References</h3>
          <ul className="ck-logos">
            <li>
              <a href="https://dfb.de" title="DFB">
                <img
                  className="ck-logos__images"
                  src={rdfb}
                  alt="DFB reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.scfreiburg.com" title="SC.Freiburg">
                <img
                  className="ck-logos__images"
                  src={rscfreiburg}
                  alt="SC.Freiburg reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.swisscom.ch" title="Swisscom">
                <img
                  className="ck-logos__images"
                  src={rswisscom}
                  alt="Swisscom reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.hr.de" title="HR">
                <img
                  className="ck-logos__images"
                  src={rhr}
                  alt="HR reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.reservix.de/" title="Reservix">
                <img
                  className="ck-logos__images"
                  src={rreservix}
                  alt="Reservix reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.rheinpfalz.de/" title="Rheinpfalz">
                <img
                  className="ck-logos__images"
                  src={rreinpfalz}
                  alt="Rheinpfalz reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.geospin.de/" title="GeoSpin">
                <img
                  className="ck-logos__images"
                  src={rgeospin}
                  alt="GeoSpin reference"
                />
              </a>
            </li>
            <li>
              <a href="https://www.sunzinet.com/" title="sunzinet">
                <img
                  className="ck-logos__images"
                  src={rsunzinet}
                  alt="sunzinet reference"
                />
              </a>
            </li>
            <li>
              <a href="https://steamcalculator.com/" title="SteamCalculator">
                <img
                  className="ck-logos__images"
                  src={rsteamcalcualtor}
                  alt="SteamCalculator reference"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Footer */}
    <Footer></Footer>
  </Layout>
);

export default About;
