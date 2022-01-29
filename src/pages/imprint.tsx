import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Imprint({ data }) {
  return (
    <Layout seo={{ title: 'Imprint' }}>
      <article id='imprint'>{data.content.text}</article>
    </Layout>
  );
}

export const query = graphql`
  query {
    content: contentfulImprint {
      text
    }
  }
`;
