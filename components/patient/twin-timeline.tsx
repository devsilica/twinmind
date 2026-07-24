'use client'

import {
  Activity,
  Brain,
  Clock3,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

export function TwinTimeline() {
  const {
    selectedOrgan,
    selectedSystem,
    healthScore,
    confidence,
  } = useTwinContext()

  const events = [
    {
      icon: Brain,
      color: 'bg-cyan-600',
      date: 'Just now',
      title: 'Organ Selected',
      description: selectedOrgan
        ? `${selectedOrgan.charAt(0).toUpperCase() + selectedOrgan.slice(1)} is now active`
        : 'No organ selected',
    },
    {
      icon: Activity,
      color: 'bg-violet-600',
      date: 'Live',
      title: 'Body System Updated',
      description: selectedSystem
        ? `${selectedSystem
            .replace('-', ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase())} monitoring enabled`
        : 'Awaiting system selection',
    },
    {
      icon: HeartPulse,
      color: 'bg-emerald-600',
      date: 'Current',
      title: 'Health Score',
      description: `${healthScore}/100 overall physiological score`,
    },
    {
      icon: ShieldCheck,
      color: 'bg-blue-600',
      date: 'Current',
      title: 'AI Confidence',
      description: `${confidence}% prediction confidence`,
    },
    {
      icon: Clock3,
      color: 'bg-orange-600',
      date: 'Live',
      title: 'Twin Synchronization',
      description: 'Digital twin synchronized successfully',
    },
  ]

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900">
          Twin Timeline
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Real-time digital twin activity
        </p>
      </div>

      <div className="space-y-6">
        {events.map((event, index) => {
          const Icon = event.icon

          return (
            <div
              key={index}
              className="flex gap-4"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${event.color}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                {index < events.length - 1 && (
                  <div className="mt-2 h-10 w-0.5 bg-slate-200" />
                )}
              </div>

              {/* Content */}

              <div className="flex-1 pb-2">
                <p className="text-xs font-medium text-slate-500">
                  {event.date}
                </p>

                <h3 className="mt-1 font-semibold text-slate-900">
                  {event.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {event.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}