import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from './Navigation';
import SEO, { SEOProps } from './SEO';
import Footer from './Footer';

type Props = {
  children?: React.ReactNode;
  seo?: SEOProps;
  location?: any;
};

export default function Layout({ location, children, seo }: Props) {
  const { site } = useStaticQuery(query);
  const { navigation, shortTitle, license, links } = site.siteMetadata;

  return (
    <div id='layout'>
      <SEO title={seo?.title} tagline={seo?.tagline} description={seo?.description} image={seo?.image} />
      <div className='d-flex flex-column flex-lg-row px-3 px-lg-4 pt-lg-5'>
        <div className='col-lg-auto'>
          <Navigation brand={shortTitle} links={navigation} location={location} />
        </div>
        <div className='col'>
          <main id='content' className='container position-relative m-0 px-0 py-2 py-lg-0'>
            {children}
            <Footer title={shortTitle} links={links} />
          </main>
        </div>
      </div>
    </div>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        shortTitle
        navigation
        license
        links {
          name
          href
        }
      }
    }
  }
`;
