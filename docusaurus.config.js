// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EXPLORE. MASTER. TECH. DOCS.',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blockjoy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'blockjoy', // Usually your GitHub org/user name.
  projectName: 'blockjoy.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1020,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {},
      navbar: {
        logo: {
          alt: 'Blockjoy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://blockjoy.com',
            label: 'Blockjoy',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documents',
          },
          {
            href: 'https://app.blockjoy.com/register',
            label: 'Sign Up',
            position: 'right',
          },
          {
            href: 'https://blockjoy.com',
            position: 'right',
            className: 'linkedin-logo',
          },
          {
            href: 'https://blockjoy.com',
            position: 'right',
            className: 'instagram-logo',
          },
          {
            href: 'https://blockjoy.com',
            position: 'right',
            className: 'twitter-logo',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Blockjoy Logo',
          src: 'img/logo.svg',
        },
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'BlockJoy',
                href: 'https://blockjoy.com',
              },
              {
                label: 'Documents',
                href: '/docs/intro',
              },
              {
                label: 'Sign up',
                href: 'https://blockjoy.com/register',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://blockjoy.com',
              },
              {
                label: 'Instagram',
                href: 'https://blockjoy.com',
              },
              {
                label: 'Twitter',
                href: 'https://blockjoy.com',
              },
            ],
          },
        ],
        copyright: 'Copyright © 2021 BlockJoy, LLC. All Rights Reserved.',
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        placeholder: 'Search for documentation',

        //... other Algolia params
      },
    },
};

module.exports = config;
