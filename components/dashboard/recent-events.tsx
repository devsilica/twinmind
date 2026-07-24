'use client'

import { AlertCircle, CheckCircle2, Wifi, MoreVertical } from 'lucide-react'

export function RecentEvents() {
  const events = [
    {
      id: 1,
      type: 'alert',
      title: 'Liver enzyme spike detected',
      description: 'Simulation synchronization anomaly detected in metabolic pathway.',
      time: '2 hours ago',
      icon: AlertCircle,
    },
    {
      id: 2,
      type: 'success',
      title: 'Simulation complete',
      description: 'Medication adjustment simulation (Pathway B) completed successfully.',
      time: '5 hours ago',
      icon: CheckCircle2,
    },
    {
      id: 3,
      type: 'info',
      title: 'Vitals synchronized',
      description: 'Wearable data integration successful.',
      time: '08:00 AM',
      icon: Wifi,
    },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Twin Events</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => {
          const Icon = event.icon
          const iconColor =
            event.type === 'alert'
              ? 'text-red-500 bg-red-50'
              : event.type === 'success'
                ? 'text-green-500 bg-green-50'
                : 'text-blue-500 bg-blue-50'

          return (
            <div key={event.id} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${iconColor}`}>
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{event.description}</p>
                <p className="text-xs text-gray-500 mt-2">{event.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
