"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { event } from "@/lib/analytics";

export default function PostCard({ post }) {
  const t = useTranslations();
  const locale = useLocale();

  const handleClick = () => {
    event("blog_post_click", {
      post_title: post.title,
      post_slug: post.slug,
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className="post-card-link" onClick={handleClick}>
      <div className="post-card">
        {post.coverImage && <img src={post.coverImage} alt={post.title} />}
        <div className="card-body">
          <p className="date">
            {new Date(post.publishedDate).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h3>{post.title}</h3>
          <div className="tags">
            {post.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
          </div>
          <p>{post.excerpt}</p>
          <span className="read-more">{t("blog.readMore")}</span>
        </div>
      </div>
    </Link>
  );
}
