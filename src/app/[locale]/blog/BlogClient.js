"use client";
import { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslations } from "next-intl";
import PostCard from "@/components/blog/PostCard";

export default function BlogClient({ posts }) {
  const t = useTranslations();
  const [activeTag, setActiveTag] = useState(null);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    posts.forEach((post) => post.tags?.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags?.includes(activeTag))
    : posts;

  return (
    <Container className="blog-listing">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">{t("blog.pageTitle")}</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      {allTags.length > 0 && (
        <div className="blog-filters">
          <button
            className={`filter-tag ${activeTag === null ? "active" : ""}`}
            onClick={() => setActiveTag(null)}
          >
            {t("blog.allPosts") || "Todos"}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <p>{t("blog.noPosts")}</p>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
