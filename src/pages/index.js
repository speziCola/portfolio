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
    <div className="c-home">
      <article className="c-home__content">

          <h1 className="c-home__headline">
            Hi, my name is Chris{NBSP}Kuhrt
            <br />
            I’m{NBSP}a Product Designer based in Germany
          </h1>
          <p className="c-home__subtext">
            With over ten years of experience I’ve worked on several projects with a focus on user and business needs. 
            Always in mind to create new scalable experiences and products.
          </p>

        <ul className="c-home__menu">
          <li>
            <Link to="/work/">Work</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </article>
      <aside className="c-home__showcase">
        <div className="c-home__showcase-wrapper">
          <video
            autoplay="autoplay"
            muted
            loop
            className="c-home__showcase-video"
          >
            <source src={showcasevideoMp4} type="video/mp4" />
            <source src={showcasevideoWebm} type="video/webm" />
          </video>
          <picture>
            <source srcset={showcaseimagewebp} type="image/webp" />
            <source srcset={showcaseimagejpg} type="image/jpeg" />
            <img
              className="c-home__showcase-img"
              src={showcaseimagejpg}
              alt="DFB Seat Map"
            ></img>
          </picture>
          <div className="c-home__showcase-shadow"></div>
        </div>
      </aside>
    </div>
    <Footer></Footer>
    <div className="c-home__square"></div>
  </Layout>
);

export default IndexPage;
