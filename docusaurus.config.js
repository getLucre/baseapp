// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lucre",
  tagline: "Crypto Payment Processor",
  url: "https://getlucre.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "getLucre", // Usually your GitHub org/user name.
  projectName: "lucre-baseapp", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/getLucre/lucre-baseapp/tree/main",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/getLucre/lucre-baseapp/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "product",
    //     path: "product",
    //     routeBasePath: "product",
    //     breadcrumbs: false,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "templates",
    //     path: "templates",
    //     routeBasePath: "templates",
    //     breadcrumbs: false,
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: "Lucre Logo",
          src: "img/lucre-logo.png",
          srcDark: "img/lucre-logo.png",
          href: "https://getlucre.xyz/",
          target: '_self',
          className: "logo-adjustment",
        },
        items: [
          // { to: "/pricing", label: "Pricing", position: "left" }, // See https://github.com/easypanel-io/website/tree/main/docs on usage
          // { to: "/docs/guides", label: "Guides", position: "left" }, // create doc folder on the root of the app and place your md files there. it will work. See https://github.com/easypanel-io/website/tree/main/docs
          // { to: "/templates", label: "Templates", position: "left" }, // See https://github.com/easypanel-io/website/tree/main/docs on usage
          // { to: "/blog", label: "Blog", position: "right" }, // See https://github.com/easypanel-io/website/tree/main/docs on usage
          // { to: "/docs", label: "Docs", position: "right" }, // create doc folder on the root of the app and place your md files there. it will work. See https://github.com/easypanel-io/website/tree/main/docs
          // { to: "/features", label: 'Features', position: 'left', className: 'tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-to-cyan-400 tw-from-emerald-600'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Get Started',
            href: 'https://dashboard.getlucre.xyz',
            position: 'right',
            className: 'tw-text-transparent tw-bg-clip-text tw-to-cyan-400 tw-from-emerald-600',
          },
        ],
      },
      footer: {
        logo: {
          alt: "GetLucre Logo",
          src: "img/lucre-logo.svg",
          srcDark: "img/lucre-logo.svg",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Lucre. All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
