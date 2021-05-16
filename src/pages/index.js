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
      <article className="home__content">

          <h1 className="home__headline">
            Hi, my name is Chris{NBSP}Kuhrt
            <br />
            I’m{NBSP}a Product Designer based in Germany
          </h1>
          <p className="home__subtext">
            I’ve worked on several projects for companies and clients with a focus on user and business needs. 
            Always in mind to create new scalable interactive experiences and products.
          </p>

        <ul className="home__menu">
          <li>
            <Link to="/work/">Work</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </article>
      <aside id="showcase" className="home__showcase">
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
          <div className="home__showcase-shadow"></div>
        </div>
      </aside>
    </div>
    <Footer></Footer>
    <div className="home__square"></div>
  </Layout>
);

export default IndexPage;
