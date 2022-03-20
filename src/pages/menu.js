import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Layout from "../components/layout";
import Navbar from "../components/navbar";

const Menu = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Menu"
      meta={[
        { name: "description", content: "Menu" },
        { name: "keywords", content: "Menu" }
      ]}
    />
    <header>
      <h1 className="o-title-1">Menu</h1>
    </header>
    <Navbar></Navbar>
    {/* Header */}
    <div className="o-container">
      <ul className="mobile-menu">
       {/*  <li>
          <Link className="mobile-menu__link" to="/work/">Work</Link>
        </li> */}
        <li>
          <Link className="mobile-menu__link" to="/whatido/">What I do</Link>
        </li>
        <li>
          <Link className="mobile-menu__link" to="/timeline/">Timeline</Link>
        </li>
        <li>
          <Link className="mobile-menu__link" to="/about/">About</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Menu;
