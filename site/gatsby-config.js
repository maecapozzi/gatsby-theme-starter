module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: "gatsby-theme-about-me",
      options: {
        contentPath: "data",
        basePath: "/",
        imagesPath: "images"
      }
    }
  ]
};
