'use client'

import { UploadHeader } from '@/components/upload/upload-header'
import { UploadArea } from '@/components/upload/upload-area'
import { UploadHistory } from '@/components/upload/upload-history'
import { ExtractedBiomarkers } from '@/components/upload/extracted-biomarkers'
import { ClinicalUnderstanding } from '@/components/upload/clinical-understanding'
import { TwinUpdatePipeline } from '@/components/upload/twin-update-pipeline'
import { UploadActions } from '@/components/upload/upload-actions'

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="ml-48 mt-20 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <UploadHeader />

          {/* Upload Area */}
          <div className="mb-8">
            <UploadArea />
          </div>

          {/* Upload History */}
          <div className="mb-8">
            <UploadHistory />
          </div>

          {/* Extracted Biomarkers */}
          <div className="mb-8">
            <ExtractedBiomarkers />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Clinical Understanding */}
            <div className="lg:col-span-2">
              <ClinicalUnderstanding />
            </div>

            {/* Right Column - Twin Update Pipeline */}
            <div>
              <TwinUpdatePipeline />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-8">
            <UploadActions />
          </div>
        </div>
      </main>
    </div>
  )
}
