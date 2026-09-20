import { Blog } from "@/types";
import { sortBlogsByDate } from "@/lib/blogs";
import BlogCard from "./BlogCard";

type BlogsListProps = {
  blogs?: Blog[];
  latestOnly?: boolean;
};

const BlogsList = ({ blogs = [], latestOnly = false }: BlogsListProps) => {
  const sortedBlogs = sortBlogsByDate(blogs);
  const blogsToShow = latestOnly ? sortedBlogs.slice(0, 3) : sortedBlogs;

  return (
    <section className="px-4 py-10 md:px-8 md:py-14">
      <div className="mb-2 flex items-end justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">
          {latestOnly ? "Latest Blogs" : "Blogs"}
        </h2>
        {latestOnly && (
          <span className="inline-block text-xs uppercase tracking-[0.12em] bg-black text-white px-2 py-1 rounded-full">
            fresh drops
          </span>
        )}
      </div>
      {latestOnly && (
        <p className="mb-6 text-sm text-[#666] sm:text-base">
          New writing from my learning and engineering journey.
        </p>
      )}
      <div className="flex flex-col gap-4">
        {blogsToShow.map((item) => (
          <BlogCard key={item.link} blog={item} />
        ))}
      </div>
      {latestOnly && blogs.length > 0 && (
        <a
          href="/blogs"
          className="inline-block mt-6 text-sm font-semibold text-[#6e57e0] underline underline-offset-4 decoration-[#d4d4d4] hover:decoration-[#6e57e0] transition-all"
        >
          View all blogs →
        </a>
      )}
    </section>
  );
};

export default BlogsList;
