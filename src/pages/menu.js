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
    <div className="ck-header">
      <h1 className="ck-h1">Menu</h1>
    </div>
    {/* Header */}
    <div className="ck-container">
      <ul className="mobile-menu">
        <li>
          <Link className="menu" to="/work/">Work</Link>
        </li>
        <li>
          <Link className="menu" to="/timeline/">Timeline</Link>
        </li>
        <li>
          <Link className="menu" to="/about/">About</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Menu;