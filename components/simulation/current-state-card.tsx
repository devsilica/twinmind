'use client'

import { AlertCircle } from 'lucide-react'

export function CurrentStateCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">CURRENT STATE</p>
          <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            LIVE
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">James Carter</h3>
        <p className="text-sm text-gray-600">ID: TW-2921-X</p>
      </div>

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
              stroke="#2563eb"
              strokeWidth="8"
              strokeDasharray={`${(72 / 100) * 314} 314`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-900">72</div>
            <div className="text-xs text-gray-500">Score</div>
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <AlertCircle size={16} className="text-yellow-600" />
          <span className="text-gray-900">Hypertension</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <AlertCircle size={16} className="text-yellow-600" />
          <span className="text-gray-900">Type 2 Diabetes</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <AlertCircle size={16} className="text-red-600" />
          <span className="text-red-700 font-semibold">Liver Stress</span>
        </div>
      </div>

      {/* Anatomy Section */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 flex items-center justify-center min-h-32">
          <span className="text-xs text-gray-600 font-semibold">ANATOMY MAPPED: 11</span>
        </div>
      </div>
    </div>
  )
}
