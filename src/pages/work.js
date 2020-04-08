import React from 'react'
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import Navbar from "../components/navbar";
import ProjectView from '../components/project-preview';
import Footer from '../components/footer';

import mobileseatmap from '../images/projects/thumbnail-mobile-seat-map.jpg';
import shopconfigurator from '../images/projects/thumbnail-shop-configurator.jpg';
import ticketresale from '../images/projects/thumbnail-ticket-resale.jpg';
import imageperformance from '../images/projects/thumbnail-image-performance.jpg';
import steamcalculator from '../images/projects/steamcalculator/img-steamcalculator-preview.jpg';
import gridpaper from '../images/projects/8-grid-paper/thumb-8-grid-paper.jpg';

const Work = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Work"
      meta={[
        { name: 'description', content: 'Work' },
        { name: 'keywords', content: 'Work' },
      ]}
    />
    <Navbar></Navbar>
    {/* Header */}
    <div className="ck-header">
      <h1 className="ck-h1">Work</h1>
    </div>
      {/* Content */}
      <div className="ck-container">
        <div className="ck-container__wrapper">
          <div className="projects">
          <ProjectView
            title="Mobile seat map redesign"
            subtitle="UX/UI"
            info="Optimizing the UX without big code changes."
            img={mobileseatmap}
            alt="Mobile seat map redesign"
            url="https://uxfol.io/project/04249acc/Mobile-seat-map-redesign"
            type="external"
            password="">
          </ProjectView >

          <ProjectView
            title="Shop-configurator"
            subtitle="UX/UI"
            info="Sorting settings and providing an easy scalable UI for additional features."
            img={shopconfigurator}
            alt="Shop-configurator"
            url="https://uxfol.io/project/0485a1c7/Shop-configurator"
            type="external"
            password="">
          </ProjectView >

          <ProjectView
            title="Ticket resale"
            subtitle="UX/UI"
            info="Integrating a secondary ticket market into a white labeling ticketing system."
            img={ticketresale}
            alt="Ticket resale"
            url="https://uxfol.io/project/04b91a34/Ticket-ReSale"
            type="external"
            password="">
          </ProjectView >

          <ProjectView
            title="Performance on images"
            subtitle="Research/UX"
            info="Increase your conversion rate and revenue by optimizing your images."
            img={imageperformance}
            alt="Performance on images"
            url="https://medium.com/@chriskuhrt/increase-your-conversion-rate-and-revenue-by-optimizing-your-images-449a97929e9b"
            type="external"
            password="no-lock">
          </ProjectView >

        {/*   <ProjectView
            title="SteamCalculator"
            subtitle="Product Design"
            info="SteamCalculator is a web application for calculating your current value of your Steam-Account."
            img={steamcalculator}
            alt="SteamCalculator, How much is your account worth?"
            url="projects/steamcalculator"
            type="external"
            password="">
          </ProjectView >

          <ProjectView
            title="8-Grid Paper"
            subtitle="Design"
            info=" The 8-Grid Paper works like a scale model. It will help you to see every component in perspective."
            img={gridpaper}
            alt="8-Grid Paper concept"
            url="projects/papergrid/"
            type="internal"
            password="no-lock">
          </ProjectView > */}

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

export default Work
