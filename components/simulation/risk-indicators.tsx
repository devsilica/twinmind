'use client'

import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

export function RiskIndicators() {
  const indicators = [
    {
      label: 'LIVER RECOVERY',
      value: '+26%',
      icon: TrendingUp,
      color: 'text-green-600',
      trend: 'up',
    },
    {
      label: 'BLOOD PRESSURE',
      value: '-18%',
      icon: TrendingDown,
      color: 'text-blue-600',
      trend: 'down',
    },
    {
      label: 'HBAIC DELTA',
      value: '-0.8%',
      icon: TrendingDown,
      color: 'text-purple-600',
      trend: 'down',
    },
    {
      label: 'HOSPITAL RISK',
      value: '-41%',
      icon: AlertCircle,
      color: 'text-red-600',
      trend: 'down',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {indicators.map((indicator, idx) => {
        const Icon = indicator.icon
        return (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100"
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              {indicator.label}
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon size={20} className={indicator.color} />
              <span className={`text-2xl font-bold ${indicator.color}`}>
                {indicator.value}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
