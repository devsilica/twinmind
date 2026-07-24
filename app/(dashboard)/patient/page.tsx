'use client'

import { PatientPageHeader } from '@/components/patient/page-header'
import { TwinProvider } from '@/context/TwinContext'

import { DigitalTwinHero } from '@/components/patient/DigitalTwinHero'
import { OrganIntelligence } from '@/components/patient/OrganIntelligence'
import { BodySystems } from '@/components/patient/BodySystems'
import { HolonKnowledge } from '@/components/patient/HolonKnowledge'
import { TwinMetadata } from '@/components/patient/TwinMetadata'
import { SimulationPanel } from '@/components/patient/SimulationPanel'
import { ActionBar } from '@/components/patient/ActionBar'

import { ClinicalProfile } from '@/components/patient/clinical-profile'
import { AIHealthNarrative } from '@/components/patient/ai-health-narrative'
import { AIReasoningChain } from '@/components/patient/ai-reasoning-chain'
import { TwinTimeline } from '@/components/patient/twin-timeline'
import { LabMarkers } from '@/components/patient/lab-markers'
import { SystemicInsights } from '@/components/patient/systemic-insights'

export default function PatientPage() {
  return (
    <TwinProvider>
      <main>
        <PatientPageHeader />

        {/* Hero */}
        <DigitalTwinHero />

        {/* Intelligence */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <OrganIntelligence />
          </div>

          <div>
            <BodySystems />
          </div>
        </div>

        {/* Knowledge */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <HolonKnowledge />
          <TwinTimeline />
        </div>

        {/* Clinical */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ClinicalProfile />
          <TwinMetadata />
        </div>

        {/* AI */}
        <AIHealthNarrative />

        <AIReasoningChain />

        {/* Diagnostics */}
        <LabMarkers />

        <SystemicInsights />

        {/* Simulation */}
        <SimulationPanel />

        {/* Actions */}
        <ActionBar />
      </main>
    </TwinProvider>
  )
}