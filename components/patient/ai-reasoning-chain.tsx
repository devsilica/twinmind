'use client'

import {
  AlertCircle,
  Brain,
  BarChart3,
  Shield,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'
import { normalizeOrgan } from '@/lib/normalize-organ'

export function AIReasoningChain() {
  const {
    selectedOrgan,
    selectedSystem,
    healthScore,
    confidence,
  } = useTwinContext()

  // Normalize for lookup
  const organ = normalizeOrgan(selectedOrgan) ?? 'lungs'

  // Display actual clicked organ
  const displayOrgan =
    selectedOrgan
      ?.replace('left-lung', 'Left Lung')
      .replace('right-lung', 'Right Lung')
      .replace('kidney-left', 'Left Kidney')
      .replace('kidney-right', 'Right Kidney')
      .replace('-', ' ') ?? 'Lungs'

  const reasoning = {
    lungs: {
      trigger: 'Reduced respiratory efficiency detected',
      knowledge:
        'HOLON Respiratory Knowledge Graph',
      outcome:
        'Predicted mild persistent asthma with moderate clinical risk.',
    },

    heart: {
      trigger:
        'Cardiac rhythm and pressure evaluated',
      knowledge:
        'HOLON Cardiovascular Knowledge Graph',
      outcome:
        'Normal cardiac function with low cardiovascular risk.',
    },

    brain: {
      trigger:
        'Neurological activity analyzed',
      knowledge:
        'HOLON Neurological Knowledge Graph',
      outcome:
        'Stable cognitive function with no neurological abnormalities.',
    },

    liver: {
      trigger:
        'Elevated ALT and AST biomarkers detected',
      knowledge:
        'HOLON Hepatic Knowledge Graph',
      outcome:
        'Possible early metabolic stress requiring monitoring.',
    },

    stomach: {
      trigger:
        'Digestive performance evaluated',
      knowledge:
        'HOLON Gastrointestinal Knowledge Graph',
      outcome:
        'Healthy digestive function with balanced nutrient absorption.',
    },

    kidneys: {
      trigger:
        'Renal biomarkers analyzed',
      knowledge:
        'HOLON Renal Knowledge Graph',
      outcome:
        'Healthy filtration and electrolyte regulation.',
    },

    mouth: {
      trigger:
        'Oral examination completed',
      knowledge:
        'HOLON Oral Health Knowledge Graph',
      outcome:
        'Healthy oral cavity with no significant abnormalities.',
    },
  } as const

  const current =
    reasoning[
      organ as keyof typeof reasoning
    ] ?? reasoning.lungs

  const steps = [
    {
      icon: AlertCircle,
      title: 'Trigger Event',
      content: current.trigger,
      color:
        'bg-red-50 text-red-600 border-red-200',
    },
    {
      icon: Brain,
      title: 'Knowledge Layer',
      content: current.knowledge,
      color:
        'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: BarChart3,
      title: 'AI Reasoning',
      content: current.outcome,
      color:
        'bg-green-50 text-green-600 border-green-200',
    },
  ]

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            AI Reasoning Chain
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Explainable AI clinical reasoning
          </p>
        </div>

        <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          {displayOrgan}
        </span>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <div key={index}>
              <div
                className={`rounded-2xl border p-5 ${step.color}`}
              >
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide opacity-75">
                      {step.title}
                    </div>

                    <div className="mt-2 font-medium">
                      {step.content}
                    </div>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="h-6 w-0.5 bg-slate-300" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              AI Confidence
            </p>

            <h3 className="mt-2 text-4xl font-bold text-cyan-600">
              {confidence}%
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Based on the current{' '}
              <strong>{selectedSystem}</strong>{' '}
              physiological model and a health score of{' '}
              <strong>{healthScore}/100</strong>.
            </p>
          </div>

          <Shield
            size={52}
            className="text-emerald-600 opacity-30"
          />
        </div>
      </div>
    </section>
  )
}