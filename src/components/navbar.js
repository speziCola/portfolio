import React from "react";
import Link from "gatsby-link";

import ThemeButton from "../components/theme-button";

import menu from '../../src/images/icons/menu.svg';

const Navbar = () => (
  <nav>
    <Link to="/" className="logo" aria-label="Homelink"></Link>
    <ul>
      <li>
        <Link className="menu" to="/work/">Work</Link>
      </li>
      <li>
        <Link className="menu" to="/timeline/">Timeline</Link>
      </li>
      <li>
        <Link className="menu" to="/about/">About</Link>
      </li>
      <li className="mobile-menu">
        <Link to="/menu/" aria-label="Menu">
          <img className="social-icon" src={menu} alt="menu" />
        </Link>
      </li>
      <div className="ck_footer__theme__desktop">
        <ThemeButton />
      </div>
    </ul>
  </nav>
);

export default Navbar;
