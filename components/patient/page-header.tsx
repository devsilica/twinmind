'use client'

import { ChevronRight } from 'lucide-react'

export function PatientPageHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span>Dashboard</span>
        <ChevronRight size={16} />
        <span className="font-medium text-gray-900">Patient Twin</span>
      </div>

      {/* Patient Info Bar */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">James Carter, 58</h1>
          <p className="text-sm text-gray-500 mt-1">Digital Twin ID: #JC-88219</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-600"></div>
          <span className="text-sm font-semibold text-green-700">Twin Status: Synced</span>
        </div>
      </div>
    </div>
  )
}
