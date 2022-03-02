import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
// import { BlogPost } from "../../types/blogs";

export const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

export const databaseId = process.env.NOTION_BLOG_DATABASE_ID ?? "";
export const n2m = new NotionToMarkdown({ notionClient: notion });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postTranformer = (page: any) => {
    let { cover } = page;
    switch (cover.type) {
        case "file":
            cover = page.cover.file.url;
            break;
        case "external":
            cover = page.cover.external.url;
            break;
        default:
            // Add default cover image if you want...
            cover = "";
    }

    return {
        id: page.id,
        cover,
        title: page.properties.Name.title[0].plain_text,
        // tags: page.properties.Tags.multi_select,
        // description: page.properties.Description.rich_text[0].plain_text,
        // date: page.properties.Updated.last_edited_time,
        // slug: page.properties.Slug.formula.string,
    };
};

export const getAllPosts = async () => {
    const response = await notion.databases.query({
        database_id: "2c7499929e574fea9cd34778a8de47e9",
    });

    return response.results.map(page => postTranformer(page));
};

export const getSinglePost = async (slug: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "slug",
            rich_text: {
                equals: slug,
            },
        },
    });

    const page = response.results[0];
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const markdown = n2m.toMarkdownString(mdBlocks);
    const post = postTranformer(page);

    return {
        post,
        markdown,
    };
};
