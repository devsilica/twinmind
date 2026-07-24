'use client'

import { Eye, Play, RefreshCw, Info } from 'lucide-react'

export function UploadActions() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-900">
          Updates will be visible to clinical staff immediately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <Eye size={18} />
          View Patient Twin
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <Play size={18} />
          Run Simulation
        </button>

        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm">
          <RefreshCw size={18} />
          Update Digital Twin
        </button>
      </div>

      <div className="flex items-center justify-end gap-2 text-xs text-gray-600">
        <p>Export Summary</p>
      </div>
    </div>
  )
}
