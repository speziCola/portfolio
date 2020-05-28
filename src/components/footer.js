import React from "react";
import Link from "gatsby-link";

import ThemeButton from "../components/theme-button";

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__theme__mobile">
        <ThemeButton />
      </div>
    </div>
  </footer>
);

export default Footer;
