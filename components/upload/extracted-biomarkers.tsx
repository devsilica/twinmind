'use client'

interface Biomarker {
  name: string
  value: string
  unit: string
  status: 'Critical' | 'Elevated' | 'High' | 'Stable'
  statusColor: string
}

const biomarkers: Biomarker[] = [
  {
    name: 'ALT',
    value: '84',
    unit: 'U/L',
    status: 'Critical',
    statusColor: 'text-red-600',
  },
  {
    name: 'AST',
    value: '52',
    unit: 'U/L',
    status: 'Elevated',
    statusColor: 'text-orange-600',
  },
  {
    name: 'GLUCOSE',
    value: '118',
    unit: 'mg/dL',
    status: 'High',
    statusColor: 'text-yellow-600',
  },
  {
    name: 'HBA1C',
    value: '6.1',
    unit: '%',
    status: 'Stable',
    statusColor: 'text-blue-600',
  },
  {
    name: 'BLOOD PRESSURE',
    value: '145/92',
    unit: '',
    status: 'Critical',
    statusColor: 'text-red-600',
  },
]

export function ExtractedBiomarkers() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Extracted Biomarkers</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {biomarkers.map((biomarker) => (
          <div key={biomarker.name} className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
              {biomarker.name}
            </div>
            <div className="text-xl font-bold text-gray-900 mb-1">
              {biomarker.value}
              {biomarker.unit && <span className="text-sm text-gray-600">{biomarker.unit}</span>}
            </div>
            <div className={`text-xs font-medium flex items-center justify-center gap-1 ${biomarker.statusColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              {biomarker.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
