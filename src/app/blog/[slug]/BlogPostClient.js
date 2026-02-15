"use client";
import { Container, Row, Col } from "react-bootstrap";
import PostContent from "@/components/blog/PostContent";
import AdBanner from "@/components/blog/AdBanner";
import Link from "next/link";

export default function BlogPostClient({ post }) {
  return (
    <Container>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="10" className="mx-auto">
          <div className="post-header">
            <h1>{post.title}</h1>
            <p className="post-meta">
              {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <div className="post-tags">
              {post.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
            </div>
          </div>
          {post.coverImage && <img src={post.coverImage} alt={post.title} className="post-cover" />}
          <AdBanner slot="YOUR_AD_SLOT_1" />
          <PostContent content={post.content} />
          <AdBanner slot="YOUR_AD_SLOT_2" />
          <Link href="/blog" className="back-link">&larr; Back to Blog</Link>
        </Col>
      </Row>
    </Container>
  );
}
