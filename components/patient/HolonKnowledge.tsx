'use client'

import {
  BookOpen,
  Brain,
  Link2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'
import { normalizeOrgan } from '@/lib/normalize-organ'

const knowledgeBase = {
  lungs: {
    concept: 'Asthma',
    category: 'Respiratory Disease',
    code: 'HOLON-RSP-001',
    confidence: '94%',
    description:
      'Chronic inflammatory airway disease characterized by variable airflow obstruction.',
    related: [
      'Bronchitis',
      'COPD',
      'Allergic Rhinitis',
    ],
  },

  heart: {
    concept: 'Cardiac Function',
    category: 'Cardiovascular',
    code: 'HOLON-CVS-002',
    confidence: '98%',
    description:
      'Normal cardiac rhythm and ventricular performance.',
    related: [
      'Blood Pressure',
      'ECG',
      'Heart Failure',
    ],
  },

  brain: {
    concept: 'Neurological Health',
    category: 'Central Nervous System',
    code: 'HOLON-CNS-004',
    confidence: '96%',
    description:
      'Normal neurological activity with no detected abnormalities.',
    related: [
      'Memory',
      'Sleep',
      'Cognition',
    ],
  },

  liver: {
    concept: 'Liver Function',
    category: 'Metabolic',
    code: 'HOLON-LIV-005',
    confidence: '95%',
    description:
      'Healthy hepatic metabolism and enzyme activity.',
    related: [
      'ALT',
      'AST',
      'Bilirubin',
    ],
  },

  stomach: {
    concept: 'Digestive Health',
    category: 'Gastrointestinal',
    code: 'HOLON-GI-003',
    confidence: '95%',
    description:
      'Normal digestive processing and gastric function.',
    related: [
      'Digestion',
      'Nutrition',
      'Microbiome',
    ],
  },

  kidneys: {
    concept: 'Renal Function',
    category: 'Urinary',
    code: 'HOLON-RNL-007',
    confidence: '97%',
    description:
      'Healthy filtration and electrolyte regulation.',
    related: [
      'Creatinine',
      'GFR',
      'Electrolytes',
    ],
  },

  mouth: {
    concept: 'Oral Health',
    category: 'Dental',
    code: 'HOLON-DEN-008',
    confidence: '96%',
    description:
      'Healthy oral tissues with no significant abnormalities.',
    related: [
      'Gingiva',
      'Teeth',
      'Oral Hygiene',
    ],
  },
} as const

export function HolonKnowledge() {
  const { selectedOrgan } = useTwinContext()

  // Normalize for lookup
  const organ = normalizeOrgan(selectedOrgan)

  const data =
    organ &&
    knowledgeBase[
      organ as keyof typeof knowledgeBase
    ]

  // Display actual clicked organ
  const displayOrgan =
    selectedOrgan
      ?.replace('left-lung', 'Left Lung')
      .replace('right-lung', 'Right Lung')
      .replace('kidney-left', 'Left Kidney')
      .replace('kidney-right', 'Right Kidney')
      .replace('-', ' ') ?? ''

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Brain className="h-6 w-6 text-cyan-600" />

        <div>
          <h2 className="text-xl font-semibold">
            HOLON Clinical Knowledge
          </h2>

          <p className="text-sm text-slate-500">
            AI-linked clinical intelligence
          </p>
        </div>
      </div>

      {!data ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <BookOpen className="mx-auto mb-3 h-10 w-10 text-slate-300" />

          <p className="text-slate-500">
            Select an organ to explore its clinical knowledge.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
              {data.category}
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              {displayOrgan || data.concept}
            </h3>

            <p className="mt-1 text-sm font-medium text-cyan-700">
              {data.concept}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {data.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Info
              icon={
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              }
              label="Knowledge Code"
              value={data.code}
            />

            <Info
              icon={
                <Sparkles className="h-5 w-5 text-violet-600" />
              }
              label="AI Confidence"
              value={data.confidence}
            />
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <Link2 className="h-5 w-5 text-slate-600" />

              <h4 className="font-semibold">
                Related Concepts
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.related.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-slate-50 px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

interface InfoProps {
  icon: React.ReactNode
  label: string
  value: string
}

function Info({
  icon,
  label,
  value,
}: InfoProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border bg-slate-50 p-4">
      {icon}

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {label}
        </p>

        <p className="mt-1 font-semibold">
          {value}
        </p>
      </div>
    </div>
  )
}