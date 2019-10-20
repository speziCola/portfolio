import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Layout from "../components/layout"
import NavbarBack from '../components/navbarback';
import ProjectView from '../components/project-preview';
import Footer from '../components/footer';

import gridpaper from '../images/projects/8-grid-paper/thumb-8-grid-paper.jpg';
import steamcalculator from '../images/projects/steamcalculator/img-steamcalculator-preview.jpg';

const Projects = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Projects"
      meta={[
        { name: 'description', content: 'Projects' },
        { name: 'keywords', content: 'Projects' },
      ]}
    />
      {/* Header */}
      <div className="ck__header">
          <h1 className="ck-h1">Projects</h1>
      </div>
      {/* Content */}
      <div className="ck-container">
        <div className="ck-container__wrapper">
          <div className="projects">

          <ProjectView
            title="SteamCalculator"
            subtitle="Product Design"
            info="SteamCalculator is a web application for calculating your current value of your Steam-Account."
            img={steamcalculator}
            alt="SteamCalculator, How much is your account worth?"
            url="projects/steamcalculator">
          </ProjectView >

          <ProjectView
            title="8-Grid Paper"
            subtitle="Design"
            info=" The 8-Grid Paper works like a scale model. It will help you to see every component in perspective."
            img={gridpaper}
            alt="8-Grid Paper concept"
            url="projects/papergrid/">
          </ProjectView >

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
