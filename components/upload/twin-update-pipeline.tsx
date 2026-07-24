'use client'

import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'

interface PipelineStep {
  id: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending'
  time?: string
}

const steps: PipelineStep[] = [
  {
    id: '1',
    title: 'PDF Uploaded',
    description: 'Completed 10:45 AM',
    status: 'completed',
    time: '10:45 AM',
  },
  {
    id: '2',
    title: 'Biomarkers Extracted',
    description: 'Completed 10:46 AM',
    status: 'completed',
    time: '10:46 AM',
  },
  {
    id: '3',
    title: 'HOLON Analysis',
    description: 'Complete',
    status: 'completed',
    time: '10:47 AM',
  },
  {
    id: '4',
    title: 'Syncing Digital Twin',
    description: 'In Progress...',
    status: 'in-progress',
  },
]

export function TwinUpdatePipeline() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Twin Update Pipeline</h3>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id}>
            <div className="flex items-start gap-4">
              {step.status === 'completed' && (
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
              )}
              {step.status === 'in-progress' && (
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1 animate-pulse">
                  <Clock size={16} className="text-blue-600" />
                </div>
              )}
              {step.status === 'pending' && (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
              )}

              <div className="flex-1">
                <div className="font-semibold text-gray-900">{step.title}</div>
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="ml-3 h-6 border-l-2 border-gray-200 my-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
