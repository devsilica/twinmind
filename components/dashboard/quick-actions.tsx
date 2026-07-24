'use client'

import { Cloud, Eye, Zap, Lightbulb, ArrowRight } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      icon: Cloud,
      title: 'Upload Report',
      color: 'text-blue-600 bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Eye,
      title: 'Open Twin',
      color: 'text-teal-600 bg-teal-50',
      borderColor: 'border-teal-200',
    },
    {
      icon: Zap,
      title: 'Run Simulation',
      color: 'text-yellow-600 bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
  ]

  return (
    <div className="space-y-3">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <button
            key={action.title}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border ${action.borderColor} ${action.color} hover:shadow-md transition-all group`}
          >
            <div className="flex items-center gap-3">
              <Icon size={20} />
              <span className="font-semibold text-sm">{action.title}</span>
            </div>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        )
      })}

      {/* Explain Findings Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl mt-6">
        <Lightbulb size={20} />
        <span>Explain Findings</span>
      </button>
    </div>
  )
}
