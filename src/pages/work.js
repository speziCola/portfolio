import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import WorkPreview from "../components/WorkPreview";
import Footer from "../components/footer";

import mobileseatmap from "../images/projects/thumbnail-mobile-seat-map-075.jpg";
import shopconfigurator from "../images/projects/thumbnail-shop-configurator-075.jpg";
import ticketresale from "../images/projects/thumbnail-ticket-resale-075.jpg";
import imageperformance from "../images/projects/thumbnail-image-performance-075.jpg";


const Work = () => (
  <Layout>
    <Helmet
      title="Chris Kuhrt - Projects"
      meta={[
        { name: "description", content: "Work" },
        { name: "keywords", content: "Work" },
      ]}
    ></Helmet>
    <Navbar></Navbar>
    {/* Header */}
    <header>
      <h1 className="title-1">Work</h1>
    </header>
    {/* Content */}
    <div className="container">
      <WorkPreview
        title="Ticket resale"
        subtitle="Case study"
        info="
              Integrating a secondary ticket market into a white labeling ticketing system.
              Our product increased the sale and purchase of resale tickets of our clients up to 200%.
            "
        img={ticketresale}
        alt="Ticket resale"
        url="https://uxfol.io/project/04b91a34/Ticket-ReSale"
        type="external"
        password=""
      ></WorkPreview>

      <WorkPreview
        title="Mobile seat map redesign"
        subtitle="Case study"
        info="
              Optimizing the UX/UI without big code changes. Furthermore, the new generic design
              for our white labeling shops allows different views depending on given settings.
            "
        img={mobileseatmap}
        alt="Mobile seat map redesign"
        url="https://uxfol.io/project/04249acc/Mobile-seat-map-redesign"
        type="external"
        password=""
      ></WorkPreview>

      <WorkPreview
        title="Shop-configurator"
        subtitle="Case study"
        info="
              Sorting settings and providing an easy scalable UI for additional options and features.
              By adding a wizard it became super easy to set up a new shop within 2 minutes.
            "
        img={shopconfigurator}
        alt="Shop-configurator"
        url="https://uxfol.io/project/0485a1c7/Shop-configurator"
        type="external"
        password=""
      ></WorkPreview>

      <WorkPreview
        title="Reducing image sizes"
        subtitle="UX/Frontend"
        info="
              Increase your conversion rate and revenue by optimizing your images.
              It can cut the size of images to load up to 70%.
            "
        img={imageperformance}
        alt="Performance on images"
        url="https://medium.com/@chriskuhrt/increase-your-conversion-rate-and-revenue-by-optimizing-your-images-449a97929e9b"
        type="external"
        password="no-lock"
      ></WorkPreview>
    </div>
    {/* Footer */}
    <Footer></Footer>
  </Layout>
);

export default Work;
