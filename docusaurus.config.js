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
            docId: 'client-libraries',
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
      sidebar: [
        {
          type: 'link',
          href: '/docs/client-libraries',
          label: 'Client Libraries',
        },
        {
          type: 'link',
          href: '/docs/authentication',
          label: 'Authentication',
        },
        {
          type: 'category',
          href: '/docs/auth-service',
          label: 'Auth Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/auth-service/confirm',
              label: 'Confirm',
            },
            {
              type: 'link',
              href: '/docs/auth-service/login',
              label: 'Login',
            },
            {
              type: 'link',
              href: '/docs/auth-service/refresh',
              label: 'Refresh',
            },
            {
              type: 'link',
              href: '/docs/auth-service/reset-password',
              label: 'Reset Password',
            },
            {
              type: 'link',
              href: '/docs/auth-service/update-password',
              label: 'Update Password',
            },
            {
              type: 'link',
              href: '/docs/auth-service/update-uipassword',
              label: 'Update UIPassword',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/babel-service',
          label: 'Babel Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/babel-service/notify',
              label: 'Notify',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/blockchain-service',
          label: 'Blockchain Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/blockchain-service/get',
              label: 'Get',
            },
            {
              type: 'link',
              href: '/docs/blockchain-service/list',
              label: 'List',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/command-service',
          label: 'Command Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/command-service/create',
              label: 'Create',
            },
            {
              type: 'link',
              href: '/docs/command-service/get',
              label: 'Get',
            },
            {
              type: 'link',
              href: '/docs/command-service/pending',
              label: 'Pending',
            },
            {
              type: 'link',
              href: '/docs/command-service/update',
              label: 'Update',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/discovery-service',
          label: 'Discovery Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/discovery-service/services',
              label: 'Services',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/host-provision-service',
          label: 'Host Provision Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/host-provision-service/create',
              label: 'Create',
            },
            {
              type: 'link',
              href: '/docs/host-provision-service/get',
              label: 'Get',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/host-service',
          label: 'Host Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              href: '/docs/host-service/create',
              label: 'Create',
            },
            {
              type: 'link',
              href: '/docs/host-service/delete',
              label: 'Delete',
            },
            {
              type: 'link',
              href: '/docs/host-service/get',
              label: 'Get',
            },
            {
              type: 'link',
              href: '/docs/host-service/list',
              label: 'List',
            },
            {
              type: 'link',
              href: '/docs/host-service/provision',
              label: 'Provision',
            },
            {
              type: 'link',
              href: '/docs/host-service/update',
              label: 'Update',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/inovation-service',
          label: 'Inovation Service',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/inovation-service/accept',
              label: 'Accept',
            },
            {
              type: 'link',
              href: '/docs/inovation-service/create',
              label: 'Create',
            },
          ],
        },
        {
          type: 'category',
          href: '/docs/tutorial',
          label: 'Tutorial Intro',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'link',
              href: '/docs/tutorial/tutorial-extras',
              label: 'Tutorial - Extras',
            },
            {
              type: 'link',
              href: '/docs/tutorial/tutorial-basics',
              label: 'Tutorial - Basics',
            },
          ],
        },
      ],

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
