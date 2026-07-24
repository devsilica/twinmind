'use client'

import { Cloud, Upload } from 'lucide-react'
import { useState } from 'react'

export function UploadArea() {
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
        isDragActive
          ? 'border-blue-400 bg-blue-50'
          : 'border-gray-300 bg-gray-50 hover:border-gray-400'
      }`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <Cloud className="text-blue-600" size={28} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Drag & Drop your Lab Report
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Supported formats: PDF, Image, CSV (Max 25MB)
      </p>
      <button className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
        <Upload size={18} />
        Choose File
      </button>
    </div>
  )
}
