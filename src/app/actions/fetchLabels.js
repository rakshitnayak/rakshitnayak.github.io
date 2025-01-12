import defaultLabels from "../fallback/labels";

export async function fetchLabels() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/labels`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  if (data.success) {
    return data.data[0];
  }

  return defaultLabels;
}
