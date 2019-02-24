module.exports = {
  pathPrefix: "/blog",
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
