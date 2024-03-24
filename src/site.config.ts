import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Joshua Chu",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "Joshua Chu",
  // Meta property used as the default description meta property
  description:
    "Joshua's personal brain dump garden. A safe space to express and offer a different perspective about life and programming.",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-GB",
  ogLocale: "en_GB",
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
};

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  // One dark, one light theme => https://expressive-comin-lighte.com/guides/themes/#available-themes
  themes: ["nord", "min-light"],
  useThemedScrollbars: false,
  styleOverrides: {
    frames: {
      frameBoxShadowCssValue: "none",
    },
    uiLineHeight: "inherit",
    codeFontSize: "0.875rem",
    codeLineHeight: "1.7142857rem",
    borderRadius: "4px",
    codePaddingInline: "1rem",
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
  },
};
