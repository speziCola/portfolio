import React from "react";
import Link from "gatsby-link";

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
      <li>
        <Link to="/menu/" aria-label="Menu">
          <img className="social-icon mobile-menu" src={menu} alt="menu" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
