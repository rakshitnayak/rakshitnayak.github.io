import defaultConfigs from "../fallback/configs";

export async function fetchConfigs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/configs`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  if (data.success) {
    return data.data[0];
  }

  return defaultConfigs;
}
