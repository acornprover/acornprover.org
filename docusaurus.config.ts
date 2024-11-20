import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "The Acorn Theorem Prover",
  tagline: "Perfectly rigorous mathematics, as simple as possible.",
  favicon: "img/achy64.png",

  url: "https://acornprover.org",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "acornprover", // GitHub org name
  projectName: "acornprover.org", // repo name

  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/acornprover/acornprover.org/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/acornprover/acornprover.org/tree/main/packages/create-docusaurus/templates/shared/",

          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Acorn",
      logo: {
        alt: "Acorn Logo",
        src: "img/achy64.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Language Reference",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Library Reference",
        },
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Community",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/acornprover/acornlib",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/category/tutorial/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/acornprover",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/acornprover",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
