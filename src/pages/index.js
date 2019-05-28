import React from "react"
import { Link } from "gatsby"

import { NBSP } from '../constants';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="ck__start__content__01">
        <div className="ck__start__wrapper__01"> 
          <div className="ck__welcome">
            <h1 className="ck__welcome__headline">
              <span className="ck__welcome__headline--quote glitch__text">“</span>
              <span className="ck__welcome__headline--hi glitch__text">
              Hi,
              </span>
              my name is Chris{NBSP}Kuhrt.<br /> 
              I’m{NBSP}a{NBSP}Digital{NBSP}designer based in Germany.”<span className="ck__welcome__headline__line">_</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="ck__start__content__02">
        <div className="ck__start__wrapper__02">
          <div className="ck__about">
              <p className="ck__about__subtext">
                Starting to explore the internet in the early 2000s I discovered 
                digital media design.<br /> Since then, I have been a keen learner and always 
                ambitious to learn new stuff.
              </p>
              <Button type="primary" title="Projects" url="/projects/"></Button>
              <Button type="secondary" title="About me" url="/about/"></Button>
            </div>
        </div>
      </div>
      <Footer></Footer>
      <div className="ck__stripe">
        <div className="ck__stripe__a"></div>
        <div className="ck__stripe__b"></div>
      </div>
  </Layout>
)

export default IndexPage
