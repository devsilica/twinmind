'use client'

import {
  Brain,
  Heart,
  Wind,
  ShieldCheck,
  Activity,
  Bone,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

const systems = [
  {
    id: 'respiratory',
    name: 'Respiratory',
    icon: Wind,
    status: 'Active',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    icon: Heart,
    status: 'Healthy',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
  {
    id: 'neurological',
    name: 'Neurological',
    icon: Brain,
    status: 'Healthy',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    id: 'digestive',
    name: 'Digestive',
    icon: Activity,
    status: 'Healthy',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    id: 'renal',
    name: 'Renal',
    icon: ShieldCheck,
    status: 'Healthy',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    id: 'skeletal',
    name: 'Skeletal',
    icon: Bone,
    status: 'Healthy',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
]

export function BodySystems() {
  const {
    selectedSystem,
    setSelectedSystem,
  } = useTwinContext()

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Body Systems
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Live physiological system status
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((system) => {
          const Icon = system.icon
          const active = selectedSystem === system.id

          return (
            <button
              key={system.id}
              onClick={() => setSelectedSystem(system.id)}
              className={`
                rounded-2xl border p-4 text-left transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                ${system.bg}
                ${system.border}
                ${
                  active
                    ? 'scale-[1.02] ring-2 ring-cyan-500 shadow-lg'
                    : ''
                }
              `}
            >
              <div className="flex items-center justify-between">
                <Icon className={`h-7 w-7 ${system.color}`} />

                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    system.status === 'Healthy'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-cyan-100 text-cyan-700'
                  }`}
                >
                  {system.status}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {system.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Digital twin monitoring active.
              </p>
            </button>
          )
        })}
      </div>
    </section>
  )
}