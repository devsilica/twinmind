'use client'

import { useMemo } from 'react'
import { Activity, Brain, Heart, ShieldCheck, Wifi } from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'
import { HumanBody } from '@/components/anatomy/HumanBody'
import { getActiveOrgans } from '@/components/anatomy/anatomy-map'
import type { BodySystem } from '@/components/anatomy/types'

const systems: BodySystem[] = [
  'respiratory',
  'cardiovascular',
  'digestive',
]

export function DigitalTwinHero() {
  const {
    selectedOrgan,
    setSelectedOrgan,
    healthScore,
    confidence,
  } = useTwinContext()

  const activeOrgans = useMemo(
    () => getActiveOrgans(systems),
    []
  )

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />

      {/* Scanner Rings */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/50 animate-ping [animation-duration:5s]" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100" />

      <div className="relative p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Patient Digital Twin
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Interactive physiological representation
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
            <Wifi className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-medium text-emerald-700">
              LIVE
            </span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Human Body */}
          <div className="relative flex items-center justify-center">
            <HumanBody
              systems={systems}
              selectedOrgan={selectedOrgan}
              onOrganSelect={setSelectedOrgan}
            />

            {/* Heart Card */}
            <div className="absolute left-6 top-6 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />

                <div>
                  <p className="text-xs text-slate-500">
                    Heart Rate
                  </p>

                  <p className="font-semibold">
                    74 bpm
                  </p>
                </div>
              </div>
            </div>

            {/* Oxygen Card */}
            <div className="absolute right-6 bottom-6 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-cyan-600" />

                <div>
                  <p className="text-xs text-slate-500">
                    Oxygen
                  </p>

                  <p className="font-semibold">
                    98%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligence Panel */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Organ Intelligence
              </h3>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Selected Organ
                  </p>

                  <p className="mt-1 text-xl font-bold capitalize">
                    {selectedOrgan ?? 'None'}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Status
                  </p>

                  <p className="mt-1 font-medium text-emerald-600">
                    Active
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    AI Assessment
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Physiological activity is within expected parameters.
                    No significant anomalies detected.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <ShieldCheck className="mb-3 h-6 w-6 text-emerald-500" />

                <p className="text-xs text-slate-500">
                  Twin Confidence
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {confidence}%
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <Brain className="mb-3 h-6 w-6 text-violet-500" />

                <p className="text-xs text-slate-500">
                  AI Health Score
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {healthScore}
                </p>
              </div>
            </div>

            {/* Active Systems */}
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <h4 className="font-semibold text-cyan-900">
                Active Systems
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {systems.map((system) => (
                  <span
                    key={system}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium capitalize text-cyan-700 shadow-sm"
                  >
                    {system}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-cyan-700">
                {activeOrgans.length} organs currently synchronized with the
                patient's live digital twin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}