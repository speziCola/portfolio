import { Link } from "gatsby";
import React from "react";
import './navBar.css';

interface NavBarProps {
  className?: string; // This prop is for adding a class to the div
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <>
      <nav className={className}>
        <ul>
          <li>
            <Link to="/whatIdo">What I do</Link>
          </li>
          <li>
            <Link to="/timeline">Timeline</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;