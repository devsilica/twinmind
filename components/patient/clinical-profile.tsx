'use client'

import { Lock, Activity } from 'lucide-react'

export function ClinicalProfile() {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Clinical Profile</h3>
            <p className="text-xs text-gray-500">Last updated: 2 hours ago</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
            <Lock size={20} className="text-blue-600" />
          </div>
        </div>

        {/* Patient Info Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Age</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">58 yrs</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">BMI</div>
            <div className="mt-1">
              <div className="text-2xl font-bold text-gray-900">29.4</div>
              <div className="text-xs text-red-600 font-medium">(Overweight)</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-6"></div>

        {/* Conditions */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-3">Conditions</div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full">
              Hypertension
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
              Diabetes Type 2
            </span>
          </div>
        </div>

        {/* Primary Medications */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-3">Primary Medications</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-blue-600" />
              <span className="text-sm text-gray-700">Lisinopril 10mg</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-blue-600" />
              <span className="text-sm text-gray-700">Metformin 500mg</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-6"></div>

        {/* Last Updated */}
        <div className="text-xs text-gray-500">
          Last updated: <span className="font-medium text-gray-700">Today, 08:42 AM</span>
        </div>
      </div>

      {/* Health Score Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-6">Aggregate Health Score</div>

        <div className="flex items-center justify-center mb-6">
          {/* Circular Progress */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              {/* Progress circle - 72% */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#2563eb"
                strokeWidth="8"
                strokeDasharray={`${(72 / 100) * 2 * Math.PI * 54} ${2 * Math.PI * 54}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-blue-600">72</div>
              <div className="text-xs text-gray-500 font-medium">Fair</div>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-600 text-center">
          Declined 4% since last month<br />
          due to metabolic markers.
        </div>
      </div>
    </div>
  )
}
