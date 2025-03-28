import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import BlogsList from "./components/Blogs/Blogs";
import { fetchLabels } from "./actions/fetchLabels";
import { fetchConfigs } from "./actions/fetchConfigs";

export default async function Home() {
  const labels = await fetchLabels();
  const configs = await fetchConfigs();

  return (
    <>
      <Introduction labels={labels} configs={configs} />
      <About configs={configs} />
      <BlogsList />
    </>
  );
}
