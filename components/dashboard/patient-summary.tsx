'use client'

export function PatientSummary() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
      {/* Patient Avatar & Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
          JC
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">James Carter</h3>
          <p className="text-sm text-gray-600">ID: #JC-88219</p>
        </div>
      </div>

      {/* Patient Details */}
      <div className="space-y-4 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">AGE</span>
          <span className="font-semibold text-gray-900">58 yrs</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">STATUS</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
            Active Twin
          </span>
        </div>
      </div>

      {/* Diagnoses */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Primary Diagnosis:</p>
            <p className="text-sm font-semibold text-gray-900">Hypertension</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Secondary:</p>
            <p className="text-sm font-semibold text-gray-900">Diabetes Type II</p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <p className="text-xs text-gray-600">Last updated:</p>
        <p className="text-sm font-semibold text-gray-900">Today, 08:42 AM</p>
      </div>
    </div>
  )
}
