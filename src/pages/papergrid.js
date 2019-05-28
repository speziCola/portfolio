import React from 'react'
import Helmet from 'react-helmet'

import Layout from "../components/layout"
import NavbarBack from '../components/navbarback';
import Footer from '../components/footer';
import ButtonLink from '../components/button-link';

import gridpaper from '../images/projects/8-grid-paper/img-8-grid-paper.jpg';
import gridpaperpreview from '../images/projects/8-grid-paper/img-8-grid-paper-preview.jpg';

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
      {/* Content */}
      <div className="project">
        <div className="project__header">
          <figure className="project__header__img">
            <img src={gridpaper} alt="8-Grid Paper concept" />
          </figure>
          <div className="project__header__tile">
            <h2 className="project__header__tile__title">8-Grid Paper</h2>
            <p className="project__header__tile__subtitle">Concept, Print</p>
          </div> 
        </div>
        <div className="project__content">
          <h3 className="project__title">One sentence summary:</h3>
          <p className="project__text">
            The 8-Grid Paper works like a scale model. It will meet the end result 
            more precisely.
          </p> 
          <span className="project__spacer"></span>
          <h3 className="project__title">Motivation</h3>
          <p className="project__text">
            Sketching is nothing new. The 8-Grid Paper however works like a scale model.
            Therefore your sketches will meet the end result more precisely.
            <br /><br /> 
            <span className="project__marker">Who will benefit?</span>
            <br /><br /> 
            <span className="project__marker">UI Designers</span> have to do less decisions and concessions when designing a high fidelity prototype afterwards. 
            <br /><br /> 
            <span className="project__marker">UX Designers</span> can easy keep track of an 8 Pixel increment while sketching.
            <br /><br /> 
            <span className="project__marker">The project it self</span> if the interface is bounded to a certain screen resolution.
          </p>
          <span className="project__spacer"></span>
          <h3 className="project__title">Main features</h3>
          <p className="project__text">
            Every child square on the sketch sheet represents 8px and every parent square 64px. 
            Therefore your sketches will meet the end result more precisely. For example: 320px 
            are 40 child squares or 5 parent squares.
          </p>
          <span className="project__spacer"></span>
          <figure className="project__img">
            <img src={gridpaperpreview} alt="8-Grid Paper preview" />
            <figcaption>8-Grid Paper.</figcaption>
          </figure>
          <span className="project__spacer"></span>
          <h3 className="project__title">Personas</h3>
          <p className="project__text">
            <span className="project__marker">Peter, 27 years old. - UI Designer</span> <br />
            While sketching he always wanted to know how much space he really has. 
            Can he make this Icon that big? Does he have enough space left between his elements?
            <br /><br />
            <span className="project__marker">Tom, 26 years old. - UX Designer</span> <br />
            He wants to know if the user sees everything without scrolling?
          </p>
          <span className="project__spacer"></span>
          <h3 className="project__title">Stories</h3>
          <p className="project__text">
            Using the 8-Grid Paper Peter is able to see right away if an element still 
            has enough space and if he can add another icon to his component. This saves him time and 
            leads to less mistakes.
            <br /><br />
            Due to the real proportion Tom know’s on which position the interaction will happen 
            and if the user has to scroll to make an action.
          </p>
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
