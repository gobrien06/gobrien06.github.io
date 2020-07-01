module.exports = {
  siteMetadata: {
    title: `Gabrielle O'Brien`,
    description: `Fullstack engineer based in Irvine, California. Reimagining how we `,
    author: `@gobrien06`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#004CBB `,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`,`500`,`600`, `700`,`800`]
          },
        ],
      },
    }
  ]
}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

