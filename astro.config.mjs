import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkUnwrapImages from "remark-unwrap-images";
import { expressiveCodeOptions } from "./src/site.config";
import { remarkReadingTime } from "./src/utils/remark-reading-time";
// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow, noopener, noreferrer"],
        },
      ],
    ],
  },
  integrations: [expressiveCode(expressiveCodeOptions)],
  trailingSlash: "never",
});
