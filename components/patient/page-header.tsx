'use client'

import { ChevronRight, Activity } from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

export function PatientPageHeader() {
  const {
    selectedOrgan,
    selectedSystem,
    confidence,
  } = useTwinContext()

  return (
    <header className="mb-8">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
        <span>Dashboard</span>

        <ChevronRight size={16} />

        <span className="font-medium text-slate-900">
          Patient Twin
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            James Carter, 58
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Digital Twin ID: #JC-88219</span>

            <span>•</span>

            <span className="capitalize">
              Active Organ:{' '}
              <strong className="text-slate-700">
                {selectedOrgan ?? 'None'}
              </strong>
            </span>

            <span>•</span>

            <span className="capitalize">
              System:{' '}
              <strong className="text-slate-700">
                {selectedSystem}
              </strong>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />

            <span className="text-sm font-semibold text-emerald-700">
              Twin Synced
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
            <Activity
              size={16}
              className="text-cyan-600"
            />

            <span className="text-sm font-semibold text-cyan-700">
              AI Confidence {confidence}%
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}