import { getCollection } from "astro:content";

/** Note: this function filters out draft posts based on the environment */
export const getAllArticles = async () => {
  return await getCollection("article", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
};
