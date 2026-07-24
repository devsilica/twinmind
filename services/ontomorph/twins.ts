import { connectToTwin } from "./auth";
import type { EventFilter, HealthEvent, SystemView } from "@ontomorph/dtp-sdk";

/**
 * Connect to the current Digital Twin.
 */
export function getTwin() {
  return connectToTwin();
}

/**
 * Get a specific body system.
 */
export async function getBodySystem(system: string): Promise<SystemView> {
  const twin = getTwin();

  return twin.systems.get(system);
}

/**
 * Get health events.
 */
export async function getEvents(
  filter?: EventFilter
): Promise<HealthEvent[]> {
  const twin = getTwin();

  return twin.events.list(filter);
}

/**
 * Stream new health events.
 */
export function streamEvents(
  callback: (event: HealthEvent) => void,
  filter?: EventFilter
) {
  const twin = getTwin();

  return twin.events.stream(
    {
      intervalMs: 5000,
      ...filter,
    },
    callback
  );
}