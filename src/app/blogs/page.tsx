import { Text } from "@chakra-ui/react";
import { fetchConfigs } from "../actions/fetchConfigs";
import { sortBlogsByDate } from "@/lib/blogs";
import BlogCard from "../components/Blogs/BlogCard";

export default async function BlogsPage() {
  const configs = await fetchConfigs();
  const blogs = sortBlogsByDate(configs?.blogs || []);

  return (
    <main className="xl:mx-auto md:p-[32px] p-[16px]">
      <Text textStyle="2xl" mb="2" className="font-bold">
        Blogs
      </Text>
      <Text mb="6" className="text-sm sm:text-base text-[#666]">
        All my published blog posts. I will keep adding new ones here.
      </Text>
      <div className="flex flex-col gap-4">
        {blogs.map((item) => (
          <BlogCard key={item.link} blog={item} />
        ))}
      </div>
    </main>
  );
}
