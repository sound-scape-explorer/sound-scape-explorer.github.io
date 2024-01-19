import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import lunrSearch from 'docusaurus-lunr-search';
import {themes as prismThemes} from 'prism-react-renderer';

import {
  APP_BASE_URL,
  APP_DEPLOY_BRANCH,
  APP_DESCRIPTION,
  APP_DISCORD_INVITE,
  APP_DOMAIN,
  APP_GITHUB,
  APP_GITHUB_DISCUSSIONS,
  APP_NAME,
  APP_ORG,
  APP_REPO,
  APP_TAGLINE,
  CODE_CHANGELOG,
  CODE_GITHUB,
} from './constants';

const config: Config = {
  title: APP_DESCRIPTION,
  tagline: APP_TAGLINE,
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: APP_DOMAIN,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: APP_BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: APP_ORG, // Usually your GitHub org/user name.
  projectName: APP_REPO, // Usually your repo name.
  deploymentBranch: APP_DEPLOY_BRANCH,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${APP_ORG}/${APP_REPO}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${APP_ORG}/${APP_REPO}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-N0MEV8451P',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    lunrSearch,
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/demo.png',
    navbar: {
      title: APP_NAME,
      logo: {
        alt: `${APP_DESCRIPTION} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          type: 'docsVersionDropdown',
        },
        {to: '/docs', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://sound-scape-explorer.github.io/sound-scape-explorer',
          label: 'Visualise',
          position: 'left',
        },
        {
          href: 'https://github.com/sound-scape-explorer/sound-scape-explorer/issues/new/choose',
          label: 'Issues',
          position: 'right',
        },
        {
          href: APP_GITHUB,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
            {
              label: 'Contributing guidelines',
              to: '/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: APP_GITHUB_DISCUSSIONS,
            },
            {
              label: 'Discord',
              href: APP_DISCORD_INVITE,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: APP_GITHUB,
            },
            {
              label: `${APP_NAME} repository`,
              href: CODE_GITHUB,
            },
            {
              label: `${APP_NAME} changelog`,
              href: CODE_CHANGELOG,
            },
          ],
        },
      ],
      copyright: 'Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
