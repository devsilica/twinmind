"use client";

import { useEffect, useState } from "react";
import { fetchDashboard } from "@/services/api/dashboard";

export function useTwin() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Start with no organ selected
  const [selectedOrgan, setSelectedOrgan] =
    useState<string | null>(null);

  const [selectedSystem, setSelectedSystem] =
    useState<string | null>("respiratory");

  const [healthScore, setHealthScore] = useState(88);

  const [confidence, setConfidence] = useState(94);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const result = await fetchDashboard();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    data,
    loading,
    error,

    selectedOrgan,
    setSelectedOrgan,

    selectedSystem,
    setSelectedSystem,

    healthScore,
    setHealthScore,

    confidence,
    setConfidence,
  };
}