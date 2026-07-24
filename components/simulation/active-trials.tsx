'use client'

export function ActiveTrials() {
  const trials = [
    'Optimized Ketosis Path',
    'Standard Care Projection',
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase">Active Trials</h3>
      <ul className="space-y-3">
        {trials.map((trial, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            {trial}
          </li>
        ))}
      </ul>
    </div>
  )
}
