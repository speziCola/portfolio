import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { NBSP } from "../constants";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import showcasevideoMp4 from "../../src/images/dfb-mockup-v01.mp4";
import showcasevideoWebm from "../../src/images/dfb-mockup-v01.webm";
import showcaseimagejpg from "../../src/images/dfb-mockup-thumbmail.jpg";
import showcaseimagewebp from "../../src/images/dfb-mockup-thumbmail.webp";

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
    <div className="home">
      <content className="home__content">
        <div className="mobile-full-height">
        <h1 className="home__headline">
          Hi, my name is Chris{NBSP}Kuhrt
          <br />
          I’m{NBSP}a Product Designer based in Germany.
          <span className="home__headline-line">_</span>
        </h1>
        <p className="home__subtext">
          Starting to explore the internet in the early 2000s I discovered
          digital media design. Since then, I’ve worked on serveral projects. I
          always strive to create new or better customer experience with
          empathy.
        </p>
        </div>
        <ul className="home__menu">
          <li>
            <Link to="/work/">Work</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </content>
      <div className="home__showcase">
        <div className="home__showcase-wrapper">
          <video
            autoplay="autoplay"
            muted
            loop
            className="home__showcase-video"
          >
            <source src={showcasevideoMp4} type="video/mp4" />
            <source src={showcasevideoWebm} type="video/webm" />
          </video>
          <picture>
            <source srcset={showcaseimagewebp} type="image/webp" />
            <source srcset={showcaseimagejpg} type="image/jpeg" />
            <img
              className="home__showcase-img"
              src={showcaseimagejpg}
              alt="DFB Seat Map"
            ></img>
          </picture>
          <div className="home__showcase-video-shadow"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </Layout>
);

export default IndexPage;
