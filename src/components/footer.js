import React from "react";
import Link from "gatsby-link";

import ThemeButton from "../components/theme-button";

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <p className="footer__credit">
        © 2008 - 2020 <Link to="/imprint/">Imprint</Link>
      </p>
      <div className="footer__theme__mobile">
        <ThemeButton />
      </div>
    </div>
  </footer>
);

export default Footer;
