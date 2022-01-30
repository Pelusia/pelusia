const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const primary = '#ffffff';
const background = '#000000';
const author = 'Pelusia';
const tagline = '';
const siteUrl = 'https://pelusia.com';
const noindex = [
  '/privacy-policy',
  '/privacy-policy/',
  '/imprint',
  '/imprint/',
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
    navigation: ['info'],
    links: [
      { name: 'Email', href: 'starter@gmail.com' },
      { name: 'Instagram', href: 'https://www.instagram.com/_pelusia/' },
      { name: 'SoundCloud', href: 'https://soundcloud.com/user-43112237' },
    ],
    image: '/favicon.png', // image placed in the static folder
    location: { region: 'DE-BE', placename: 'Berlin' },
    country: 'de',
    lang,
    license: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
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
