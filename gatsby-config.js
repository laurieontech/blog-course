module.exports = {
  siteMetadata: {
    title: "Blog Course",
    description: `My personal blog`,
    twitter: `myhandle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
}
