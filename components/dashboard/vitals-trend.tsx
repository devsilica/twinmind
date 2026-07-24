'use client'

export function VitalsTrend() {
  const data = [
    { day: 'Mon', bpm: 72 },
    { day: 'Tue', bpm: 74 },
    { day: 'Wed', bpm: 76 },
    { day: 'Thu', bpm: 78 },
    { day: 'Today', bpm: 85 },
  ]

  const maxBpm = 90
  const minBpm = 70

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Vital Signs Trend</h3>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">BPM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">BP</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-48 gap-4 px-2">
        {data.map((item) => {
          const percentage = ((item.bpm - minBpm) / (maxBpm - minBpm)) * 100
          const isHighlight = item.day === 'Today'

          return (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full h-32 flex items-flex-end justify-center">
                  <div
                    className={`w-12 rounded-t-lg transition-all ${
                      isHighlight
                        ? 'bg-blue-600 shadow-lg'
                        : 'bg-blue-200'
                    }`}
                    style={{ height: `${percentage}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-600">{item.day}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
