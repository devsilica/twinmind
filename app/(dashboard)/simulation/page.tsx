'use client'

import { SimulationHeader } from '@/components/simulation/simulation-header'
import { CurrentStateCard } from '@/components/simulation/current-state-card'
import { SimulateOutcome } from '@/components/simulation/simulate-outcome'
import { TargetOutcomeCard } from '@/components/simulation/target-outcome-card'
import { PredictionTimeline } from '@/components/simulation/prediction-timeline'
import { OrganComparison } from '@/components/simulation/organ-comparison'
import { PredictionSummary } from '@/components/simulation/prediction-summary'
import { RiskIndicators } from '@/components/simulation/risk-indicators'
import { ActiveTrials } from '@/components/simulation/active-trials'
import { SimulationActions } from '@/components/simulation/simulation-actions'

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <main className="ml-48 mt-20 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SimulationHeader />

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Simulate Outcome */}
              <SimulateOutcome />

              {/* Prediction Timeline */}
              <PredictionTimeline />

              {/* Organ Systems Comparison */}
              <OrganComparison />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Current State */}
              <CurrentStateCard />

              {/* Target Outcome */}
              <TargetOutcomeCard />
            </div>
          </div>

          {/* Full Width Prediction Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Prediction Summary */}
            <div className="lg:col-span-2">
              <PredictionSummary />
            </div>

            {/* Risk Indicators */}
            <div className="space-y-8">
              <RiskIndicators />
            </div>
          </div>

          {/* Risk and Trials Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <RiskIndicators />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <ActiveTrials />
            </div>

            {/* Actions Footer */}
            <SimulationActions />
          </div>
        </div>
      </main>
    </div>
  )
}
