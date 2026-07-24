'use client'

import { AlertCircle, CheckCircle2, Wifi, MoreVertical } from 'lucide-react'

import { useTwinContext } from "@/context/TwinProvider";

export function RecentEvents() {
  const { data, loading, error } = useTwinContext()

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Twin Events
          </h3>
        </div>

        <p className="text-sm text-gray-500">Loading Twin events...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl border border-red-200 p-6">
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  const events = (data?.events ?? []).map((event: any) => {
    let icon = Wifi
    let iconColor = 'text-blue-500 bg-blue-50'

    switch (event.eventType) {
      case 'diagnosis':
        icon = AlertCircle
        iconColor = 'text-red-500 bg-red-50'
        break

      case 'medication':
        icon = CheckCircle2
        iconColor = 'text-green-500 bg-green-50'
        break

      default:
        icon = Wifi
        iconColor = 'text-blue-500 bg-blue-50'
    }

    let description = event.eventType

    if (event.eventType === 'diagnosis') {
      description =
        event.data?.severity
          ? `Severity: ${event.data.severity}`
          : event.eventType
    }

    if (event.eventType === 'medication') {
      description =
        event.data?.dosage
          ? `Dosage: ${event.data.dosage}`
          : event.eventType
    }

    if (event.eventType === 'device_reading') {
      description =
        event.data?.value && event.data?.unit
          ? `${event.data.value} ${event.data.unit}`
          : event.eventType
    }

    if (event.eventType === 'symptom') {
      description =
        event.data?.symptom
          ? `Symptom: ${event.data.symptom}`
          : event.eventType
    }

    return {
      id: event.id,
      title: event.title,
      description,
      time: new Date(event.occurredAt).toLocaleDateString(),
      icon,
      iconColor,
    }
  })

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Twin Events
        </h3>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Empty State */}
      {events.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No recent events available.
        </div>
      )}

      {/* Events */}
      <div className="space-y-4">
        {events.map((event: any) => {
          const Icon = event.icon

          return (
            <div
              key={event.id}
              className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${event.iconColor}`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {event.title}
                </h4>

                <p className="text-xs text-gray-600 mt-1">
                  {event.description}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {event.time}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}