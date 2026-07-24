'use client'

import { BookOpen, Download } from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'
import { normalizeOrgan } from '@/lib/normalize-organ'

const narratives = {
  brain: {
    title: 'Neurological Health',
    story:
      'Your digital twin indicates stable neurological activity with healthy cognitive performance. No significant abnormalities were detected across the monitored neural pathways. Continue maintaining healthy sleep patterns and hydration to preserve optimal brain function.',
  },

  heart: {
    title: 'Cardiovascular Health',
    story:
      'The digital twin reports normal cardiac rhythm and efficient ventricular function. Current simulations predict stable cardiovascular performance with a low probability of short-term complications. Maintaining regular exercise and balanced nutrition is recommended.',
  },

  lungs: {
    title: 'Respiratory Health',
    story:
      'The digital twin has detected mild respiratory inflammation consistent with persistent asthma. Simulation models predict measurable improvement following bronchodilator therapy while indicating reduced clinical risk with continuous monitoring.',
  },

  liver: {
    title: 'Liver Health',
    story:
      'The liver twin indicates healthy metabolic activity with normal hepatic enzyme function. Current physiological models show stable detoxification performance with no significant inflammatory indicators.',
  },

  stomach: {
    title: 'Digestive Health',
    story:
      'The gastrointestinal twin reports healthy digestive function with efficient nutrient processing. No significant abnormalities have been detected in gastric activity or digestive performance.',
  },

  kidneys: {
    title: 'Renal Health',
    story:
      'The renal digital twin indicates healthy filtration efficiency and stable electrolyte regulation. Kidney performance remains within expected physiological limits with low predicted clinical risk.',
  },

  mouth: {
    title: 'Oral Health',
    story:
      'The digital twin indicates healthy oral tissues with no significant abnormalities detected during the current assessment.',
  },
} as const

export function AIHealthNarrative() {
  const {
    selectedOrgan,
    healthScore,
    confidence,
  } = useTwinContext()

  // Normalize for lookup
  const organ = normalizeOrgan(selectedOrgan) ?? 'lungs'

  // Display original clicked organ
  const displayOrgan =
    selectedOrgan
      ?.replace('left-lung', 'Left Lung')
      .replace('right-lung', 'Right Lung')
      .replace('kidney-left', 'Left Kidney')
      .replace('kidney-right', 'Right Kidney')
      .replace('-', ' ') ?? 'Lungs'

  const narrative =
    narratives[
      organ as keyof typeof narratives
    ] ?? narratives.lungs

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
            <BookOpen className="h-5 w-5 text-cyan-600" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              AI Health Narrative
            </h2>

            <p className="text-sm text-slate-500">
              AI-generated clinical interpretation
            </p>
          </div>
        </div>

        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
          {confidence}% Confidence
        </span>
      </div>

      <div className="mb-8 rounded-2xl border bg-slate-50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Active Organ
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              {displayOrgan}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Health Score
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              {healthScore}/100
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-7 text-slate-700">
          <p>
            <strong>{narrative.title}</strong>
          </p>

          <p>{narrative.story}</p>

          <p>
            Based on the current digital twin simulation, the AI estimates an
            overall physiological confidence of{' '}
            <strong>{confidence}%</strong>. Continuous monitoring is recommended
            to refine future predictions and improve the twin&apos;s accuracy.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700">
          <BookOpen className="h-5 w-5" />
          View Full Narrative
        </button>

        <button className="flex items-center gap-2 rounded-xl border bg-slate-100 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
          <Download className="h-5 w-5" />
          Download Report
        </button>
      </div>
    </section>
  )
}