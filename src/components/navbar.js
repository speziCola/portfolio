import React from "react";
import Link from "gatsby-link";

import ThemeButton from "../components/theme-button";

import menu from '../../src/images/icons/menu.svg';

const Navbar = () => (
  <nav className="c-navbar">
    <Link to="/" className="c-navbar__logo" aria-label="Homelink"></Link>
    <ul>
      <li>
        <Link className="c-navbar__link" to="/work/">Work</Link>
      </li>
      <li>
        <Link className="c-navbar__link" to="/whatido/">What I do</Link>
      </li>
      <li>
        <Link className="c-navbar__link" to="/timeline/">Timeline</Link>
      </li>
      <li>
        <Link className="c-navbar__link" to="/about/">About</Link>
      </li>
      <li>
        <Link className="c-navbar__menu" to="/menu/" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1875 17.4844H15.5625V15.6562H3.1875V17.4844ZM3.18921 12.8799H21.5624V11.0733H3.18921V12.8799ZM3.1875 8.31938H21.5607V6.46875H3.1875V8.31938Z"/>
        </svg>
        </Link>
      </li>
      <li className="c-footer__theme__mobile">
        <ThemeButton />
      </li>
    </ul>
  </nav>
);

export default Navbar;
