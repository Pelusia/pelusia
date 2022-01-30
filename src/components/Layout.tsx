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
    <div id='layout position-relative'>
      <div className='px-4 p-0'>
        <SEO title={seo?.title} tagline={seo?.tagline} description={seo?.description} image={seo?.image} />
        <Navigation brand={shortTitle} links={navigation} location={location} />
        <div id='content' className='position-relative'>
          <main className='container-fluid p-0'>{children}</main>
          <Footer title={shortTitle} links={links} />
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
