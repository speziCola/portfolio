import React from 'react'
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import TimeStamp from '../components/timestamp';


import Social from '../components/social';
import Navbar from "../components/navbar";
import Footer from '../components/footer';

import avatar from '../../src/images/qrt-ck.png';
import ck_logos from '../../src/images/ck_logos.png';

const About = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - About"
      meta={[
        { name: 'description', content: 'About' },
        { name: 'keywords', content: 'About' },
      ]}
    />
      <Navbar></Navbar>
      {/* Header */}
      <div className="ck-header">
        <h1 className="ck-h1">About</h1>
      </div>
      <div className="ck-container">
        <div className="ck-container__wrapper">
          <div className="ck-container__sidebar">
            <div className="sidebar__card">
              <div className="sidebar__card__profile">
                <img className="sidebar__card__profile__avatar" src={avatar} alt="Chris Kuhrt, porfile picture." />
                <ul>
                  <li><h3 className="sidebar__card__profile__h3">Chris Kuhrt</h3></li>
                  <li><h4 className="sidebar__card__profile__h4">Product designer</h4></li>
                </ul>
                <Social></Social>
              </div>
            </div>
          </div>
          <div className="ck-container__content">
            <p className="ck-text">
              I’m a passionate product designer with a focus on user centered design.
              <br /><br />
              As a representative of the users and customers I advocate for user needs through
              planning, design and implementation. Therefore I work closely together with development,
              product development and product management. Ensuring that all goals, expectations and user
              needs are being fulfilled and all results reflect a solid understanding of UX principles.
              <br /><br />
              I have a strong desire for creativity, innovative thinking and solution-oriented work for
              creating new interactive experiences and products.
            </p>
          </div>
        </div>
      </div>


{/*       <div className="ck__about__info">
        <p className="ck-text">
            I’m a passionate product designer with a focus on user centered design.
            <br /><br />
            As a representative of the customers and users I advocate for user needs through
            planning, design and implementation ensuring all results reflects a solid understanding of
            UX principles. Therefore I work closely together with development, product development and
            product management. Ensuring that all goals, expectations and customer and user needs are
            being fulfilled.
            <br /><br />
            I have a strong desire for creativity, innovative thinking and solution-oriented work for
            creating new interactive experiences and products.
        </p>
        <div className="ck__about__img">
          <img src={ck_logos} alt="References" />
        </div>
      </div> */}
      {/* Content */}
{/*       <div className="ck-container">
      <div className="ck-spacer "></div>
        <div className="ck-container__wrapper">
        </div>
      </div> */}
      {/* Footer */}
      <Footer></Footer>
  </Layout>
)

export default About
