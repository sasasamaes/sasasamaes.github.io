import "./blog.css";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPosts } from "@/lib/contentful";
import PostCard from "@/components/blog/PostCard";

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

  return (
    <Container className="blog-listing">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Blog</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      {posts.length === 0 ? (
        <p>No posts yet. Check back soon!</p>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (<PostCard key={post.slug} post={post} />))}
        </div>
      )}
    </Container>
  );
}
