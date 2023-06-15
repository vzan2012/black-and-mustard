/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // The unique name for each instance
        name: "markup-files",
        // Path to the directory
        path: `${__dirname}/src/markup-files/`,
      },
    },
  ],
  siteMetadata: {
    title: "Page Title",
    description: "Page Description",
    copyright: "Copyright (c) 2023 - Black and Mustard",
  },
};
