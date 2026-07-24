'use client'

export function PredictionTimeline() {
  const timelineEvents = [
    { label: 'Today', score: 'Score: 72', isActive: true },
    { label: 'M3', score: 'Score: 75' },
    { label: 'M6', score: 'Score: 81', isHighlight: true },
    { label: 'M9', score: 'Score: 86' },
    { label: 'M12', score: 'Score: 89' },
  ]

  const milestones = [
    { title: 'Initial Lab Screening', period: 'Today' },
    { title: 'Lipid Profile Stabilizes', period: 'M3' },
    { title: 'ALT/AST Recovery', period: 'M6' },
    { title: 'HbA1c Target Reached', period: 'M9' },
    { title: 'Full Metabolic Remission', period: 'M12' },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Prediction Timeline</h2>

      {/* Timeline Markers */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white transition-all ${
                  event.isActive
                    ? 'bg-blue-600 scale-110'
                    : event.isHighlight
                      ? 'bg-teal-600'
                      : 'bg-blue-400'
                }`}
              >
                •
              </div>
              <p className="text-xs font-semibold text-gray-900 mt-2">{event.label}</p>
              <p className="text-xs text-gray-500">{event.score}</p>
            </div>
          ))}
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-teal-600 rounded-full"></div>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-5 gap-3">
        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg border text-center text-xs font-semibold transition-colors ${
              idx === 2
                ? 'bg-teal-50 border-teal-200 text-teal-700'
                : 'bg-gray-50 border-gray-200 text-gray-700'
            }`}
          >
            <div>{milestone.title}</div>
            <div className="text-gray-500 text-xs mt-1">{milestone.period}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
