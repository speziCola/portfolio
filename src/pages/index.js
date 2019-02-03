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
          my name is Chris{NBSP}Kuhrt. I’m{NBSP}a{NBSP}product{NBSP}designer<br /> 
          living in Freiburg i. B., Germany.”<span className="ck__start__wrapper__headline__line">_</span>
        </h1>
      </div> 
      <div className="ck__start__wrapper ck__start__wrapper--about">
        <p className="ck__start__wrapper__subtext">
          Starting to explore the internet in the early 2000s I discovered 
          digital media design.<br /> Since then, I have been a keen learner and always 
          ambitious to learn new stuff.
        </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/christopher-kuhrt/"><i className="ck-icon-linkedin"></i></a></li>
          <li><a href="https://www.xing.com/profile/Christopher_Kuhrt2"><i className="ck-icon-xing"></i></a></li>
          <li className="line"></li> 
          <li><a href="https://www.instagram.com/chriskuhrt/"><i className="ck-icon-instagram"></i></a></li>
          <li><a href="https://500px.com/chriskuhrt"><i className="ck-icon-500pixel"></i></a></li>
          <li><a href="https://vimeo.com/cqrt"><i className="ck-icon-vimeo"></i></a></li>
        </ul>
        <Link className="about__button" to="/about/">About</Link>
      </div>
    </div>  
    <Footer></Footer>
  </div>
  </Layout>
)

export default IndexPage
