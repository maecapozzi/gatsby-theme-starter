module.exports = ({ contentPath = "static-pages", basePath = "/" }) => ({
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: "StaticPage"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: contentPath
      }
    }
  ]
});
