import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import "../styles/foundation.css";
import "../styles/index.css";

import Header from "../components/header/header";
import GridLines from "../components/gridlines/gridLines";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="gridContainer">
      <GridLines />
      <Header />
      <main className="gridWrapper">
        <div className="mainContainer">
          <div className="contentIntro">
            <div>
              <h1 className="introHeadline">
                Hi, my name is Chris Kuhrt <br /> I’m a Product Designer based
                in Europe.
              </h1>
              <p className="textIntro">
                I have expertise in both financial and <span>e-commerce</span> sectors.
                <br /> Whether it's selling mass volume, satisfying the tastes
                of high-end enthusiasts, or navigating the complex world of
                finance, my objective is to align the user experience with business
                goals.
              </p>
              <ul>
                <li>
                  <Link to="/whatIdo">
                    What I do
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8"></meta>
    <html lang="en" />
    <title>Chris Kuhrt</title>
    <meta
      name="description"
      content="Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."
    />
  </>
);
