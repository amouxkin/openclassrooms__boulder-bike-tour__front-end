/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.global\.s(a|c)ss$/,
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        path: "./"
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        develop: true, // Enable on `gatsby develop`
      },
    }
  ]

}
