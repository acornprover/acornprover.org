import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Acorn Theorem Prover",
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
            "https://github.com/acornprover/acornprover.org/edit/master/",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/acornprover/acornprover.org/edit/master/",

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
    image: "img/acorn-social-card.jpg",
    navbar: {
      title: "Acorn",
      logo: {
        alt: "Acorn Logo",
        src: "img/achy64.png",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Getting Started",
        },
        {
          type: "doc",
          docId: "/category/tutorial",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "doc",
          docId: "/category/language-reference",
          position: "left",
          label: "Language Reference",
        },
        {
          type: "doc",
          docId: "/category/library-reference",
          position: "left",
          label: "Library Reference",
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
            { label: "Getting Started", to: "/docs/getting-started/" },
            {
              label: "Tutorial",
              to: "/docs/category/tutorial/",
            },
            {
              label: "Language Reference",
              to: "/docs/category/language-reference/",
            },
            {
              label: "Library Reference",
              to: "/docs/category/library-reference/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/acornprover",
            },
            {
              label: "X",
              href: "https://x.com/acornprover",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/acornprover/acornlib",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
