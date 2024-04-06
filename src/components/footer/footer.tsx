import React from "react";
import { Link } from "gatsby"
import "./footer.css";

import Credits from "../credits/credits";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="gridWrapper">
        <div className="contentContainer contentContainer--footer">
          <div className="width--half">
            <h3>You can find me on</h3>
            <ul className="listSocial">
              <li>
                <a href="http://linkedin.chriskuhrt.de/" aria="LinkedIn">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="http://xing.chriskuhrt.de/" aria="Xing">
                  Xing
                </a>
              </li>
              <li>
                <a href="http://www.polywork.com/chriskuhrt" aria="Polywork">
                  Polywork
                </a>
              </li>
              <li>
                <a href="http://twitter.chriskuhrt.de/" aria="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="http://git.chriskuhrt.de/" aria="Github">
                  Github
                </a>
              </li>
              <li>
                <a href="http://medium.chriskuhrt.de/" aria="Medium">
                  Medium
                </a>
              </li>
              <li>
                <a href="http://500px.chriskuhrt.de/" aria="500px">
                  500px
                </a>
              </li>
              <li>
                <a href="http://vimeo.chriskuhrt.de/" aria="Vimeo">
                  Vimeo
                </a>
              </li>
            </ul>
          </div>
          <div className="width--half">
            <h3>Passion & Projects</h3>
            <ul className="listProjects">
              <li>
                <a href="http://uxfreiburg.de/" aria="UX Freiburg">
                  UX Freiburg
                </a>
              </li>
              <li>
                <a href="http://pixelbricks.de/" aria="Pixelbricks">
                  Pixelbricks
                </a>
              </li>
            </ul>
          </div>
          <div className="width--full">    
            <Credits /> 
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
