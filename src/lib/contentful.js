import { createClient } from "contentful";

function getClient() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (
    !spaceId ||
    !accessToken ||
    spaceId.startsWith("your_") ||
    accessToken.startsWith("your_")
  ) {
    return null;
  }

  return createClient({
    space: spaceId,
    accessToken: accessToken,
  });
}

// Map next-intl locales to Contentful locales
const LOCALE_MAP = {
  en: "en-US",
  es: "es-419",
};

function getContentfulLocale(locale) {
  return LOCALE_MAP[locale] || "en-US";
}

function mapItem(item) {
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    coverImage: item.fields.coverImage?.fields?.file?.url
      ? `https:${item.fields.coverImage.fields.file.url}`
      : null,
    tags: item.fields.tags || [],
    publishedDate: item.fields.publishedDate,
  };
}

export async function getAllPosts(locale = "en") {
  const client = getClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blog",
      order: ["-fields.publishedDate"],
      locale: getContentfulLocale(locale),
    });

    return entries.items.map(mapItem);
  } catch (error) {
    console.error("Contentful getAllPosts error:", error.message);
    return [];
  }
}

export async function getPostBySlug(slug, locale = "en") {
  const client = getClient();
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
      limit: 1,
      locale: getContentfulLocale(locale),
    });

    if (!entries.items.length) return null;
    return mapItem(entries.items[0]);
  } catch (error) {
    console.error("Contentful getPostBySlug error:", error.message);
    return null;
  }
}

export async function getAllSlugs() {
  const client = getClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blog",
      select: ["fields.slug"],
    });

    return entries.items.map((item) => item.fields.slug);
  } catch (error) {
    console.error("Contentful getAllSlugs error:", error.message);
    return [];
  }
}
