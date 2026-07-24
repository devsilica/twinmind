'use client'

import { BookOpen, ArrowRight } from 'lucide-react'

export function AIHealthNarrative() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <BookOpen size={20} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">AI Health Story</h3>
        </div>
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Generative Insight
        </span>
      </div>

      {/* Narrative Text */}
      <div className="mb-8 text-sm leading-relaxed text-gray-700">
        <p className="mb-4">
          James, your digital twin has detected a <span className="font-semibold text-red-600">significant upward trend in ALT levels (84 U/L)</span>, which is a 40% increase from your baseline six months ago.
        </p>
        <p>
          The simulation engine correlates this with recent medication changes and a slightly increased glycemic index in your diet. This combination is placing <span className="font-semibold">"Metabolic Stress"</span> on the liver, potentially leading to stage 1 fatty liver inflammation if unaddressed.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          <BookOpen size={18} />
          View Full Story
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
          Download Clinical Narrative
        </button>
      </div>
    </div>
  )
}
