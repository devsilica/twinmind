'use client'

import { Lightbulb, ArrowRight } from 'lucide-react'

export function AIHealthStory() {
  return (
    <div className="bg-white rounded-2xl border-2 border-cyan-300 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={20} className="text-cyan-600" />
        <h3 className="text-lg font-bold text-gray-900">AI Health Story</h3>
      </div>

      {/* Story Text */}
      <p className="text-gray-700 leading-relaxed italic mb-6">
        &quot;James has shown a persistent 5% increase in resting heart rate over the last 48 hours. This correlates with a minor spike in simulated liver enzymes. Recommend running a Stress-Metabolism simulation before the next consultation.&quot;
      </p>

      {/* CTA Link */}
      <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center gap-2 group">
        View full longitudinal analysis
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}
