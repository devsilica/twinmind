export async function fetchTwin() {
  const res = await fetch("/api/twin", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch twin");
  }

  return res.json();
}