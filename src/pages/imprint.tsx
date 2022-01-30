import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Imprint({ data }) {
  const { html } = data.content.childMarkdownRemark;

  return (
    <Layout seo={{ title: 'Imprint' }}>
      <article
        id='imprint'
        className='text-max-width'
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Layout>
  );
}

export const query = graphql`
  query {
    content: contentfulImprintTextTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`;
