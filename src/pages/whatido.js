import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Work = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - What I do"
      meta={[
        { name: "description", content: "What I do" },
        { name: "keywords", content: "What I do" }
      ]}
    ></Helmet>
    <Navbar></Navbar>
    {/* Header */}
    <header>
      <h1 className="o-title-1">What I do</h1>
    </header>
    {/* Content */}
    <div className="o-container">
    <h2 className="o-title-2 u-no-bottom">Understanding the goal</h2>
      <h3 className="o-title-5">Question & Verify</h3>
      <div className="u-list-border u-list-border--red">
        <h4 className="o-title-4">Why</h4>
        <p className="o-text-body">
          Understanding the importance and origin of the product or feature.
        </p>
        <h4 className="o-title-4">What</h4>
        <p className="o-text-body">
          Are we building the right thing? Which problem are we trying to solve?
        </p>
        <h4 className="o-title-4">How</h4>
        <p className="o-text-body">
          Does it benefit the customers? Does it extend the company's mission?
        </p>
      </div>
      <h2 className="o-title-2 u-no-bottom">Determine the challenge</h2>
      <h3 className="o-title-5">Discover & Define</h3>
      <div className="u-list-border u-list-border--blue">
        <h4 className="o-title-4">Empathize</h4>
        <p className="o-text-body">
          Learning about the people for whom I design. In dialogue with users,
          customers, stakeholders, and team members.
        </p>
        <h4 className="o-title-4">Analyze</h4>
        <p className="o-text-body">
          Looking into existing data such as tracking, market research to gain
          quantitative knowledge about the product.
        </p>
        <h4 className="o-title-4">Evaluate</h4>
        <p className="o-text-body">
          Gathering insights from hard (data) and soft (experience) facts can
          help me to define the challenge in a different way.
        </p>
      </div>
      <h2 className="o-title-2 u-no-bottom">Provide a solution</h2>
      <h3 className="o-title-5">Develop & Deliver</h3>
      <div className="u-list-border u-list-border--green">
        <h4 className="o-title-4">Brainstorm</h4>
        <p className="o-text-body">
          By providing different solutions to the clearly defined challenge via
          the HMW question. Also seeking inspiration from elsewhere and
          co-designing with a range of different people with the help of
          workshops (LDJ).
        </p>
        <h4 className="o-title-4"> Creating a prototype</h4>
        <p className="o-text-body">
          Exploring possible ideas for structures, functionalities, and visual
          elements and translate them into interface prototypes.
        </p>
        <h4 className="o-title-4"> Testing a prototype</h4>
        <p className="o-text-body">
          Testing before building the product is essential. Depending on
          product, feature, and deadline I apply different testing methods to
          minimize any potential flaws or to further optimize the customer
          experience.
        </p>
      </div>
      <div className="c-spacer-2"></div>
      <h2 className="o-title-2 o-title-2--bottom-2">Technical Skills</h2>
      <p className="o-text-body">
        I'm a Hybrid Designer. I also like to work with front-end code,
        designing and creating things is a passion of mine. I often spend my
        evenings and weekends learning new skills and technologies.
      </p>
      <div className="c-spacer-3"></div>
      <h4 className="o-title-4 o-title-4--bottom-2">
        Visual Design, Concept, Wireframing, Prototyping & Interaction Design
      </h4>
      <div className="c-skill-group">
        <div className="c-skill">
          <div
            role="img"
            alt="Figma"
            className="c-skill__icon c-skill__icon--figma"
          ></div>
          <h4>Figma</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Sketch"
            className="c-skill__icon c-skill__icon--sketch"
          ></div>
          <h4>Sketch</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Sketch"
            className="c-skill__icon c-skill__icon--framer"
          ></div>
          <h4>Framer</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="InVision"
            className="c-skill__icon c-skill__icon--invision"
          ></div>
          <h4>InVision App</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Zeplin"
            className="c-skill__icon c-skill__icon--zeplin"
          ></div>
          <h4>Zeplin</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Protopie"
            className="c-skill__icon c-skill__icon--protopie"
          ></div>
          <h4>Protopie</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Principle"
            className="c-skill__icon c-skill__icon--principle"
          ></div>
          <h4>Principle</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Airtable"
            className="c-skill__icon c-skill__icon--airtable"
          ></div>
          <h4>Airtable</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Good Notes"
            className="c-skill__icon c-skill__icon--good-notes"
          ></div>
          <h4>Good Notes</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Concepts"
            className="c-skill__icon c-skill__icon--concepts"
          ></div>
          <h4>Concepts</h4>
        </div>
      </div>
      <div className="c-spacer-2"></div>
      <h4 className="o-title-4 o-title-4--bottom-2">Web & Coding</h4>
      <div className="c-skill-group">
        <div className="c-skill">
          <div
            role="img"
            alt="Visual Studio"
            className="c-skill__icon c-skill__icon--vsc"
          ></div>
          <h4>Visual Studio</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Git"
            className="c-skill__icon c-skill__icon--git"
          ></div>
          <h4>Git</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="HTML"
            className="c-skill__icon c-skill__icon--html"
          ></div>
          <h4>HTML</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="CSS"
            className="c-skill__icon c-skill__icon--css"
          ></div>
          <h4>CSS</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Sass"
            className="c-skill__icon c-skill__icon--sass"
          ></div>
          <h4>Sass</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Javascript"
            className="c-skill__icon c-skill__icon--javascript"
          ></div>
          <h4>Javascript</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Visual Composer"
            className="c-skill__icon c-skill__icon--vc"
          ></div>
          <h4>Visual Composer</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Elementor"
            className="c-skill__icon c-skill__icon--elementor"
          ></div>
          <h4>Elementor</h4>
        </div>
      </div>
      <div className="c-spacer-2"></div>
      <h4 className="o-title-4 o-title-4--bottom-2">
        Illustrations, Photo & Video Editing
      </h4>
      <div className="c-skill-group">
        <div className="c-skill">
          <div
            role="img"
            alt="Photoshop"
            className="c-skill__icon c-skill__icon--photoshop"
          ></div>
          <h4>Photoshop</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Illustrator"
            className="c-skill__icon c-skill__icon--illustrator"
          ></div>
          <h4>Illustrator</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="InDesign"
            className="c-skill__icon c-skill__icon--indesign"
          ></div>
          <h4>InDesign</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Premiere"
            className="c-skill__icon c-skill__icon--premiere"
          ></div>
          <h4>Premiere</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="After Effects"
            className="c-skill__icon c-skill__icon--aftereffects"
          ></div>
          <h4>After Effects</h4>
        </div>
        <div className="c-skill">
          <div
            role="img"
            alt="Cinema 4D"
            className="c-skill__icon c-skill__icon--cinema"
          ></div>
          <h4>Cinema 4D</h4>
        </div>
      </div>
    </div>
    {/* Footer */}
    <Footer></Footer>
  </Layout>
);

export default Work;
