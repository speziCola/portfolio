import React, { useEffect } from 'react';
import { Link } from "gatsby"
import "./header.css";

import NavBar from "../navBar/navBar";
import CKLogo from "../../images/ck-logo.svg";
import Menu from "../../images/icon-menu.svg";

const Header: React.FC = () => {
  return (
    <>
      <header className="gridWrapper">
        <div className="headerContainer">
        <Link className="homeLink" to="/"><img src={CKLogo} alt="Christopher Kuhrt"></img></Link>
        <Link className="menuLink" to="/mobileMenu"><img src={Menu} alt="Menu"></img></Link>
        <NavBar className="navBarDesktop" />
        </div>
      </header>
    </>
  );
};

export default Header;