import React from "react"
import { Link } from "gatsby"

import { NBSP } from '../constants';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="ck__welcome__conatainer">
    <div className="ck__start__content">
      <div className="ck__start__wrapper ck__start__wrapper--welcome">
        <h1 className="ck__start__wrapper__headline">
          <span className="ck__start__wrapper__headline--hi">
          Hi,
          </span>
          my name is Chris{NBSP}Kuhrt.<br />
          I’m{NBSP}a{NBSP}product{NBSP}designer.”<span className="ck__start__wrapper__headline__line">_</span>
        </h1>
      </div> 
      <div className="ck__start__wrapper ck__start__wrapper--about">
        <p className="ck__start__wrapper__subtext">
          Starting to explore the internet in the early 2000s I discovered 
          digital media design.<br /> Since then, I have been a keen learner and always 
          ambitious to learn new stuff.
        </p>

        <Link className="about__button" to="/about/">About me</Link>
      </div>
    </div>  
    <Footer></Footer>
  </div>
  </Layout>
)

export default IndexPage
