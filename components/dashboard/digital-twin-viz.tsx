'use client'

import { ZoomIn, Maximize2 } from 'lucide-react'

export function DigitalTwinViz() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mb-8 overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Digital Twin Visualization</h3>
          <p className="text-sm text-gray-600 mt-1">Real-time biological synchronization: James Carter</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ZoomIn size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Maximize2 size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-blue-400 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border border-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full border border-purple-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* 3D Body Representation */}
        <div className="relative z-10 text-center">
          <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
            🫀
          </div>
          <div className="text-sm text-cyan-300 font-mono">
            TwinMind AI Dashboard
          </div>
        </div>

        {/* Focus Area Popup */}
        <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-lg p-4 z-20 max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs font-bold text-gray-900">FOCUS AREA</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Liver (Hepatocytes)</h4>
          <p className="text-xs text-gray-600">
            Metabolic activity: Normal. Simulation predicts mild inflammation based on last lab upload.
          </p>
        </div>
      </div>
    </div>
  )
}
