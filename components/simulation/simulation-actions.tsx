'use client'

import { Save, RefreshCw, Download, Zap } from 'lucide-react'

export function SimulationActions() {
  return (
    <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-200">
      <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
        <Save size={18} />
        Save Simulation
      </button>
      <button className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
        <RefreshCw size={18} />
        Update Digital Twin
      </button>
      <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
        <Download size={18} />
        Export PDF
      </button>
      <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
        <Zap size={18} />
        Run Another Scenario
      </button>
    </div>
  )
}
