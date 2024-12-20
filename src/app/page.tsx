import Introduction from "./components/Introduction/Introduction";
import defaultLabels from "./fallback/labels";
import defaultConfigs from "./fallback/configs";
import { fetcher } from "./utils/fetcher";

export default async function Home() {
  let labels = defaultLabels;
  let configs = defaultConfigs;

  try {
    const [fetchedLabels, fetchedConfigs] = await Promise.all([
      fetcher(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/labels`),
      fetcher(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/configs`),
    ]);

    labels = fetchedLabels.success ? fetchedLabels.data[0] : defaultLabels;
    configs = fetchedConfigs.success ? fetchedConfigs.data[0] : defaultConfigs;
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }

  return <Introduction labels={labels} configs={configs} />;
}
