const fs = require("fs");

// 1. Make sure the pages directory exists

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// 2. Define the page type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Section {
      id: String!
      header: String
      description: String
    }
  `);

  actions.createTypes(`
    type StaticPage implements Node @dontInfer {
      id: ID!
      name: String!
      sections: [Section!]!
      slug: String!
    }`);
};

// 3. Define resolvers for any custom fields (slug)

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/";

  const slugify = string => {
    const slug = string
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-%)+/g, "");
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
  };

  createResolvers({
    StaticPage: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  });
};
// 4. Query for pages and create them

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const result = await graphql(`
    query StaticPageQuery {
      allStaticPage {
        edges {
          node {
            id
            name
            sections {
              header
              description
            }
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading static pages", result.errors);
    return;
  }
  const staticPages = result.data.allStaticPage.edges;

  staticPages.forEach(staticPage => {
    actions.createPage({
      path: staticPage.node.slug,
      component: require.resolve("./src/templates/staticPage.js"),
      context: {
        pageId: staticPage.node.id
      }
    });
  });
};
