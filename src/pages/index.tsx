import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';
import ProjectComplexLayout from 'components/projects/ProjectComplexLayout';
import Gif from 'components/Gif';
import ProjectSimpleLayout from 'components/projects/ProjectSimpleLayout';
import { simpleFormatString } from 'helpers';

const mapDisplayTypeToLayout = {
  'text-right': ProjectComplexLayout,
  'text-left': ProjectComplexLayout,
  'text-below': ProjectSimpleLayout,
};

export default function Index({ data, location }) {
  const { site, hero, allProjects } = data;
  const projects = allProjects.edges.map(({ node }) => node);

  return (
    <Layout location={location} seo={{}}>
      <section>
        <div id='hero' className='d-flex align-items-center justify-content-center'>
          <Gif className='hero-image' url={hero.gif.file.url} alt='' />
          <h1 className='visually-hidden'>{site.siteMetadata.shortTitle}</h1>
        </div>
      </section>
      <section id='projects'>
        <ul className='list-unstyled'>
          {projects.map((project, i) => {
            const { displayType } = project;
            const displayTypeId = simpleFormatString(displayType);
            const Layout = mapDisplayTypeToLayout[displayTypeId];
            return (
              <li key={i} className='project position-relative'>
                <div className='wrapper position-absolute'>
                  <Layout data={project} textPosition={displayTypeId} />
                </div>
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
    site {
      siteMetadata {
        shortTitle
      }
    }
    hero: contentfulLanding {
      gif {
        file {
          url
        }
      }
    }
    allProjects: allContentfulProject(sort: { fields: date, order: DESC }) {
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
