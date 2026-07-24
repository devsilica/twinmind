'use client'

import {
  Activity,
  AlertCircle,
  Pill,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { useTwinContext } from '@/context/TwinContext'
import { normalizeOrgan } from "@/lib/normalize-organ";



const organData = {
  brain: {
    status: 'Healthy',
    diagnosis: 'Normal neurological function.',
    medication: 'None',
    risk: 'Low',
    recommendation: 'Maintain healthy sleep and hydration.',
  },
  heart: {
    status: 'Healthy',
    diagnosis: 'Normal cardiac rhythm.',
    medication: 'None',
    risk: 'Low',
    recommendation: 'Continue regular exercise.',
  },
  lungs: {
    status: 'Active',
    diagnosis: 'Mild persistent asthma.',
    medication: 'Albuterol Inhaler',
    risk: 'Moderate',
    recommendation: 'Monitor respiratory function.',
  },
  liver: {
    status: 'Healthy',
    diagnosis: 'Normal liver enzymes.',
    medication: 'None',
    risk: 'Low',
    recommendation: 'Maintain balanced nutrition.',
  },
  stomach: {
    status: 'Healthy',
    diagnosis: 'Normal digestive function.',
    medication: 'None',
    risk: 'Low',
    recommendation: 'Continue healthy diet.',
  },
  kidneys: {
    status: 'Healthy',
    diagnosis: 'Normal renal function.',
    medication: 'None',
    risk: 'Low',
    recommendation: 'Stay hydrated.',
  },
} as const

export function OrganIntelligence() {
  const { selectedOrgan } = useTwinContext()

const displayOrgan = selectedOrgan;
const organ = normalizeOrgan(selectedOrgan);

const data =
  organ &&
  organData[organ as keyof typeof organData];


  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-cyan-600" />

        <div>
          <h2 className="text-xl font-semibold">
            Organ Intelligence
          </h2>

          <p className="text-sm text-slate-500">
            AI-powered physiological analysis
          </p>
        </div>
      </div>

      {!data ? (
        <div className="rounded-2xl border border-dashed p-8 text-center">
          <Activity className="mx-auto mb-3 h-10 w-10 text-slate-300" />

          <p className="text-slate-500">
            Select an organ to inspect its digital twin.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Selected Organ
            </p>

            <h3 className="mt-1 text-2xl font-bold capitalize">
              {displayOrgan
  ?.replace("left-lung", "Left Lung")
  .replace("right-lung", "Right Lung")
  .replace("kidney-left", "Left Kidney")
  .replace("kidney-right", "Right Kidney")}
            </h3>
          </div>

          <div className="grid gap-4">
            <InfoCard
              icon={<ShieldCheck className="h-5 w-5 text-green-600" />}
              title="Status"
              value={data.status}
            />

            <InfoCard
              icon={<AlertCircle className="h-5 w-5 text-blue-600" />}
              title="Diagnosis"
              value={data.diagnosis}
            />

            <InfoCard
              icon={<Pill className="h-5 w-5 text-purple-600" />}
              title="Medication"
              value={data.medication}
            />

            <InfoCard
              icon={<Activity className="h-5 w-5 text-orange-600" />}
              title="Risk Level"
              value={data.risk}
            />

            <InfoCard
              icon={<Sparkles className="h-5 w-5 text-cyan-600" />}
              title="Recommendation"
              value={data.recommendation}
            />
          </div>
        </div>
      )}
    </div>
  )
}

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  value: string
}

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border bg-slate-50 p-4">
      <div>{icon}</div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-800">
          {value}
        </p>
      </div>
    </div>
  )
}