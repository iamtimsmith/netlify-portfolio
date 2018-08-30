const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = boundActionCreators;
    node.collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              collection
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.collection == "work") {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/portfolioPage/index.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug
            }
          });
        } else if (node.collection == "blog") {
          createPage({
            path: `/blog${node.fields.slug}`,
            component: path.resolve(`./src/templates/blogPost/index.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: `${node.fields.slug}`
            }
          });
        }
      });
      resolve();
    });
  });
};
