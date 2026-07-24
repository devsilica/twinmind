import { NextResponse } from "next/server";
import { getBodySystem, getEvents } from "@/services/ontomorph/twins";

export async function GET() {
  try {
    const system = await getBodySystem("cardiovascular");
    const events = await getEvents();

    return NextResponse.json({
      success: true,
      system,
      events,
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