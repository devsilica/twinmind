"use client";

import { Sparkles } from "lucide-react";
import { useTwinContext } from "@/context/TwinProvider";

export function AIHealthStory() {
  const { data, loading, error } = useTwinContext();

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        Loading AI summary...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  const stats = data.stats;
  const diagnosis = data.latestDiagnosis;
  const medication = data.latestMedication;
  const reading = data.latestReading;

  return (
    <div className="rounded-2xl border border-cyan-200 bg-white p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-cyan-100 p-2">
          <Sparkles className="text-cyan-600" size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold">AI Health Story</h2>
          <p className="text-sm text-gray-500">
            Generated from the Digital Twin
          </p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 leading-7">
        <p>
          The Digital Twin currently contains{" "}
          <strong>{stats.totalEvents}</strong> health events spanning{" "}
          <strong>{stats.systems}</strong> body systems.
        </p>

        <p>
          The primary active diagnosis is{" "}
          <strong>{diagnosis?.title}</strong>.
        </p>

        <p>
          Current treatment includes{" "}
          <strong>{medication?.title}</strong>.
        </p>

        {reading && (
          <p>
            The latest device reading recorded a value of{" "}
            <strong>{reading.data.value}</strong>{" "}
            {reading.data.unit}, indicating ongoing monitoring of the{" "}
            <strong>{reading.data.system}</strong> system.
          </p>
        )}

        <p>
          Overall calculated health score is{" "}
          <strong>{stats.healthScore}%</strong>.
        </p>
      </div>
    </div>
  );
}