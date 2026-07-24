'use client'

import { Activity, Gauge, Eye, Lightbulb } from 'lucide-react'

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Health Score Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-colors">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-gray-600 text-sm font-medium mb-2">HEALTH SCORE</div>
            <div className="text-3xl font-bold text-gray-900">78%</div>
            <div className="text-sm text-green-600 font-medium mt-2">↑ 2% from yesterday</div>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-blue-100 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl">
              ✓
            </div>
          </div>
        </div>
      </div>

      {/* Twin Events Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-colors">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-gray-600 text-sm font-medium mb-2">TWIN EVENTS</div>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600 mt-2">Active processing loops</div>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Activity size={24} className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* Organs Monitored Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-colors">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-gray-600 text-sm font-medium mb-2">ORGANS MONITORED</div>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Eye size={24} className="text-green-600" />
          </div>
        </div>
      </div>

      {/* AI Insights Card */}
      <div className="bg-white rounded-2xl p-6 border border-cyan-200 hover:border-cyan-300 transition-colors">
        <div>
          <div className="text-cyan-600 text-sm font-bold mb-4 flex items-center gap-2">
            <Lightbulb size={16} />
            AI INSIGHTS
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-600">Clinical Insights</div>
            </div>
            <div className="text-xs text-gray-600">
              <div className="font-semibold text-gray-900">3 High Priority</div>
            </div>
            <div className="text-xs text-gray-600">
              <div className="font-semibold text-gray-900">2 Recommendations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
