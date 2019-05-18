import React from 'react'
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import NavbarBack from '../components/navbarback';
import Footer from '../components/footer';
import ButtonLink from '../components/button-link';

import gridpaper from '../images/projects/8-grid-paper/img-8-grid-paper.jpg';

const Projects = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - rojects"
      meta={[
        { name: 'description', content: 'rojects' },
        { name: 'keywords', content: 'rojects' },
      ]}
    />
      <div className="ck__navbar">
        <NavbarBack></NavbarBack>
      </div>
      {/* Header */}
      <div className="ck__header">
          <h1 className="ck-h1">Projects</h1>
      </div>
      {/* Content */}
      <div className="ck__content">
        <div className="ck__content__wrapper">
          <div className="project">
            <figure className="project__img">
              <img src={gridpaper} alt="8-Grid Paper concept" />
            </figure>
            <div className="project__tile">
              <h2 className="project__tile__title">8-Grid Paper</h2>
              <p className="project__tile__subtitle">Concept, Print</p>
              <p className="project__tile__info">The fucking paper will help your sketches to be closer to meet...</p>
              <ButtonLink type="internal" />
            </div>     
          </div>
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
