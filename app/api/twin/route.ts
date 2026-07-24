import { NextResponse } from "next/server";
import { getEvents } from "@/services/ontomorph/twins";
import { buildDashboard } from "@/services/dashboard/dashboard.service";

export async function GET() {
  try {
    const events = await getEvents();

    const dashboard = buildDashboard(events);

    return NextResponse.json({
      success: true,
      ...dashboard,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}