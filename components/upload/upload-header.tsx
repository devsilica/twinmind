'use client'

import { FileUp } from 'lucide-react'

export function UploadHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <FileUp className="text-blue-600" size={20} />
        <span className="text-sm font-medium text-blue-600">Lab Analysis Pipeline</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Clinical Report</h1>
      <p className="text-gray-600">
        Import laboratory reports, medical records or biomarker results to update the patient&apos;s Digital Twin.
      </p>
    </div>
  )
}
