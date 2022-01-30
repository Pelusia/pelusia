import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';
import ProjectRightLayout from 'components/projects/ProjectRightLayout';

const mapDisplayTypeToLayout = {
  'text-right': ProjectRightLayout,
  'text-left': ProjectRightLayout,
  'text-bellow': ProjectRightLayout,
};

export default function Index({ data, location }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout location={location} seo={{}}>
      <section id='projects'>
        <ul className='list-unstyled'>
          {projects.map((project, i) => {
            const { displayType } = project;
            const Layout = mapDisplayTypeToLayout['text-right'];
            return (
              <li key={i} className='project'>
                <Layout data={project} />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          titleGif {
            file {
              url
            }
          }
          exhibition
          location
          date(formatString: "MMMM YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
          displayType
          pictures {
            gatsbyImageData
            file {
              contentType
              url
            }
          }
        }
      }
    }
  }
`;
