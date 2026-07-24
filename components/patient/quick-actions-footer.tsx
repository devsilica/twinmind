'use client'

import { Upload, Play, Eye, Download } from 'lucide-react'

export function QuickActionsFooter() {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Action Buttons */}
      <div className="flex gap-3 flex-1">
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          <Upload size={18} />
          Upload Lab Report
        </button>
        <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          <Play size={18} />
          Run Simulation
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
          <Eye size={18} />
          View AI Explanation
        </button>
      </div>

      {/* Export Button */}
      <button className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 transition-colors">
        <Download size={18} />
        Export Summary
      </button>
    </div>
  )
}
