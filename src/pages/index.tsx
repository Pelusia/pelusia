import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'components/Layout';

export default function Index({ data, location }) {
  const seo = { tagline: '' };

  return (
    <Layout location={location} seo={seo}>
      <article id='about'>
        <div className='bio'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sunt omnis voluptatibus blanditiis
          voluptatum excepturi magni impedit ducimus rem, corporis odio et. Veniam mollitia quam ducimus quis reiciendis
          dolor consequuntur nihil culpa perferendis cupiditate porro corrupti sed expedita debitis nesciunt sit quaerat
          necessitatibus placeat repellat, eius ullam doloribus at reprehenderit. Ad facere consectetur ipsum quibusdam.
          Tempora distinctio repellendus delectus porro.
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        links {
          name
          href
        }
      }
    }
  }
`;
