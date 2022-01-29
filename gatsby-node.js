exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
        type ContentfulProject implements Node {
            link: String
        }
    `;
  createTypes(typeDefs);
};
