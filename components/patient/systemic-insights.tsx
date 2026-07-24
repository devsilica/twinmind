'use client'

import {
  Heart,
  Droplet,
  Wind,
  Zap,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

interface InsightCard {
  icon: React.ComponentType<{
    size: number
    className: string
  }>
  title: string
  score: string
  description: string
  color: string
  bgColor: string
  borderColor: string
}

export function SystemicInsights() {
  const {
    selectedOrgan,
    healthScore,
    confidence,
  } = useTwinContext()

  const insights: InsightCard[] = [
    {
      icon: Heart,
      title: 'Cardiovascular',
      score:
        selectedOrgan === 'heart'
          ? `${healthScore}% Health`
          : '94% Health',
      description:
        selectedOrgan === 'heart'
          ? 'Currently being analyzed by the Digital Twin.'
          : 'Optimal cardiac output. Low calcification risk.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },

    {
      icon: Droplet,
      title: 'Metabolic / Liver',
      score:
        selectedOrgan === 'liver'
          ? `${healthScore}% Health`
          : '58% Health',
      description:
        selectedOrgan === 'liver'
          ? 'Current liver physiology is driving AI analysis.'
          : 'High enzymatic stress. Action required.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },

    {
      icon: Wind,
      title: 'Pulmonary',
      score:
        selectedOrgan === 'lungs'
          ? `${healthScore}% Health`
          : '82% Health',
      description:
        selectedOrgan === 'lungs'
          ? 'Respiratory system currently under simulation.'
          : 'Lung capacity normal for age group.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },

    {
      icon: Zap,
      title: 'Renal System',
      score:
        selectedOrgan === 'kidneys'
          ? `${healthScore}% Health`
          : '76% Health',
      description:
        selectedOrgan === 'kidneys'
          ? 'Renal performance actively monitored.'
          : 'Filtration rates slightly below baseline.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
  ]

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Systemic Health Insights
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            AI-generated cross-system assessment
          </p>
        </div>

        <div className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          {confidence}% AI Confidence
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {insights.map((insight) => {
          const Icon = insight.icon

          return (
            <div
              key={insight.title}
              className={`rounded-2xl border p-5 transition-all hover:-translate-y-1 hover:shadow-md ${insight.bgColor} ${insight.borderColor}`}
            >
              <div className="mb-5 flex items-center justify-between">
                <Icon
                  size={28}
                  className={insight.color}
                />

                {selectedOrgan &&
                  insight.title
                    .toLowerCase()
                    .includes(
                      selectedOrgan === 'lungs'
                        ? 'pulmonary'
                        : selectedOrgan === 'heart'
                        ? 'cardiovascular'
                        : selectedOrgan === 'liver'
                        ? 'liver'
                        : selectedOrgan === 'kidneys'
                        ? 'renal'
                        : ''
                    ) && (
                    <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-cyan-700">
                      ACTIVE
                    </span>
                  )}
              </div>

              <h3 className="mb-2 font-semibold text-slate-900">
                {insight.title}
              </h3>

              <div
                className={`mb-3 text-2xl font-bold ${insight.color}`}
              >
                {insight.score}
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {insight.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}