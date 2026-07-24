'use client'

import { ZoomIn, Activity, Zap } from 'lucide-react'

export function BiometricViz() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Biometric Visualization</h3>
          <p className="text-sm text-gray-500">Real-time Digital Twin synchronisation active</p>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
        {/* 3D Body Representation */}
        <div className="relative w-40 h-48 flex items-center justify-center">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full border border-cyan-400 rounded-lg"></div>
          </div>

          {/* Simplified body outline */}
          <svg
            className="w-24 h-32 text-cyan-300 opacity-60"
            viewBox="0 0 100 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            {/* Head */}
            <circle cx="50" cy="20" r="12" />
            {/* Torso */}
            <line x1="50" y1="32" x2="50" y2="70" />
            {/* Chest highlight */}
            <ellipse cx="50" cy="45" rx="18" ry="12" fill="rgba(0, 255, 255, 0.1)" />
            {/* Heart indicator */}
            <circle cx="50" cy="45" r="4" fill="rgba(255, 100, 100, 0.8)" />
            {/* Arms */}
            <line x1="50" y1="40" x2="30" y2="55" />
            <line x1="50" y1="40" x2="70" y2="55" />
            {/* Legs */}
            <line x1="45" y1="70" x2="40" y2="130" />
            <line x1="55" y1="70" x2="60" y2="130" />
          </svg>

          {/* Alert indicator */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>

        {/* Info card overlay */}
        <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 rounded-lg p-4 max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Patient Digital Twin</span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>Status: Active</p>
            <p>Last sync: 2 mins</p>
            <p>Health score: 72</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-200">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <ZoomIn size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Activity size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Zap size={20} />
        </button>
      </div>
    </div>
  )
}
