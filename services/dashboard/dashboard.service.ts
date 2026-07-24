export function buildDashboard(events: any[]) {
  const diagnoses = events.filter(
    (e) => e.eventType === "diagnosis"
  )

  const medications = events.filter(
    (e) => e.eventType === "medication"
  )

  const symptoms = events.filter(
    (e) => e.eventType === "symptom"
  )

  const deviceReadings = events.filter(
    (e) => e.eventType === "device_reading"
  )

  const systems = [
    ...new Set(
      events
        .map((e) => e.data?.system)
        .filter(Boolean)
    ),
  ]

  // Temporary health score algorithm
  const healthScore = Math.max(
    60,
    100 -
      diagnoses.length * 10 -
      symptoms.length * 5
  )

  return {
    stats: {
      healthScore,
      totalEvents: events.length,
      systems: systems.length,
      diagnoses: diagnoses.length,
      medications: medications.length,
      deviceReadings: deviceReadings.length,
      symptoms: symptoms.length,
    },

    patient: {
      twinId: events[0]?.twinId ?? "",
      systems,
    },

    latestDiagnosis: diagnoses[0] ?? null,

    latestMedication: medications[0] ?? null,

    latestReading: deviceReadings[0] ?? null,

    timeline: events,
  }
}