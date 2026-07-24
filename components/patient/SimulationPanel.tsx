'use client'

import { useState } from 'react'
import {
  Play,
  TrendingUp,
  ShieldCheck,
  Activity,
  FlaskConical,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

export function SimulationPanel() {
  const {
    selectedOrgan,
    healthScore,
    setHealthScore,
    confidence,
    setConfidence,
  } = useTwinContext()

  const [running, setRunning] = useState(false)

  const [result, setResult] = useState<null | {
    improvement: number
    risk: number
    confidence: number
  }>(null)

  function runSimulation() {
    setRunning(true)

    setTimeout(() => {
      const simulation = {
        improvement: 18,
        risk: -12,
        confidence: 97,
      }

      setResult(simulation)

      // Update the Digital Twin globally
      setHealthScore(Math.min(100, healthScore + 5))
      setConfidence(simulation.confidence)

      setRunning(false)
    }, 1800)
  }

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <FlaskConical className="h-6 w-6 text-cyan-600" />

        <div>
          <h2 className="text-xl font-semibold">
            Twin Simulation
          </h2>

          <p className="text-sm text-slate-500">
            Predict treatment outcomes using the digital twin.
          </p>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border bg-slate-50 p-4">
        <p className="text-sm text-slate-500">
          Active Organ
        </p>

        <p className="mt-1 text-lg font-semibold capitalize">
          {selectedOrgan ?? 'None'}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Controls */}

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Treatment
            </label>

            <select className="w-full rounded-xl border p-3">
              <option>Albuterol</option>
              <option>Steroid Therapy</option>
              <option>Lifestyle Change</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Duration
            </label>

            <select className="w-full rounded-xl border p-3">
              <option>7 Days</option>
              <option>30 Days</option>
              <option>90 Days</option>
            </select>
          </div>

          <button
            onClick={runSimulation}
            disabled={running || !selectedOrgan}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-60"
          >
            <Play className="h-5 w-5" />

            {running
              ? 'Running Simulation...'
              : 'Run Simulation'}
          </button>

        </div>

        {/* Results */}

        <div className="rounded-2xl border bg-slate-50 p-5">

          {!result ? (
            <div className="flex h-full items-center justify-center text-center text-slate-500">
              Select an organ and run a simulation.
            </div>
          ) : (
            <div className="space-y-5">

              <Metric
                icon={
                  <TrendingUp className="h-5 w-5 text-green-600" />
                }
                title="Predicted Improvement"
                value={`+${result.improvement}%`}
              />

              <Metric
                icon={
                  <Activity className="h-5 w-5 text-orange-600" />
                }
                title="Risk Change"
                value={`${result.risk}%`}
              />

              <Metric
                icon={
                  <ShieldCheck className="h-5 w-5 text-cyan-600" />
                }
                title="AI Confidence"
                value={`${confidence}%`}
              />

              <Metric
                icon={
                  <Activity className="h-5 w-5 text-violet-600" />
                }
                title="Health Score"
                value={`${healthScore}/100`}
              />

              <div className="rounded-xl bg-cyan-50 p-4 text-sm text-cyan-700">
                Simulation predicts measurable improvement for the{' '}
                <strong>{selectedOrgan}</strong> with reduced clinical
                risk following the selected intervention.
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  )
}

interface MetricProps {
  icon: React.ReactNode
  title: string
  value: string
}

function Metric({
  icon,
  title,
  value,
}: MetricProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-4">
      <div className="flex items-center gap-3">
        {icon}

        <span className="font-medium">
          {title}
        </span>
      </div>

      <span className="text-lg font-bold">
        {value}
      </span>
    </div>
  )
}