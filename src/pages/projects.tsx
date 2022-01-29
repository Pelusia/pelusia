import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';

export default function Projects({ data }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);
  console.log(projects);

  return (
    <Layout seo={{ title: 'Projects' }}>
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
          link
        }
      }
    }
  }
`;
