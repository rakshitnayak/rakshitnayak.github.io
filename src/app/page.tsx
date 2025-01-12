import Introduction from "./components/Introduction/Introduction";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import BlogsList from "./components/Blogs/Blogs";
import defaultLabels from "./fallback/labels";
import defaultConfigs from "./fallback/configs";


async function getLabels() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/labels`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  if (data.success) {
    return data.data[0];
  }

  return defaultLabels;
}

async function getConfigs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/configs`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  if (data.success) {
    return data.data[0];
  }

  return defaultConfigs;
}

export default async function Home() {
  const labels = await getLabels();
  const configs = await getConfigs();

  return (
    <>
      <Header configs={configs} />
      <Introduction labels={labels} configs={configs} />
      <About configs={configs} />
      <BlogsList />
    </>
  );
}
