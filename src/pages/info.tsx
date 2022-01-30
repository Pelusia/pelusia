import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';
import instagram from 'images/instagram.svg';
import email from 'images/email.svg';
import youtube from 'images/youtube.svg';

const mapLinkIdsToIcons = {
  email,
  instagram,
  youtube,
};

export default function Info({ data }) {
  const { site, about } = data;
  const { shortTitle, links } = site.siteMetadata;
  const { html } = about.childMarkdownRemark;
  return (
    <Layout seo={{ title: 'About' }}>
      <section id='info' className='position-relative d-inline-block mt-3 me-0 ms-auto'>
        <div className='position-absolute content'>
          <h1 className='mb-4'>{shortTitle}</h1>
          <div
            className='bio mb-4'
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
          <ul className='list-unstyled d-flex justify-content-center'>
            {links.map((link) => {
              return (
                <li>
                  <a href={link.href} about='_blank' rel='noreferrer noopener'>
                    <img
                      src={mapLinkIdsToIcons[link.name.toLowerCase()]}
                      className='link-icon w-100 me-4'
                      alt={`${link.name} icon`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        shortTitle
        links {
          href
          name
        }
      }
    }
    about: contentfulAboutBioTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`;
