export async function fetchDashboard() {
  const res = await fetch("/api/dashboard", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  return res.json();
}