'use client'

import {
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'

interface Marker {
  name: string
  value: string
  reference: string
  status: 'critical' | 'elevated' | 'high' | 'stable'
  trend: 'up' | 'down' | 'stable'
}

const labDatabase: Record<string, Marker[]> = {
  lungs: [
    {
      name: 'SpO₂',
      value: '94%',
      reference: '95–100%',
      status: 'high',
      trend: 'down',
    },
    {
      name: 'FEV1',
      value: '78%',
      reference: '>80%',
      status: 'elevated',
      trend: 'up',
    },
    {
      name: 'Peak Flow',
      value: '420 L/min',
      reference: '400–700',
      status: 'stable',
      trend: 'stable',
    },
  ],

  heart: [
    {
      name: 'Heart Rate',
      value: '74 bpm',
      reference: '60–100',
      status: 'stable',
      trend: 'stable',
    },
    {
      name: 'Blood Pressure',
      value: '122/78',
      reference: '120/80',
      status: 'stable',
      trend: 'stable',
    },
    {
      name: 'Troponin',
      value: '0.01 ng/mL',
      reference: '<0.04',
      status: 'stable',
      trend: 'down',
    },
  ],

  brain: [
    {
      name: 'EEG Activity',
      value: 'Normal',
      reference: 'Normal',
      status: 'stable',
      trend: 'stable',
    },
    {
      name: 'Cognitive Score',
      value: '96%',
      reference: '>90%',
      status: 'stable',
      trend: 'up',
    },
    {
      name: 'Reaction Time',
      value: '230 ms',
      reference: '200–250',
      status: 'stable',
      trend: 'stable',
    },
  ],

  liver: [
    {
      name: 'ALT',
      value: '84 U/L',
      reference: '0–45 U/L',
      status: 'critical',
      trend: 'up',
    },
    {
      name: 'AST',
      value: '52 U/L',
      reference: '0–40 U/L',
      status: 'elevated',
      trend: 'up',
    },
    {
      name: 'Bilirubin',
      value: '1.0 mg/dL',
      reference: '0.3–1.2',
      status: 'stable',
      trend: 'stable',
    },
  ],

  stomach: [
    {
      name: 'Gastric pH',
      value: '2.1',
      reference: '1.5–3.5',
      status: 'stable',
      trend: 'stable',
    },
    {
      name: 'Digestive Rate',
      value: 'Normal',
      reference: 'Normal',
      status: 'stable',
      trend: 'stable',
    },
    {
      name: 'Microbiome',
      value: 'Healthy',
      reference: 'Healthy',
      status: 'stable',
      trend: 'up',
    },
  ],

  kidneys: [
    {
      name: 'Creatinine',
      value: '0.9 mg/dL',
      reference: '0.7–1.3',
      status: 'stable',
      trend: 'stable',
    },
    {
      name: 'eGFR',
      value: '105',
      reference: '>90',
      status: 'stable',
      trend: 'up',
    },
    {
      name: 'Urea',
      value: '28 mg/dL',
      reference: '15–40',
      status: 'stable',
      trend: 'stable',
    },
  ],
}

export function LabMarkers() {
  const {
    selectedOrgan,
  } = useTwinContext()

  const organ = selectedOrgan ?? 'lungs'

  const markers =
    labDatabase[organ] ?? labDatabase.lungs

  const getTrendIcon = (trend: Marker['trend']) => {
    switch (trend) {
      case 'up':
        return (
          <TrendingUp
            size={16}
            className="text-red-600"
          />
        )

      case 'down':
        return (
          <TrendingDown
            size={16}
            className="text-green-600"
          />
        )

      default:
        return (
          <Minus
            size={16}
            className="text-gray-400"
          />
        )
    }
  }

  const getStatusColor = (
    status: Marker['status']
  ) => {
    return {
      critical: 'bg-red-50 text-red-700',
      elevated: 'bg-orange-50 text-orange-700',
      high: 'bg-yellow-50 text-yellow-700',
      stable: 'bg-blue-50 text-blue-700',
    }[status]
  }

  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Laboratory Markers
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Live biomarkers for{' '}
            <span className="font-semibold capitalize">
              {organ}
            </span>
          </p>
        </div>

        <div className="flex gap-4">
          <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
            History
          </button>

          <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
            Compare
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left font-semibold">
                Marker
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Value
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Reference
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Status
              </th>

              <th className="px-4 py-3 text-center font-semibold">
                Trend
              </th>
            </tr>
          </thead>

          <tbody>
            {markers.map((marker) => (
              <tr
                key={marker.name}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-4 py-4 font-medium">
                  {marker.name}
                </td>

                <td className="px-4 py-4">
                  {marker.value}
                </td>

                <td className="px-4 py-4">
                  {marker.reference}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                      marker.status
                    )}`}
                  >
                    {marker.status.toUpperCase()}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex justify-center">
                    {getTrendIcon(marker.trend)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}