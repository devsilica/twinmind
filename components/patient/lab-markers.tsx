'use client'

import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface Marker {
  name: string
  value: string
  reference: string
  status: 'critical' | 'elevated' | 'high' | 'stable'
  trend: 'up' | 'down' | 'stable'
}

export function LabMarkers() {
  const markers: Marker[] = [
    {
      name: 'ALT (Alanine Aminotransferase)',
      value: '84 U/L',
      reference: '0—45 U/L',
      status: 'critical',
      trend: 'up',
    },
    {
      name: 'AST (Aspartate Aminotransferase)',
      value: '52 U/L',
      reference: '0—40 U/L',
      status: 'elevated',
      trend: 'up',
    },
    {
      name: 'Glucose (Fasting)',
      value: '118 mg/dL',
      reference: '70—99 mg/dL',
      status: 'high',
      trend: 'stable',
    },
    {
      name: 'HbA1c',
      value: '6.1%',
      reference: '4.0—5.6%',
      status: 'stable',
      trend: 'down',
    },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-red-600" />
      case 'down':
        return <TrendingDown size={16} className="text-green-600" />
      default:
        return <Minus size={16} className="text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    const colors = {
      critical: 'bg-red-50 text-red-700',
      elevated: 'bg-orange-50 text-orange-700',
      high: 'bg-yellow-50 text-yellow-700',
      stable: 'bg-blue-50 text-blue-700',
    }
    return colors[status as keyof typeof colors]
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Latest Lab Markers</h3>
        <div className="flex gap-4">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">History</button>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Compare</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-4 py-3 font-semibold text-gray-900 bg-gray-50">Marker</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-900 bg-gray-50">Value</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-900 bg-gray-50">Reference</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-900 bg-gray-50">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-900 bg-gray-50">Trend</th>
            </tr>
          </thead>
          <tbody>
            {markers.map((marker, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <div className="font-medium text-gray-900">{marker.name}</div>
                </td>
                <td className="px-4 py-4 text-gray-700">{marker.value}</td>
                <td className="px-4 py-4 text-gray-600">{marker.reference}</td>
                <td className="px-4 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(marker.status)}`}>
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
    </div>
  )
}
