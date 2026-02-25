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

export async function getAllPosts() {
  const client = getClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blog",
      order: ["-fields.publishedDate"],
    });

    return entries.items.map((item) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      coverImage: item.fields.coverImage?.fields?.file?.url
        ? `https:${item.fields.coverImage.fields.file.url}`
        : null,
      tags: item.fields.tags || [],
      publishedDate: item.fields.publishedDate,
    }));
  } catch (error) {
    console.error("Contentful getAllPosts error:", error.message);
    return [];
  }
}

export async function getPostBySlug(slug) {
  const client = getClient();
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
      limit: 1,
    });

    if (!entries.items.length) return null;

    const item = entries.items[0];
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
