import React from "react"
import { Link } from "gatsby"

import { NBSP } from '../constants';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import avatar from '../../src/images/qrt-ck.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Navbar></Navbar>
    <div className="ck_start_container">
      <div className="ck_start_container__wrapper">
      <img className="ck_start_container__avatar" src={avatar} alt="Chris Kuhrt, porfile picture." />
        <h1 className="ck_start_container__headline">
        Hi, my name is Chris{NBSP}Kuhrt.<br />
        I’m{NBSP}a Product Designer based in Germany.<span className="ck_start_container__headline__line">_</span>
        </h1>
        <p className="ck_start_container__subtext">
          Starting to explore the internet in the early 2000s I discovered
          digital media design. Since then, I’ve worked for serveral clients. I always strive to create
          new or better customer experience with empathy.
        </p>
      {/*   Button here */}
      </div>
    </div>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
