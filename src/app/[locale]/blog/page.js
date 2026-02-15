import "./blog.css";
import { getAllPosts } from "@/lib/contentful";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Francisco Campos Diaz",
  description: "Articles about Web3, Blockchain, Full Stack Development, and more.",
};

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch (e) {
    console.error("Failed to fetch posts:", e);
    posts = [];
  }

  return <BlogClient posts={posts} />;
}
