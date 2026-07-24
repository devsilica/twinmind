'use client'

import {
  Activity,
  CalendarClock,
  Cpu,
  ShieldCheck,
  Wifi,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

export function TwinMetadata() {
  const {
    selectedOrgan,
    selectedSystem,
    healthScore,
    confidence,
  } = useTwinContext()

  const twinId = 'DT-2026-001'
  const version = 'v1.0.0'
  const lastSync = 'Just now'

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Twin Metadata
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Live digital twin synchronization
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
          <Wifi className="h-4 w-4 text-emerald-600" />

          <span className="text-sm font-medium text-emerald-700">
            LIVE
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <MetadataCard
          icon={<Cpu className="h-5 w-5 text-cyan-600" />}
          label="Twin ID"
          value={twinId}
        />

        <MetadataCard
          icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
          label="AI Confidence"
          value={`${confidence}%`}
        />

        <MetadataCard
          icon={<Activity className="h-5 w-5 text-violet-600" />}
          label="Health Score"
          value={`${healthScore}/100`}
        />

        <MetadataCard
          icon={<CalendarClock className="h-5 w-5 text-orange-600" />}
          label="Last Sync"
          value={lastSync}
        />

        <MetadataCard
          icon={<Activity className="h-5 w-5 text-red-600" />}
          label="Selected Organ"
          value={
            selectedOrgan
              ? selectedOrgan.charAt(0).toUpperCase() +
                selectedOrgan.slice(1)
              : 'None'
          }
        />

        <MetadataCard
          icon={<Activity className="h-5 w-5 text-cyan-600" />}
          label="Active System"
          value={
            selectedSystem
              ? selectedSystem.charAt(0).toUpperCase() +
                selectedSystem.slice(1)
              : 'None'
          }
        />
      </div>

      <div className="mt-6 rounded-2xl border bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Twin Version
          </span>

          <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white">
            {version}
          </span>
        </div>
      </div>
    </section>
  )
}

interface MetadataCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

function MetadataCard({
  icon,
  label,
  value,
}: MetadataCardProps) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-4">
      <div className="mb-3">{icon}</div>

      <p className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold text-slate-900">
        {value}
      </p>
    </div>
  )
}