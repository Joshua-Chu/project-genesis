import GeistSans from "@/assets/geist-sans-latin-400-normal.ttf";
import GeistSansBold from "@/assets/geist-sans-latin-700-normal.ttf";
import { siteConfig } from "@/site-config";
import { getAllArticles } from "@/utils/data";
import { getFormattedDate } from "@/utils/date";
import type { APIContext, InferGetStaticPropsType } from "astro";
import { readFile } from "node:fs/promises";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import sharp from "sharp";

const markup = (title: string, pubDate: string) =>
  html`<div
    style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #121212; color: #a4a4a4;"
  >
    <div
      style="display: flex; flex-direction: column; justify-content: center; flex: 1 1 0%; width: 100%; padding: 2.5rem;"
    >
      <p style="font-size: 1.5rem; line-height: 2rem; margin-bottom: 1.5rem;">
        ${pubDate}
      </p>
      <h1
        style="font-size: 3.75rem; font-weight: 700; line-height: 1.375; color: #fff;"
      >
        ${title}
      </h1>
    </div>
    <div
      style="display: flex; align-items: center; justify-content: space-between; padding: 2.5rem; border-top: 1px solid #fef08a; font-size: 1.25rem;"
    >
      <div style="display: flex; align-items: center;">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 376.277 376.277"
          xml:space="preserve"
          height="60"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                style="fill:#B27214;"
                d="M339.114,274.035c26.58-2.67,40.36,30.68,19.52,47.38c-4.7,3.77-9.56,7.34-14.57,10.71 L339.114,274.035z"
              ></path>
              <path
                style="fill:#B27214;"
                d="M54.864,17.645c16.7-20.84,50.05-7.06,47.38,19.51c-0.73,7.19-1.1,14.48-1.1,21.86l-61.21-20.26 C44.494,31.415,49.484,24.365,54.864,17.645z"
              ></path>
              <path
                style="fill:#F7B239;"
                d="M339.114,274.035l4.95,58.09c-34.42,23.15-75.86,36.65-120.45,36.65 c-119.69,0-216.11-96.42-216.11-216.11c0-41.81,11.87-80.84,32.43-113.91l61.21,20.26c0,119.27,96.84,216.12,216.12,216.11 C324.644,275.125,331.934,274.755,339.114,274.035z"
              ></path>
              <path
                style="fill:#E09B2D;"
                d="M54.002,152.666c0-36.481,9.039-70.844,25-100.979L39.934,38.756 c-20.56,33.07-32.43,72.1-32.43,113.91c0,119.69,96.42,216.11,216.11,216.11c7.843,0,15.586-0.426,23.214-1.241 C138.162,355.984,54.002,264.486,54.002,152.666z"
              ></path>
              <path
                style="fill:#FFFFFF;"
                d="M250.505,296.224c-0.69,0-1.393-0.096-2.089-0.297c-39.542-11.444-76.026-33.077-105.509-62.56 c-33.14-33.14-56.039-74.548-66.222-119.749c-0.91-4.041,1.628-8.055,5.668-8.965c4.042-0.909,8.055,1.627,8.965,5.668 c9.559,42.428,31.065,81.309,62.195,112.439c27.697,27.697,61.956,48.015,99.072,58.757c3.979,1.151,6.271,5.31,5.119,9.289 C256.756,294.089,253.758,296.224,250.505,296.224z"
              ></path>
              <circle
                style="fill:#FFFFFF;"
                cx="78.567"
                cy="79.428"
                r="7.5"
              ></circle>
              <g>
                <path
                  style="fill:#333333;"
                  d="M373.635,287.714c-5.884-14.403-19.741-22.705-35.267-21.138c-6.962,0.7-14.063,1.054-21.107,1.054 c-55.683,0-108.06-21.71-147.482-61.133c-39.423-39.423-61.133-91.8-61.132-147.483c0-7.04,0.355-14.14,1.055-21.105 c1.562-15.54-6.736-29.383-21.139-35.266C74.239-3.208,58.714,0.842,49.007,12.958C17.405,52.404,0,102.019,0,152.664 c0,59.889,23.215,116.087,65.37,158.242c42.154,42.155,98.352,65.371,158.241,65.371c50.646,0,100.262-17.404,139.708-49.007 C375.436,317.563,379.485,302.036,373.635,287.714z M60.713,22.337c4.288-5.352,9.65-7.301,14.631-7.301 c2.706,0,5.299,0.576,7.546,1.493c6.447,2.634,12.955,9.239,11.886,19.88c-0.409,4.069-0.697,8.182-0.885,12.303L51.535,34.694 C54.432,30.49,57.486,26.366,60.713,22.337z M75.977,300.299C36.655,260.978,15,208.547,15,152.664 c0-37.508,9.681-73.26,28.22-104.922l50.493,16.711c1.368,57.654,24.49,111.68,65.459,152.65 c42.256,42.256,98.399,65.527,158.089,65.526c5,0,10.024-0.183,15.018-0.514l3.932,46.219 c-33.51,21.614-72.027,32.942-112.599,32.942C167.729,361.277,115.298,339.621,75.977,300.299z M353.94,315.564 c-1.168,0.936-2.344,1.858-3.527,2.766l-3.085-36.257c6.339,1.738,10.469,6.537,12.42,11.313 C362.355,299.769,362.199,308.947,353.94,315.564z"
                ></path>
                <path
                  style="fill:#333333;"
                  d="M283.778,317.604c-5.679,0.463-11.464,0.698-17.192,0.698c-55.882,0-108.313-21.656-147.635-60.978 c-39.321-39.322-60.976-91.753-60.976-147.636c0-8.267,0.488-16.59,1.451-24.74c0.486-4.113-2.455-7.842-6.568-8.328 c-4.111-0.483-7.842,2.455-8.328,6.568c-1.032,8.731-1.555,17.647-1.555,26.5c0,59.889,23.215,116.087,65.37,158.242 s98.353,65.371,158.241,65.371c6.135,0,12.329-0.251,18.413-0.748c4.128-0.337,7.201-3.957,6.865-8.085 C291.526,320.341,287.903,317.267,283.778,317.604z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <p style="margin-left: 0.75rem; font-weight: 700;">
          ${siteConfig.title}
        </p>
      </div>
      <p>by ${siteConfig.author}</p>
    </div>
  </div>`;

const generateOgImage = async (text: string, date: string): Promise<Buffer> => {
  const options: SatoriOptions = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Roboto Mono",
        data: await readFile(GeistSans),
        weight: 400,
        style: "normal",
      },
      {
        name: "Roboto Mono",
        data: await readFile(GeistSansBold),
        weight: 700,
        style: "normal",
      },
    ],
  };

  const svg = await satori(markup(text, date), options);

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
  const { title, pubDate } = context.props as Props;

  const articleDate = getFormattedDate(pubDate);

  const png = await generateOgImage(title, articleDate);
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export async function getStaticPaths() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: {
      title: article.data.title,
      pubDate: article.data.updatedDate ?? article.data.publishDate,
    },
  }));
}