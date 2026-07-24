"use client";

import { Activity, Eye, Lightbulb } from "lucide-react";
import { useTwinContext } from "@/context/TwinProvider";

export function DashboardCards() {
  const { data, loading, error } = useTwinContext();

  if (loading) {
    return (
      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  const stats = data?.stats;

  return (
    <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Health Score */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-200 transition-colors">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-600">
              HEALTH SCORE
            </div>

            <div className="text-3xl font-bold text-gray-900">
              {stats.healthScore}%
            </div>

            <div className="mt-2 text-sm text-green-600">
              Live Twin Health
            </div>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-500 text-lg font-bold">
              ✓
            </div>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-200 transition-colors">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-600">
              TWIN EVENTS
            </div>

            <div className="text-3xl font-bold text-gray-900">
              {stats.totalEvents}
            </div>

            <div className="mt-2 text-sm text-gray-600">
              Health timeline events
            </div>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
            <Activity className="text-blue-600" size={24} />
          </div>
        </div>
      </div>

      {/* Systems */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-200 transition-colors">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-600">
              BODY SYSTEMS
            </div>

            <div className="text-3xl font-bold text-gray-900">
              {stats.systems}
            </div>

            <div className="mt-4 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{
                  width: `${Math.min(stats.systems * 25, 100)}%`,
                }}
              />
            </div>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
            <Eye className="text-green-600" size={24} />
          </div>
        </div>
      </div>

      {/* Diagnoses */}
      <div className="rounded-2xl border border-cyan-200 bg-white p-6 hover:border-cyan-300 transition-colors">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-cyan-600">
            <Lightbulb size={16} />
            ACTIVE DIAGNOSES
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {stats.diagnoses}
              </div>

              <div className="text-xs text-gray-600">
                Active diagnoses
              </div>
            </div>

            <div className="text-xs text-gray-600">
              <div className="font-semibold text-gray-900">
                {stats.medications} Medication(s)
              </div>
            </div>

            <div className="text-xs text-gray-600">
              <div className="font-semibold text-gray-900">
                {stats.symptoms} Symptom(s)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}