import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import React from 'react'


import { currentThemeName } from "../components/theme" 

import "../layout/style.scss"

const Layout = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
        <div id="theme" className={currentThemeName}>
          <div className="container">
            <main>{children}</main>
          </div>
        </div> 
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
