import { SYSTEM_TO_ORGANS } from "./systems";

export function getActiveOrgans(
  systems: string[]
) {
  const active = new Set<string>();

  systems.forEach((system) => {
    SYSTEM_TO_ORGANS[system]?.forEach((organ) =>
      active.add(organ)
    );
  });

  return active;
}