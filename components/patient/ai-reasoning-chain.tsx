'use client'

import { AlertCircle, Brain, BarChart3, Shield } from 'lucide-react'

export function AIReasoningChain() {
  const steps = [
    {
      icon: AlertCircle,
      title: 'Trigger Event',
      content: 'ALT & AST Lab Results ↑',
      color: 'red',
    },
    {
      icon: Brain,
      title: 'Knowledge Layer',
      content: 'HOLON Clinical Knowledge Base',
      color: 'blue',
    },
    {
      icon: BarChart3,
      title: 'Probabilistic Outcome',
      content: 'Likely liver inflammation detected',
      color: 'green',
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-8">AI Reasoning Chain</h3>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          const colorClasses = {
            red: 'bg-red-50 text-red-600 border-red-200',
            blue: 'bg-blue-50 text-blue-600 border-blue-200',
            green: 'bg-green-50 text-green-600 border-green-200',
          }

          return (
            <div key={index}>
              <div className={`border rounded-lg p-4 ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide opacity-75">
                      {step.title}
                    </div>
                    <div className="font-medium mt-2">{step.content}</div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <div className="w-0.5 h-6 bg-gray-300"></div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Confidence Section */}
      <div className="mt-8 pt-8 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
              Confidence Level
            </div>
            <div className="text-3xl font-bold text-blue-600">92%</div>
            <div className="text-xs text-gray-600 mt-1">
              Based on 142 synchronized health events
            </div>
          </div>
          <Shield size={40} className="text-green-600 opacity-20" />
        </div>
      </div>
    </div>
  )
}
