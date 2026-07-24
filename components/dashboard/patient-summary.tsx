"use client";

import { useTwinContext } from "@/context/TwinProvider";

export function PatientSummary() {
  const { data, loading, error } = useTwinContext();

  if (loading) {
    return (
      <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6">
        Loading patient...
      </div>
    );
  }

  if (error) {
    return (
      <div className="sticky top-24 rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  const patient = data?.patient;
  const diagnosis = data?.latestDiagnosis;
  const medication = data?.latestMedication;

  const twinId = patient?.twinId ?? "Unknown";
  const systems = patient?.systems ?? [];

  const initials = twinId.slice(0, 2).toUpperCase();

  return (
    <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6">
      {/* Avatar */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-2xl font-bold text-white">
          {initials}
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Digital Twin Patient
          </h3>

          <p className="text-sm text-gray-600">
            {twinId.slice(0, 16)}...
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">STATUS</span>

          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Active Twin
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">BODY SYSTEMS</span>

          <span className="font-semibold text-gray-900">
            {systems.length}
          </span>
        </div>
      </div>

      {/* Diagnosis */}
      <div className="mt-4 border-t border-gray-200 pt-4">
        <div className="space-y-4">
          <div>
            <p className="mb-1 text-xs font-medium text-gray-600">
              Latest Diagnosis
            </p>

            <p className="text-sm font-semibold text-gray-900">
              {diagnosis?.title ?? "No diagnosis"}
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-medium text-gray-600">
              Medication
            </p>

            <p className="text-sm font-semibold text-gray-900">
              {medication?.title ?? "None"}
            </p>
          </div>
        </div>
      </div>

      {/* Systems */}
      <div className="mt-4 border-t border-gray-200 pt-4">
        <p className="mb-3 text-xs font-medium text-gray-600">
          BODY SYSTEMS
        </p>

        <div className="flex flex-wrap gap-2">
          {systems.map((system: string) => (
            <span
              key={system}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium capitalize text-blue-700"
            >
              {system.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      </div>

      {/* Updated */}
      <div className="mt-4 border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-600">
          Last synced with Ontomorph
        </p>

        <p className="text-sm font-semibold text-gray-900">
          Just now
        </p>
      </div>
    </div>
  );
}