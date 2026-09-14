import defaultConfigs from "../fallback/configs";

export async function fetchConfigs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/configs`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();

    if (res.ok && data.success && data.data?.[0]) {
      return data.data[0];
    }

    return defaultConfigs;
  } catch {
    return defaultConfigs;
  }
}
