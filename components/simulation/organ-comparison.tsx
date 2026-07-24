'use client'

export function OrganComparison() {
  const organs = [
    {
      name: 'Cardiovascular (Heart)',
      current: 92,
      predicted: 95,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Metabolic (Liver)',
      current: 58,
      predicted: 84,
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Renal (Kidney)',
      current: 89,
      predicted: 91,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Endocrine (Pancreas)',
      current: 64,
      predicted: 78,
      color: 'from-yellow-500 to-yellow-600',
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Organ Systems Comparison</h2>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded"></div>
          <span className="text-gray-700 font-medium">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <span className="text-gray-700 font-medium">Predicted (12M)</span>
        </div>
      </div>

      {/* Organ Bars */}
      <div className="space-y-6">
        {organs.map((organ, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-900">{organ.name}</h3>
              <span className="text-sm text-gray-600">
                {organ.current} → {organ.predicted}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* Current Bar */}
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${organ.color}`}
                  style={{ width: `${organ.current}%` }}
                ></div>
              </div>
              {/* Predicted Bar */}
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-400"
                  style={{ width: `${organ.predicted}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
