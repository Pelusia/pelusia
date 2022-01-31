import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';
import ProjectRightLayout from 'components/projects/ProjectRightLayout';
import Gif from 'components/Gif';
import ProjectBelowLayout from 'components/projects/ProjectBelowLayout';
import { simpleFormatString } from 'helpers';

const mapDisplayTypeToLayout = {
  'text-right': ProjectRightLayout,
  'text-left': ProjectRightLayout,
  'text-below': ProjectBelowLayout,
};

export default function Index({ data, location }) {
  const { site, hero, allProjects } = data;
  const projects = allProjects.edges.map(({ node }) => node);

  return (
    <Layout location={location} seo={{}}>
      <section id='hero'>
        <div className='position-relative w-100 h-100 d-inline-block'>
          <h1 className='visually-hidden'>{site.siteMetadata.shortTitle}</h1>
          <Gif className='hero-image position-absolute' url={hero.gif.file.url} alt='' />
        </div>
      </section>
      <section id='projects'>
        <ul className='list-unstyled'>
          {projects.map((project, i) => {
            const { displayType } = project;
            const Layout = mapDisplayTypeToLayout[simpleFormatString(displayType)];
            return (
              <li key={i} className='project position-relative'>
                <div className='wrapper position-absolute'>
                  <Layout data={project} />
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
