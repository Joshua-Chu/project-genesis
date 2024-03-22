import { getCollection, type CollectionEntry } from "astro:content";

/** Note: this function filters out draft posts based on the environment */
export const getAllArticles = async () => {
  return await getCollection("article", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
};

export function sortMDByDate(articles: Array<CollectionEntry<"article">>) {
  return articles.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
