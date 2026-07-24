'use client'

import { PatientPageHeader } from '@/components/patient/page-header'
import { BiometricViz } from '@/components/patient/biometric-viz'
import { ClinicalProfile } from '@/components/patient/clinical-profile'
import { AIHealthNarrative } from '@/components/patient/ai-health-narrative'
import { AIReasoningChain } from '@/components/patient/ai-reasoning-chain'
import { TwinTimeline } from '@/components/patient/twin-timeline'
import { LabMarkers } from '@/components/patient/lab-markers'
import { SystemicInsights } from '@/components/patient/systemic-insights'
import { QuickActionsFooter } from '@/components/patient/quick-actions-footer'

export default function PatientPage() {
  return (
    <main className="ml-48 mt-20 p-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <PatientPageHeader />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biometric Visualization */}
            <BiometricViz />

            {/* AI Health Narrative */}
            <AIHealthNarrative />

            {/* AI Reasoning Chain */}
            <AIReasoningChain />
          </div>

          {/* Right Column - Clinical Profile & Timeline */}
          <div className="space-y-8">
            {/* Clinical Profile */}
            <ClinicalProfile />

            {/* Twin Timeline */}
            <TwinTimeline />
          </div>
        </div>

        {/* Lab Markers Table */}
        <div className="mb-8">
          <LabMarkers />
        </div>

        {/* Systemic Health Insights */}
        <div className="mb-8">
          <SystemicInsights />
        </div>

        {/* Quick Actions Footer */}
        <div className="mb-8">
          <QuickActionsFooter />
        </div>
      </div>
    </main>
  )
}
