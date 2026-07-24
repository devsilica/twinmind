import { IntroSection } from "@/components/dashboard/intro-section";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { DigitalTwinViz } from "@/components/dashboard/digital-twin-viz";
import { AIHealthStory } from "@/components/dashboard/ai-health-story";
import { VitalsTrend } from "@/components/dashboard/vitals-trend";
import { PatientSummary } from "@/components/dashboard/patient-summary";
import { RecentEvents } from "@/components/dashboard/recent-events";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Intro Section */}
      <IntroSection />

      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Main Grid */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left */}
        <div className="space-y-8 lg:col-span-2">
          <DigitalTwinViz />
          <AIHealthStory />
          <VitalsTrend />
        </div>

        {/* Right */}
        <div className="space-y-8">
          <PatientSummary />
          <RecentEvents />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}