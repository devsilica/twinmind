"use client";

import { useEffect, useState } from "react";
import { getBodySystem, getEvents } from "@/services/ontomorph/twins";

export default function SDKTestPage() {
  const [system, setSystem] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const cardio = await getBodySystem("cardiovascular");
        setSystem(cardio);

        const healthEvents = await getEvents();
        setEvents(healthEvents);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    }

    load();
  }, []);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">TwinMind SDK Test</h1>

      {error && (
        <div className="rounded-lg border border-red-500 p-4">
          {error}
        </div>
      )}

      <section>
        <h2 className="font-semibold mb-2">Body System</h2>
        <pre>{JSON.stringify(system, null, 2)}</pre>
      </section>

      <section>
        <h2 className="font-semibold mb-2">
          Events ({events.length})
        </h2>

        <pre>{JSON.stringify(events, null, 2)}</pre>
      </section>
    </main>
  );
}