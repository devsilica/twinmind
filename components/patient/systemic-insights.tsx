'use client'

import { Heart, Droplet, Wind, Zap } from 'lucide-react'

interface InsightCard {
  icon: React.ComponentType<{ size: number; className: string }>
  title: string
  score: string
  description: string
  color: string
  bgColor: string
  borderColor: string
}

export function SystemicInsights() {
  const insights: InsightCard[] = [
    {
      icon: Heart,
      title: 'Cardiovascular',
      score: '94% Health',
      description: 'Optimal cardiac output. Low calcification risk.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      icon: Droplet,
      title: 'Metabolic / Liver',
      score: '58% Health',
      description: 'High enzymatic stress. Action required.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: Wind,
      title: 'Pulmonary',
      score: '82% Health',
      description: 'Lung capacity normal for age group.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Zap,
      title: 'Renal System',
      score: '76% Health',
      description: 'Filtration rates slightly below baseline.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Systemic Health Insights</h3>

      <div className="grid grid-cols-4 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon

          return (
            <div
              key={index}
              className={`border rounded-lg p-4 ${insight.bgColor} ${insight.borderColor}`}
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <Icon size={28} className={insight.color} />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-gray-900 text-sm mb-2">{insight.title}</h4>

              {/* Score */}
              <div className={`font-bold text-lg ${insight.color} mb-3`}>{insight.score}</div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">{insight.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
