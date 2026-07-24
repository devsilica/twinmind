'use client'

export function SimulateOutcome() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Simulate Outcome</h2>
        <p className="text-sm text-gray-600 mb-6">
          Adjust physiological and behavioral variables to project James&apos;s metabolic trajectory.
        </p>

        {/* Scenario and Confidence */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
              SELECT SCENARIO
            </label>
            <button className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-gray-300 text-left">
              Lifestyle Improveme
            </button>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
              CONFIDENCE MODEL
            </label>
            <div className="px-4 py-3 bg-teal-50 border border-teal-200 rounded-lg">
              <span className="text-sm font-semibold text-teal-700">Neural Precision</span>
            </div>
          </div>
        </div>

        {/* Time Horizon */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-3">
            TIME HORIZON
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              defaultValue={12}
              min={1}
              max={24}
              step={1}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <span className="text-lg font-bold text-blue-600 w-20">12 Months</span>
          </div>
          <div className="flex justify-between mt-2 px-2">
            {['3 MONTHS', '6 MONTHS', '12 MONTHS', '24 MONTHS'].map((label) => (
              <span key={label} className="text-xs text-gray-500">{label}</span>
            ))}
          </div>
        </div>

        {/* Simulation Parameters */}
        <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">✓</span>
            Simulation Parameters
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Applying weight reduction of 8kg and introduction of Metformin 500mg daily.</li>
            <li>• Caloric intake targeted at 1,800 kal/day.</li>
          </ul>
        </div>

        {/* Run Simulation Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
          <span>▶</span> Run Simulation
        </button>
      </div>
    </div>
  )
}
