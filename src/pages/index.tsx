import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';

export default function Index({ data, location }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout location={location} seo={{}}>
      <section id='projects'>
        {projects.map((project, i) => (
          <div key={i}>
            <h2>{project.title}</h2>
            <a href={project.link}>{project.link}</a>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          exhibition
          location
          date
          description {
            childMarkdownRemark {
              html
            }
          }
          link
          displayType
          pictures {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
