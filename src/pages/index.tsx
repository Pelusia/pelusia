import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Gif from 'components/Gif';

export default function Index({ data, location }) {
  const { allContentfulProject } = data;
  const projects = allContentfulProject.edges.map(({ node }) => node);

  return (
    <Layout location={location} seo={{}}>
      <section id='projects'>
        <ul className='list-unstyled'>
          {projects.map((project, i) => {
            const { title, exhibition, location, date, description, displayType, pictures } = project;
            console.log(project);
            return (
              <li key={i} className='project'>
                <h2 className='visually-hidden'>{title}</h2>
                <div className='container-fluid'>
                  <ul className='row list-unstyled'>
                    {pictures.map((pic) => {
                      if (pic.file.contentType.includes('gif')) {
                        return (
                          <li className='col'>
                            <Gif
                              url={pic.file.url}
                              alt={`${project.title} project animated picture`}
                              className='pic-max-height'
                            />
                          </li>
                        );
                      } else {
                        return (
                          <li className='col'>
                            <GatsbyImage
                              objectFit='contain'
                              image={getImage(pic)}
                              alt={`${project.title} project picture`}
                              className='pic-max-height'
                            />
                          </li>
                        );
                      }
                    })}
                    <li className='col'>
                      <p className='details'>
                        {exhibition ? <span className='exhibition me-2'>{exhibition},</span> : null}
                        {location ? <span className='location me-2'>{location},</span> : null}
                        <span className='date me-2'>{date}</span>
                      </p>
                      <p
                        className='description'
                        dangerouslySetInnerHTML={{
                          __html: description.childMarkdownRemark.html,
                        }}
                      />
                    </li>
                  </ul>
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
