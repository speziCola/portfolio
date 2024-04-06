import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import "../styles/foundation.css";
import "../styles/mobileMenu.css";

import Header from "../components/header/header";
import GridLines from "../components/gridlines/gridLines";
import NavBar from "../components/navBar/navBar";

const MobileMenu: React.FC<PageProps> = () => {
  return (
    <div className="gridContainer">
      <GridLines />
      <Header />
      <main className="gridWrapper menu">
            <NavBar className="navBarMobile" />
      </main>
    </div>
  );
};

export default MobileMenu;

export const Head: HeadFC = () => (
  <>
  <meta charSet="UTF-8"></meta>
  <html lang="en" />
  <title>Menu</title>
  <meta
      name="description"
      content="Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."
    />
  
  </>
) ;

