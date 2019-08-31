module.exports = {
  pathPrefix: `/projects`,
  siteMetadata: {
    title: `Chris Kuhrt - Product Designer`,
    description: `Just a portfolio.`,
    author: `Chris Kuhrt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chris Kuhrt`,
        short_name: `Chris Kuhrt`,
        start_url: `/`,
        background_color: `#4264fb`,
        theme_color: `#4264fb`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
