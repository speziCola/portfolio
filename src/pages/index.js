import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { NBSP } from "../constants";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import showcasevideoMp4 from "../../src/images/dfb-mockup-v01.mp4";
import showcasevideoWebm from "../../src/images/dfb-mockup-v01.webm";

const IndexPage = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Product Designer"
      meta={[
        { name: "description", content: "Portfolio" },
        { name: "keywords", content: "Portfolio" }
      ]}
    />
    <Navbar></Navbar>
    <div className="home-container">
      <div className="home-container__wrapper">
        <h1 className="home-container__headline">
          Hi, my name is Chris{NBSP}Kuhrt
          <br />
          I’m{NBSP}a Product Designer based in Germany.
          <span className="home-container__headline-line">_</span>
        </h1>
        <p className="home-container__subtext">
          Starting to explore the internet in the early 2000s I discovered
          digital media design. Since then, I’ve worked on serveral projects. I
          always strive to create new or better customer experience with
          empathy.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/work/">Projects</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home-container__showcase">
        <div className="home-container__showcase-wrapper">
          <video
            autoplay="autoplay"
            muted
            loop
            className="home-container__showcase-video"
          >
            <source src={showcasevideoMp4} type="video/mp4" />
            <source src={showcasevideoWebm} type="video/webm" />
          </video>
          <div className="home-container__showcase-video-shadow"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </Layout>
);

export default IndexPage;
