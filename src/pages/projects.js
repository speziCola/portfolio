import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Layout from "../components/layout"
import NavbarBack from '../components/navbarback';
import Footer from '../components/footer';

import gridpaper from '../images/projects/8-grid-paper/img-8-grid-paper.jpg';

const Projects = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Projects"
      meta={[
        { name: 'description', content: 'Projects' },
        { name: 'keywords', content: 'Projects' },
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
          <div className="projects">
            <figure className="projects__img">
              <Link to="/papergrid/"><img src={gridpaper} alt="8-Grid Paper concept" /></Link>
            </figure>
            <div className="projects__tile">
              <Link to="/papergrid/"><h2 className="projects__tile__title"><span className="projects__tile__title--underline">8-Grid Paper</span></h2></Link>
              <p className="projects__tile__subtitle">Concept, Print</p>
              <p className="projects__tile__info">
                The 8-Grid Paper works like a scale model. It will help you to see every 
                component in perspective.
              </p>
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
