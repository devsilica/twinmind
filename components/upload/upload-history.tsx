'use client'

import { CheckCircle2, MoreVertical } from 'lucide-react'

interface UploadedFile {
  id: string
  filename: string
  uploadTime: string
  status: 'Analyzed' | 'Processing' | 'Failed'
  synced: boolean
}

const files: UploadedFile[] = [
  {
    id: '1',
    filename: 'Blood_Report_Oct.pdf',
    uploadTime: 'Today, 10:45 AM',
    status: 'Analyzed',
    synced: true,
  },
  {
    id: '2',
    filename: 'Biomarkers_Q3.csv',
    uploadTime: 'Oct 24, 2023',
    status: 'Analyzed',
    synced: true,
  },
]

export function UploadHistory() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recently Uploaded Reports</h3>
        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View all files
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Filename
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Upload Time
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Synced
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{file.filename}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{file.uploadTime}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    {file.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {file.synced && <CheckCircle2 className="text-teal-500" size={18} />}
                </td>
                <td className="px-4 py-3">
                  <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
