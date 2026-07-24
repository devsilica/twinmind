'use client'

import {
  Brain,
  Download,
  FileText,
  Play,
  RefreshCcw,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

interface ActionBarProps {
  onRunSimulation?: () => void
  onExplain?: () => void
  onGenerateReport?: () => void
  onExport?: () => void
  onSyncHolon?: () => void
}

export function ActionBar({
  onRunSimulation,
  onExplain,
  onGenerateReport,
  onExport,
  onSyncHolon,
}: ActionBarProps) {
  const {
    selectedOrgan,
    selectedSystem,
    healthScore,
    confidence,
  } = useTwinContext()

  const organSelected = Boolean(selectedOrgan)

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Twin Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Execute actions against the active digital twin.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-cyan-50 px-3 py-1 font-medium text-cyan-700 capitalize">
            Organ: {selectedOrgan ?? 'None'}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700 capitalize">
            System: {selectedSystem}
          </span>

          <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
            Health {healthScore}%
          </span>

          <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">
            AI {confidence}%
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <ActionButton
          icon={<Play className="h-5 w-5" />}
          title="Run Simulation"
          subtitle={
            organSelected
              ? `Simulate ${selectedOrgan}`
              : 'Select an organ first'
          }
          onClick={onRunSimulation}
          primary
          disabled={!organSelected}
        />

        <ActionButton
          icon={<Brain className="h-5 w-5" />}
          title="Explain Findings"
          subtitle={
            organSelected
              ? 'View AI reasoning'
              : 'Awaiting selection'
          }
          onClick={onExplain}
          disabled={!organSelected}
        />

        <ActionButton
          icon={<FileText className="h-5 w-5" />}
          title="Generate Report"
          subtitle="Clinical summary"
          onClick={onGenerateReport}
        />

        <ActionButton
          icon={<Download className="h-5 w-5" />}
          title="Export Twin"
          subtitle="Download twin data"
          onClick={onExport}
        />

        <ActionButton
          icon={<RefreshCcw className="h-5 w-5" />}
          title="Sync HOLON"
          subtitle="Refresh knowledge"
          onClick={onSyncHolon}
        />
      </div>
    </section>
  )
}

interface ButtonProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  onClick?: () => void
  primary?: boolean
  disabled?: boolean
}

function ActionButton({
  icon,
  title,
  subtitle,
  onClick,
  primary = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-2xl border p-5 text-left transition-all duration-300
        ${
          disabled
            ? 'cursor-not-allowed border-slate-200 bg-slate-100 opacity-60'
            : 'hover:-translate-y-1 hover:shadow-lg'
        }
        ${
          !disabled && primary
            ? 'border-cyan-500 bg-cyan-600 text-white'
            : !disabled
            ? 'border-slate-200 bg-white'
            : ''
        }
      `}
    >
      <div
        className={`mb-4 ${
          primary && !disabled
            ? 'text-white'
            : 'text-cyan-600'
        }`}
      >
        {icon}
      </div>

      <h3
        className={`font-semibold ${
          primary && !disabled
            ? 'text-white'
            : 'text-slate-900'
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-1 text-sm ${
          primary && !disabled
            ? 'text-cyan-100'
            : 'text-slate-500'
        }`}
      >
        {subtitle}
      </p>
    </button>
  )
}