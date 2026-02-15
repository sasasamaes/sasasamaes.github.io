import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      {post.coverImage && <img src={post.coverImage} alt={post.title} />}
      <div className="card-body">
        <p className="date">
          {new Date(post.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h3>{post.title}</h3>
        <div className="tags">
          {post.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
        </div>
        <p>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>Read more</Link>
      </div>
    </div>
  );
}
