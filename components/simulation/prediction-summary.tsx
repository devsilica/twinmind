'use client'

import { TrendingUp } from 'lucide-react'

export function PredictionSummary() {
  return (
    <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <TrendingUp size={20} className="text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">TwinMind Prediction</h3>
          <p className="text-xs text-gray-500">
            Based on James&apos;s current metabolic markers and the HOLON clinical knowledge graph, the 12-month trajectory shows a
          </p>
        </div>
      </div>

      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold">significant reversal of fatty liver indicators.</span>
        </p>

        <p>
          Adherence to the weight management protocol and metformin initiation is projected to reduce systemic inflammation by 22% within 90 days. We anticipate a primary recovery phase between months 4 and 7, where glucose variability stabilizes.
        </p>

        <div className="flex gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase">RISK</p>
            <p className="font-semibold text-gray-900 text-lg">Low Compliance</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-red-600 uppercase">ALERT</p>
            <p className="font-semibold text-red-600">Impact: -12 Score</p>
          </div>
        </div>
      </div>
    </div>
  )
}
