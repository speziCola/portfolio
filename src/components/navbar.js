import React from "react";
import Link from "gatsby-link";

import ThemeButton from "../components/theme-button";

import menu from '../../src/images/icons/menu.svg';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo" aria-label="Homelink"></Link>
    <ul>
      <li>
        <Link className="navbar__link" to="/work/">Work</Link>
      </li>
      <li>
        <Link className="navbar__link" to="/timeline/">Timeline</Link>
      </li>
      <li>
        <Link className="navbar__link" to="/about/">About</Link>
      </li>
      <li className="mobile-menu">
        <Link to="/menu/" aria-label="Menu">
          <img className="social-icon" src={menu} alt="menu" />
        </Link>
      </li>
      <li className="footer__theme__mobile">
        <ThemeButton />
      </li>
    </ul>
  </nav>
);

export default Navbar;
