import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';

export default function Info({ data }) {
  const { html } = data.about.childMarkdownRemark;
  return (
    <Layout seo={{ title: 'About' }}>
      <article id='info'>
        <section
          className='bio'
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></section>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    about: contentfulAboutBioTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`;
