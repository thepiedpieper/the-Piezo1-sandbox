import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "the Piezo1 sandbox",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://thepiedpieper.github.io/the-Piezo1-sandbox",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "EB Garamond",     // A magnificent, vintage academic serif for titles
        body: "Source Serif 4",              // A beautiful, highly readable literary serif for note text
        code: "JetBrains Mono",    // Clean, crisp monospace for technical terms
      },
      colors: {
        lightMode: {
          light: "#fbf9f4",        // Warm parchment/antique paper
          lightgray: "#e8e4d8",    // Faded book-binding edge
          gray: "#8c8573",         // Aged iron-gall ink / sepia gray
          dark: "#2e2b24",         // Deep roasted-coffee black for text
          darkgray: "#1c1a16",     // Midnight ink for prominent headers
          highlight: "rgba(107, 120, 95, 0.12)", // Faded pressed-leaf green
          textHighlight: "#f3dfa2", // Antique gold-leaf highlight
        },
        darkMode: {
          light: "#121511",        // Deep, moody forest charcoal / velvet moss
          lightgray: "#222720",    // Muted spruce / dark soil border
          gray: "#b3eb97",         // Sage-tinted slate for meta text
          dark: "#a5ffaec9",         // Soft alabaster / aged bone text
          darkgray: "#fff0b9",     // Warm cream for crisp, striking headers
          highlight: "rgba(122, 140, 105, 0.18)", // Elegant botanical olive highlight
          textHighlight: "rgba(212, 163, 89, 0.25)", // Warm burnished amber
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
