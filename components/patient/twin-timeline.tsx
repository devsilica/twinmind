'use client'

import { Circle } from 'lucide-react'

export function TwinTimeline() {
  const events = [
    {
      date: 'Oct 24, 09:12',
      title: 'Simulation Complete',
      description: 'Metabolic Pathway V.4',
    },
    {
      date: 'Oct 24, 08:30',
      title: 'Twin Updated',
      description: 'Syncing H2 data points',
    },
    {
      date: 'Oct 23, 14:45',
      title: 'Lab Report Uploaded',
      description: 'Manual PDF Import',
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-8">Twin Timeline</h3>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-blue-600 mt-1.5"></div>
              {index < events.length - 1 && (
                <div className="w-0.5 h-12 bg-gray-200 my-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="pb-2 flex-1">
              <div className="text-xs text-gray-500 font-medium">{event.date}</div>
              <div className="text-sm font-semibold text-gray-900 mt-1">{event.title}</div>
              <div className="text-xs text-gray-600 mt-0.5">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
