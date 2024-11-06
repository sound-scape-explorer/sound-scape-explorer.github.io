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
  CSE_GITHUB,
  CSE_REPOSITORY,
  SSE_GITHUB,
  SSE_REPOSITORY,
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
          versions: {
            CSE: {
              banner: 'none',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${APP_ORG}/${APP_REPO}/tree/main/`,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          onUntruncatedBlogPosts: 'ignore',
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
            href: '/img/logo.png',
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
    image: 'img/demo.png',
    // announcementBar: {
    //   id: 'v13.8.0',
    //   content: 'New version 13.8.0 released!',
    // },
    navbar: {
      title: APP_NAME,
      logo: {
        alt: `${APP_DESCRIPTION} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          // dropdownItemsBefore: [
          //   {
          //     type: 'docsVersion',
          //     value: 'CSE',
          //     label: 'CSE',
          //     to: '/docs/CSE/',
          //   },
          //   {type: 'html', value: '<hr />'},
          // ],
        },
        {to: '/docs/', label: 'Docs', position: 'left'},
        {to: '/blog/', label: 'Blog', position: 'left'},
        {
          href: 'https://sound-scape-explorer.github.io/sound-scape-explorer',
          label: 'Visualise',
          position: 'left',
        },
        {
          href: 'https://github.com/sound-scape-explorer/sound-scape-explorer/issues',
          label: 'Issues',
          position: 'right',
        },
        {
          href: SSE_GITHUB,
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
              to: '/docs/',
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
              label: 'Docs repository',
              href: APP_GITHUB,
            },
            {
              label: 'SSE repository',
              href: SSE_GITHUB,
            },
            {
              label: 'SSE changelog',
              href: SSE_REPOSITORY,
            },
            {
              label: 'CSE repository',
              href: CSE_GITHUB,
            },
            {
              label: 'CSE changelog',
              href: CSE_REPOSITORY,
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
