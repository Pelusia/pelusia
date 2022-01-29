require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const primary = '#37f6ff80';
const background = '#18181b';
const author = 'Gatsby Starter';
const tagline = 'Bootstrap a New Site';
const siteUrl = 'https://www.gatsby_starter.tld';
const noindex = [
  '/imprint-and-privacy-policy/',
  '/imprint-and-privacy-policy',
  '/404',
  '/404/',
  '/offline-plugin-app-shell-fallback/',
];
const lang = 'en';

module.exports = {
  siteMetadata: {
    title: `${author} · ${tagline}`,
    shortTitle: author,
    titleTemplate: `%s · ${author} · ${tagline}`,
    author,
    description: '',
    siteUrl,
    navigation: ['projects'],
    links: [
      { name: 'Email', href: 'starter@gmail.com' },
      { name: 'Instagram', href: 'https://instagram.com/gatsby_starter' },
    ],
    image: '/favicon.png', // image placed in the static folder
    location: { region: 'DE-BE', placename: 'Berlin' },
    country: 'de',
    lang,
    license: '',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        config: path.join(__dirname, 'src/config'),
        helpers: path.join(__dirname, 'src/helpers'),
        styles: path.join(__dirname, 'src/styles'),
        types: path.join(__dirname, 'src/types'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages'),
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: author,
        short_name: author,
        start_url: '/',
        background_color: `${background}`,
        theme_color: `${primary}`,
        display: 'standalone',
        icon: `src/images/favicon.png`,
      },
    },
    'gatsby-plugin-offline', // must stay after plugin-manifest
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/', disallow: noindex }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        excludes: noindex,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: Date.now(),
          };
        },
      },
    },
  ],
};
