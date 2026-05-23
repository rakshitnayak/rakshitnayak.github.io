import { Text } from "@chakra-ui/react";
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
    <div className="xl:mx-auto md:p-[32px] p-[16px]">
      <div className="flex items-center gap-3 mb-2">
        <Text textStyle="2xl" className="font-bold">
          {latestOnly ? "Latest Blogs" : "Blogs"}
        </Text>
        {latestOnly && (
          <span className="inline-block text-xs uppercase tracking-[0.12em] bg-black text-white px-2 py-1 rounded-full">
            fresh drops
          </span>
        )}
      </div>
      {latestOnly && (
        <Text mb="5" className="text-sm sm:text-base text-[#666]">
          New writing from my learning and engineering journey.
        </Text>
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
    </div>
  );
};

export default BlogsList;
