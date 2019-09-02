import React from "react";
import Link from "gatsby-link";

const Navbar = () => (
  <nav>
    <Link to="/" className="logo" aria-label="Homelink"></Link>
    <ul>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/timeline/">Timeline</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
