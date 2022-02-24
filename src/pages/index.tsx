import { graphql } from 'gatsby';
import * as React from 'react';
import classNames from 'classnames';
import Layout from 'components/Layout';
import Gif from 'components/Gif';
import ProjectComplexLayout from 'components/projects/ProjectComplexLayout';
import ProjectSimpleLayout from 'components/projects/ProjectSimpleLayout';
import { getVh, getVw, simpleFormatString } from 'helpers';

const mapDisplayTypeToLayout = {
  'text-right': ProjectComplexLayout,
  'text-left': ProjectComplexLayout,
  'text-below': ProjectSimpleLayout,
};

export default function Index({ data, location }) {
  const { site, hero, allProjects } = data;
  const projects = allProjects.edges.map(({ node }) => node);
  const screenRatio = getVw() - getVh();

  return (
    <Layout location={location} seo={{}}>
      <section>
        <div
          id='hero'
          className={classNames('d-flex align-items-center justify-content-center', {
            'layout-mobile': screenRatio < 0,
          })}
        >
          <Gif className='hero-image' url={hero.gif.file.url} alt='Pelusia webpage title' />
          <h1 className='visually-hidden'>{site.siteMetadata.shortTitle}</h1>
        </div>
      </section>
      <section id='projects'>
        <ul className='list-unstyled'>
          {projects.map((project, i) => {
            const { displayType } = project;
            const displayTypeId = simpleFormatString(displayType);
            const Project = mapDisplayTypeToLayout[displayTypeId];
            return (
              <li
                key={i}
                className={classNames('project container-fluid position-relative gx-0', {
                  'project-layout-simple': displayTypeId === 'text-below',
                  'project-layout-complex': displayTypeId !== 'text-below',
                  'layout-left': displayTypeId === 'text-left',
                  'layout-right': displayTypeId === 'text-right',
                })}
              >
                <h2 className='visually-hidden'>{project.title}</h2>
                <Project data={project} textPosition={displayTypeId} />
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
          activeDescription {
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
          pictureCredit {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
