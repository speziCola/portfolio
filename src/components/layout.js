import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import React from 'react'

import "../layout/style.scss"
import {ThemeContext} from './theme-context';

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
        <ThemeContext.Consumer>
          {(theme) => (
            <div id="theme" className={theme.theme}>
              <div className="container">
                <main>{children}</main>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
