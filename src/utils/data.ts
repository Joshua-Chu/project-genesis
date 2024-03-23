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

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getAllTags(articles: Array<CollectionEntry<"article">>) {
  return articles.flatMap((article) => [...article.data.tags]);
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTags(articles: Array<CollectionEntry<"article">>) {
  return [...new Set(getAllTags(articles))];
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTagsWithCount(
  articles: Array<CollectionEntry<"article">>,
): Array<[string, number]> {
  return [
    ...getAllTags(articles).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>(),
    ),
  ].sort((a, b) => b[1] - a[1]);
}
