'use client'

import { Lock } from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

export function ClinicalProfile() {
  const {
    selectedOrgan,
    selectedSystem,
    healthScore,
    confidence,
  } = useTwinContext()

  const scoreLabel =
    healthScore >= 90
      ? 'Excellent'
      : healthScore >= 80
      ? 'Good'
      : healthScore >= 70
      ? 'Fair'
      : healthScore >= 60
      ? 'Moderate'
      : 'Needs Attention'

  const scoreColor =
    healthScore >= 90
      ? '#16a34a'
      : healthScore >= 80
      ? '#2563eb'
      : healthScore >= 70
      ? '#f59e0b'
      : '#ef4444'

  const circumference = 2 * Math.PI * 54
  const dash = (healthScore / 100) * circumference

  return (
    <div className="space-y-6">
      {/* Clinical Profile */}
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Clinical Profile
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Live Digital Twin Profile
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
            <Lock
              size={20}
              className="text-cyan-600"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Age
            </p>

            <p className="mt-1 text-2xl font-bold">
              58 yrs
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              BMI
            </p>

            <p className="mt-1 text-2xl font-bold">
              29.4
            </p>

            <p className="text-xs font-medium text-red-600">
              Overweight
            </p>
          </div>
        </div>

        <div className="mb-6 h-px bg-slate-100" />

        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Active Analysis
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium capitalize text-cyan-700">
              Organ: {selectedOrgan ?? 'None'}
            </span>

            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium capitalize text-indigo-700">
              System: {selectedSystem}
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              AI {confidence}%
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Conditions
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
              Hypertension
            </span>

            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
              Type 2 Diabetes
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Primary Medications
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock
                size={14}
                className="text-cyan-600"
              />
              <span className="text-sm">
                Lisinopril 10mg
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Lock
                size={14}
                className="text-cyan-600"
              />
              <span className="text-sm">
                Metformin 500mg
              </span>
            </div>
          </div>
        </div>

        <div className="border-t pt-5 text-xs text-slate-500">
          Twin synchronized successfully.
        </div>
      </div>

      {/* Aggregate Health */}
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="mb-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Aggregate Health Score
        </div>

        <div className="mb-6 flex items-center justify-center">
          <div className="relative h-32 w-32">
            <svg
              className="h-full w-full -rotate-90"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />

              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke={scoreColor}
                strokeWidth="8"
                strokeDasharray={`${dash} ${circumference}`}
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className="text-3xl font-bold"
                style={{ color: scoreColor }}
              >
                {healthScore}
              </div>

              <div className="text-xs font-medium text-slate-500">
                {scoreLabel}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-slate-600">
          Live score generated from the
          <br />
          Digital Twin physiological model.
        </div>
      </div>
    </div>
  )
}