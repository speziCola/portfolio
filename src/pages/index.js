import React from "react"
import { Link } from "gatsby"

import { NBSP } from '../constants';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="ck__container">
      <div className="ck__start__content__01">
        <div className="ck__start__wrapper__01"> 
          <div className="ck__welcome">
            <h1 className="ck__welcome__headline">
              <span className="ck__welcome__headline--hi">
              Hi,
              </span>
              my name is Chris{NBSP}Kuhrt.<br /> 
              I’m{NBSP}a{NBSP}product{NBSP}designer based in Germany.”<span className="ck__welcome__headline__line">_</span>
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
              <Link className="ck__about__button" to="/about/">About me</Link>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </Layout>
)

export default IndexPage
