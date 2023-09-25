import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import "../styles/foundation.css";
import "../styles/whatIdo.css";

import Header from "../components/header/header";
import GridLines from "../components/gridlines/gridLines";
import Card from "../components/card/card";

const WhatIDo: React.FC<PageProps> = () => {
  return (
    <div className="gridContainer">
      <GridLines />
      <Header />
      <main className="gridWrapper">
        <div className="mainContainer">
          <h1 className="fullRowWidth">What I Do</h1>
          <p className="fullRowWidth textIntro">
            Navigating the world of UX, I follow four stages:
          </p>
          <Card svgid="stage00" className="stage00">
            <div className="stageHeader">
              <span>UX Maturity</span>
              <h2>Stage 0</h2>
            </div>
            <h3>Cultivate UX Maturity</h3>
            <p>
              This crucial first step involves prioritizing UX. By embedding
              best practices, gathering ongoing feedback, and measuring our
              impact, we set a foundation that significantly influences the
              subsequent stages.
            </p>
            <h4>Institutionalize Best Practices</h4>
            <p>
              Embed UX into company culture through training and sharing UX
              insights with the team.
            </p>
            <h4>Continuous Feedback Loop</h4>
            <p>
              Refine designs based on consistent user and stakeholder feedback.
            </p>
            <h4>Quantify UX Impact</h4>
            <p>
              Track metrics like satisfaction, conversion, and retention to
              validate UX significance.
            </p>
          </Card>
          <Card svgid="stage01" className="stage01">
            <div className="stageHeader">
              <span>Question & Verify</span>
              <h2>Stage 1 </h2>
            </div>
            <h3>Understanding the goal</h3>
            <p>
              We address the purpose of the product and ensure that it is in
              line with both the company's values and the customer's needs.
            </p>
            <h4>Why</h4>
            <p>
              Understanding the importance and origin of the product or feature.
            </p>
            <h4>How</h4>
            <p>
              Does it benefit the customers? Does it extend the company's
              mission?
            </p>
            <h4>What</h4>
            <p>
              Are we building the right thing? Which problem are we trying to
              solve?
            </p>
          </Card>
          <Card svgid="stage02" className="stage02">
            <div className="stageHeader">
              <span>Discover & Define</span>
              <h2>Stage 2</h2>
            </div>
            <h3>Determine the challenge</h3>
            <p>
              Through research and analysis, we identify and clarify
              user-centric challenges.
            </p>
            <h4>Empathize</h4>
            <p>
              Learning about the people for whom I design. In dialogue with
              users, customers, stakeholders, and team members.
            </p>
            <h4>Analyze</h4>
            <p>
              Looking into existing data such as tracking, market research to
              gain quantitative knowledge about the product.
            </p>
            <h4>Evaluate</h4>
            <p>
              Gathering insights from hard (data) and soft (experience) facts
              can help me to define the challenge in a different way.
            </p>
          </Card>
          <Card svgid="stage03" className="stage03">
            <div className="stageHeader">
              <span>Develop & Deliver</span>
              <h2>Stage 3</h2>
            </div>
            <h3>Provide a solution</h3>
            <p>
              Brainstorming leads to innovative designs, which we prototype and
              test for optimal user experience.
            </p>
            <h4>Brainstorm</h4>
            <p>
              By providing different solutions to the clearly defined challenge
              via the HMW question. Also seeking inspiration from elsewhere and
              co-designing with a range of different people with the help of
              sessions or workshops (e.g. LDJ).
            </p>
            <h4>Creating a prototype</h4>
            <p>
              Exploring possible ideas for structures, functionalities, and
              visual elements and translate them into interface prototypes.
            </p>
            <h4>Testing a prototype</h4>
            <p>
              Testing before building the product is essential. Depending on
              product, feature, and deadline I apply different testing methods
              to minimize any potential flaws or to further optimize the
              customer experience.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WhatIDo;

export const Head: HeadFC = () => (
  <>
  <meta charSet="UTF-8"></meta>
  <html lang="en" />
  <title>What I do</title>
  <meta
      name="description"
      content="Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."
    />
  
  </>
) ;
