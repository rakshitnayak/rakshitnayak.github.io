import Link from "../Link/Link";
import { Blog } from "@/types";
import { formatPublishedDate } from "@/lib/blogs";

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const linkStyles = `
    underline underline-offset-4
    decoration-[#d4d4d4]
    hover:decoration-black
    transition-all
    font-medium
  `;

  return (
    <article className="border border-[#e8e8e8] rounded-xl p-4 sm:p-5 hover:border-black transition-colors duration-300">
      <Link href={blog.link} styles={linkStyles}>
        {blog.title}
      </Link>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#666]">
        {blog.publishedAt && (
          <time dateTime={blog.publishedAt}>
            {formatPublishedDate(blog.publishedAt)}
          </time>
        )}
        {blog.readTime != null && (
          <>
            <span aria-hidden="true">·</span>
            <span>{blog.readTime} min read</span>
          </>
        )}
      </div>
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#f5f5f5] text-[#333] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default BlogCard;
