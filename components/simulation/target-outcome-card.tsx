'use client'

export function TargetOutcomeCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">PREDICTED STATE</p>
          <span className="inline-block mt-2 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
            IMPROVED
          </span>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 mb-6">Target Outcome</h3>
      <p className="text-xs text-gray-600 mb-6">Month 12 Projection</p>

      {/* Health Score Circle */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#059669"
              strokeWidth="8"
              strokeDasharray={`${(89 / 100) * 314} 314`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900">89</div>
            <div className="text-xs text-gray-500">Score</div>
          </div>
        </div>
      </div>

      {/* Risk Reduction */}
      <div className="bg-teal-50 rounded-lg p-4 text-center">
        <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-1">RISK REDUCTION</p>
        <p className="text-2xl font-bold text-teal-700">-38%</p>
      </div>

      {/* Future State Placeholder */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 flex items-center justify-center min-h-32">
          <span className="text-xs text-gray-600 font-semibold">FUTURE STATE: T12</span>
        </div>
      </div>
    </div>
  )
}
