import React from "react";
import Link from "gatsby-link";

import ThemeButton from "../components/theme-button";

const Footer = () => (
  <div className="ck_footer">
    <div className="ck_footer__wrapper">
      <p className="ck_footer__credit">
        © 2008 - 2019 <Link to="/imprint/">Imprint</Link>
      </p>
      <ThemeButton />
    </div>
  </div>
);

export default Footer;
